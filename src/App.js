import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./contexts/cart-context";
import CartItemProvider from "./contexts/CartItemProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <CartItemProvider>
      <CartContext.Provider
        value={{
          showCart,
          handleHideCart,
          handleShowCart,
        }}
      >
        {showCart && <Cart />}
        <Header />
        <Meals />
      </CartContext.Provider>
    </CartItemProvider>
  );
};

export default App;
