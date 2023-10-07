import React from "react";

import classes from "./MealsSummary.module.css";  

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Order Food Online</h2>
      <p>
        Select from our list of finely curated dishes to order from the comfort of your home
      </p>
      <p>
        All the dishes are made by top-rated chefs using the finest ingredients and express delivery
      </p>
    </div>
  )
};

export default MealsSummary;