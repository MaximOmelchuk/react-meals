import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import MealsSummary from "../MealsSummary/MealsSummary";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={img} alt="meals" />
      </div>
      <MealsSummary />
    </div>
  );
};

export default Header;
