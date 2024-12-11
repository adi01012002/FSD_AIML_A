import React, { useState } from "react";

const Refex = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <h2>refcount: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Refex;
