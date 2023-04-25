import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick(operationType) {
    operationType === "minus"
      ? setNumber((prevNumber) => prevNumber - 1)
      : setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>{number}</h3>
      <button onClick={() => handleClick("plus")}>+1</button>
      <button onClick={() => handleClick("minus")}>-1</button>
    </div>
  );
}
