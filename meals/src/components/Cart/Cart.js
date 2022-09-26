import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles["cart-items"]}>
      <ul>
        {props.dataArr.map((data) => (
          <CartItem
            price={data.price}
            name={props.name}
            amount={data.amount}
            onRemove={data.onRemove}
            onAdd={data.onAdd}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <div> Total Amount</div>
        <div>
            <div className={styles.actions}>{}</div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
