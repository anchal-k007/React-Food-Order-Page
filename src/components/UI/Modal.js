import { Fragment, useContext } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import CartContext from "../../contexts/cart-context";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} onClick={props.onClick}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const domElement = document.getElementById("modal");
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {createPortal(<BackDrop onClick={cartCtx.handleHideCart} />, domElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, domElement)}
    </Fragment>
  );
};

export default Modal;
