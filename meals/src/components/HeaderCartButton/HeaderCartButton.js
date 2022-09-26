import React, { useEffect, useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [badgeFlag, setBadgeFlag] = useState(false);

  useEffect(() => {
    setBadgeFlag(true);
    setTimeout(() => setBadgeFlag(false), 300);
  }, [props.numOfMeals]);

  return (
    <button className={styles.button} onClick={props.onHeaderButtonClick}>
      <CartIcon style={styles.icon} />
      <div>Your Cart</div>
      <div className={`${styles.badge} ${badgeFlag && styles.bump}`}>
        {props.numOfMeals}
      </div>
    </button>
  );
};

export default HeaderCartButton;
