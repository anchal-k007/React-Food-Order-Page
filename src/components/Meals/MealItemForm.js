import React, { useContext , useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const mealRef = useRef();

  const handleAddToCart = (event) => {
    event.preventDefault();
    const amountAdded = +mealRef.current.value;
    props.onAddToCart(amountAdded);
  }

  return (
    <form className={classes.form} onSubmit={handleAddToCart}>
      <Input label={"Quantity"} id={"amount_" + props.id} ref={mealRef} input={{
        id: "amount_" + props.id,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"
      }}/>
      <button className={classes.button} type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
