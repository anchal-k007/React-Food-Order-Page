import React, { useReducer } from "react";
import CartItemContext from "./cart-item-context";

const defaultCartItemState = {
  items: [],
  totalAmount: 0
}

const cartItemReducer = (state, action) => {
  if(action.type === "ADD_TO_CART") {
    const {item} = action;
    let itemsArray = state.items;
    let itemFound = false;
    itemsArray = itemsArray.filter(currItem => {
      if(currItem.id !== item.id) 
        return currItem;
      itemFound = true;
      currItem.amount += item.amount;
      return currItem;
    });
    
    if(!itemFound)
      itemsArray.push(item);
    
    const totalAmount = state.totalAmount + item.amount * item.price;

    return {
      items: itemsArray,
      totalAmount
    }
  } else if(action.type === "REMOVE_FROM_CART") {
    const {id} = action;
    let itemsArray = state.items;
    
    const itemIndex = itemsArray.findIndex(item => item.id === id);
    const removedItem = itemsArray[itemIndex];
    
    itemsArray[itemIndex].amount--;
    if(itemsArray[itemIndex].amount <= 0) {
      itemsArray = itemsArray.filter(item => item.id !== id);
    }
    const totalAmount = state.totalAmount - removedItem.price;


    return {
      items: itemsArray,
      totalAmount
    }
  }

  return defaultCartItemState;
}

const CartItemProvider = (props) => {
  const [cartItemState, dispatchFn] = useReducer(cartItemReducer, defaultCartItemState);

  const handleAddToCart = (item) => {
    dispatchFn({type: "ADD_TO_CART", item: item});
  }

  const handleRemoveFromCart = (id) => {
    dispatchFn({type: "REMOVE_FROM_CART", id: id});
  }


  return(
    <CartItemContext.Provider value={{
      items: cartItemState.items,
      totalAmount: cartItemState.totalAmount,
      addItem: handleAddToCart,
      removeItem: handleRemoveFromCart,
    }}>
      {props.children}
    </CartItemContext.Provider>
  )
}

export default CartItemProvider;