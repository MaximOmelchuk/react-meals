import React from "react";
import "./App.css";
import AvailableMeals from "./components/AvailableMeals.js/AvailableMeals";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const onAddToCart = () => {

  }

  return (
    <React.Fragment>
      <Header />
      <AvailableMeals onAddToCart={onAddToCart} />
      {/* <Modal /> */}
    </React.Fragment>
  );
}

export default App;
