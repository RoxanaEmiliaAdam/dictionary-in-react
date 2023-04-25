import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("black");

  const handleClick = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <h1 onClick={handleClick} style={{ color: color }}>
      Please type a word/sequence separated by <em>comma</em>
    </h1>
  );
}
