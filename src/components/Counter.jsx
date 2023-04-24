import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>{number}</h3>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}
