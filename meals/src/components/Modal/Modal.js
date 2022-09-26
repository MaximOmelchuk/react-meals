import React from "react";
import Cart from "../Cart/Cart";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <React.Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <Cart />
      </div>
    </React.Fragment>
  );
};

export default Modal;
