import React, { useState } from "react";

export default function Test2() {
  const [color, setColor] = useState(0);
  const style1 = {
    backgroundColor: color === 1 ? "green" : "blue",
    width: "500px",
    height: "200px",
  };
  const style2 = {
    backgroundColor: color === 0 ? "green" : "blue",
    width: "500px",
    height: "200px",
  };

  console.log("Test2 render color = ", color);

  return (
    <>
      <div style={style1}>
        <button onClick={() => setColor(1 - color)}>Change color</button>
      </div>
      <div style={style2}>
        <button onClick={() => setColor(1 - color)}>Change color</button>
      </div>
    </>
  );
}
