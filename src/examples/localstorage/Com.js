import React from "react";

export default function Com() {
  function handleClick() {
    const counter = localStorage.getItem("counter");
    console.log("Com counter = ", counter);
  }
  return (
    <div>
      <button onClick={handleClick}>View</button>
    </div>
  );
}
