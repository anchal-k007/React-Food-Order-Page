import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartItemContext from "../../contexts/cart-item-context";


const MealItem = (props) => {
  const cartItemCtx = useContext(CartItemContext);

  const onAddToCart = (enteredAmount) => {
    console.log("add to cart function called");
    
    cartItemCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: enteredAmount,
      price: props.meal.price,
    });
  };

  return(
    <div className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={classes.description}>{props.meal.description}</p>
        <p className={classes.price}>${props.meal.price.toFixed(2)}</p>
      </div>

      <MealItemForm id={props.meal.id} onAddToCart={onAddToCart}/>

    </div>
  )
};

export default MealItem;