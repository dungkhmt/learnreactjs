import React from "react";
import "./App.css";
export default function Box(props) {
  const id = props.id;
  const bgcolor = props.bgcolor;
  const theme = {
    width: "500px",
    height: "100px",
    border: "black",
    borderStyle: "solid",
    borderWidth: "1",
    backgroundColor: bgcolor,
  };
  return (
    <div
      style={theme}
      onClick={() => {
        alert("Click " + id + " color = " + bgcolor);
      }}
    >
      123
    </div>
  );
}
