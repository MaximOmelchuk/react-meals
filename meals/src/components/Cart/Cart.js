import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const totalPrice = props.dataArr.reduce(
    (acc, cur) => acc + +cur.price * +cur.amount,
    0
  ).toFixed(2);

  return (
    <div className={styles["cart-items"]}>
      <ul>
        {props.dataArr.map((data) => (
          <CartItem
            key={Math.random().toString()}
            price={data.price}
            name={data.name}
            amount={data.amount}
            onRemove={props.onRemoveFromCart}
            onAdd={props.onAddInCart}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{`$ ${totalPrice}`}
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onCloseClick}>Close</button>
        <button className={styles['button--alt']}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
