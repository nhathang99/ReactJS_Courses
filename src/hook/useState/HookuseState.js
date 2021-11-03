import React from "react";
import { useState } from "react";
const orders = [100, 200, 300, 400];
const HookuseState = () => {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  // Th setState với callback
  // trả lại state trước đó
  // const handleIncrease = () => {
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  // };

  return (
    <div style={{ margin: "20px" }}>
      <h1>{counter}</h1>
      <div className="d-flex">
        <button className="btn btn-success" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn btn-danger" onClick={handleDecrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default HookuseState;
