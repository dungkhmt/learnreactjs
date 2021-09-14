import React, { useState } from "react";
import SubCom from "./SubCom";

export default function Test() {
  const [text, setText] = useState();
  console.log("Test render");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <label>You type {text}</label>
      <SubCom />
    </div>
  );
}
