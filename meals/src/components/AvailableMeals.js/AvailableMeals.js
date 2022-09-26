import React, { useState } from "react";
import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = (props) => {
  const [orderArr, setOrderArr] = useState([]);

  const addToOrderArr = (data) => {
    setOrderArr((prevState) => {
      const repeatItemIndex = prevState.findIndex(
        (item) => item.name === data.name
      );
      if (repeatItemIndex > -1) {
        const newState = JSON.parse(JSON.stringify(prevState))
        newState[repeatItemIndex].amount = (+newState[repeatItemIndex].amount) + (+data.amount);
        return [...newState];
      } else {
        return [data, ...prevState];
      }
    });
  };

  return (
    <div className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((data) => (
          <MealItem
            key={data.id}
            name={data.name}
            description={data.description}
            price={data.price}
            addToOrderArr={addToOrderArr}
          />
        ))}
      </ul>
    </div>
  );
};

export default AvailableMeals;
