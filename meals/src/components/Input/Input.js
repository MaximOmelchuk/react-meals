import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const onChange = (e) => {
    props.setAmount(e.target.value)
  }

  return (
    <div className={styles.input}>
      <label>Amount</label>
      <input type="number" value={props.value} onChange={onChange}></input>
    </div>
  );
};

export default Input;
