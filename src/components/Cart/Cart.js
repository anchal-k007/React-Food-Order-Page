import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import CartItemContext from "../../contexts/cart-item-context";
import CartItem from "./CartItem";

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const cartItemsCtx = useContext(CartItemContext);

  const itemsAdded = cartItemsCtx.length > 0;

  const cardItemsArray = cartItemsCtx.items;

  console.log(Date.now());
  console.log(cardItemsArray);

  const handleCartItemAdd = (item) => {
    cartItemsCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const handleCartItemRemove = (id) => {
    cartItemsCtx.removeItem(id);
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cardItemsArray.map(item => 
          <CartItem key={item.id} item={item} onRemove={handleCartItemRemove} onAdd={handleCartItemAdd}/> 
        )}
      </ul>
      <div className={classes.total}>
        <span>Total Price </span>
        <span>{cartItemsCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={cartCtx.handleHideCart}>Close</button>
        {itemsAdded && <button className={classes.button} onClick={() => console.log("Order placed...")}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;