import React from "react";

const CartContext = React.createContext({
  showCart: false,
  handleHideCart: () => {},
  handleShowCart: () => {},
});


export default CartContext;