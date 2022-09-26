import React from "react";
import Cart from "../Cart/Cart";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <Cart
          dataArr={props.orderArr}
          onCloseClick={props.onCloseClick}
          onAddInCart={props.onAddInCart}
          onRemoveFromCart={props.onRemoveFromCart}
        />
      </div>
    </React.Fragment>
  );
};

export default Modal;
