import React, { useState } from "react";
import "./App.css";
import AvailableMeals from "./components/AvailableMeals.js/AvailableMeals";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const [orderArr, setOrderArr] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [numOfMeals, setNumOfMeals] = useState(0);

  const onHeaderButtonClick = () => {
    setModalFlag(true);
  };

  const onCloseClick = () => {
    setModalFlag(false);
  };

  const onAddInCart = (name) => {
    setOrderArr((prevState) => {
      const index = prevState.findIndex((item) => item.name === name);
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[index].amount = +newState[index].amount + 1;
      return [...newState];
    });
  };

  const onRemoveFromCart = (name) => {
    setOrderArr((prevState) => {
      const index = prevState.findIndex((item) => item.name === name);
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[index].amount--;

      if (newState[index].amount === 0) {
        setNumOfMeals(prevState.length - 1);
        return newState.filter((item) => item.name !== name);
      } else {
        return [...newState];
      }
    });
  };

  const addToOrderArr = (data) => {
    setOrderArr((prevState) => {
      const repeatItemIndex = prevState.findIndex(
        (item) => item.name === data.name
      );
      if (repeatItemIndex > -1) {
        const newState = JSON.parse(JSON.stringify(prevState));
        newState[repeatItemIndex].amount =
          +newState[repeatItemIndex].amount + +data.amount;
        setNumOfMeals(newState.length);
        return [...newState];
      } else {
        setNumOfMeals(prevState.length + 1);
        return [data, ...prevState];
      }
    });
  };

  return (
    <React.Fragment>
      <Header
        onHeaderButtonClick={onHeaderButtonClick}
        onCloseClick={onCloseClick}
        numOfMeals={numOfMeals}
      />
      <AvailableMeals addToOrderArr={addToOrderArr} />
      {modalFlag && (
        <Modal
          orderArr={orderArr}
          onCloseClick={onCloseClick}
          onAddInCart={onAddInCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}
    </React.Fragment>
  );
}

export default App;
