import React from "react";
import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = (props) => {
  // const [orderArr, setOrderArr] = useState([]);
  // useEffect(() => {
  //   props.getOrderArr(orderArr);
  // }, [orderArr, props]);

  
  // //

  return (
    <div className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((data) => (
          <MealItem
            key={data.id}
            name={data.name}
            description={data.description}
            price={data.price}
            addToOrderArr={props.addToOrderArr}
          />
        ))}
      </ul>
    </div>
  );
};

export default AvailableMeals;
