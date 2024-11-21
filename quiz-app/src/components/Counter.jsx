import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }
  useEffect(()=>{
    setCount1(count*5)
  },[count])


  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter: {count}</h1>
      <h1 className="counter-heading">Counter1: {count1}</h1>
      <div className="counter-buttons">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
