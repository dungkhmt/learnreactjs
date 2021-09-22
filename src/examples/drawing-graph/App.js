import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    console.log("useEffect");
    var canvas = document.getElementById("board"); //document.querySelector("#board");
    var ctx = canvas.getContext("2d");
    var sketch = document.querySelector("#sketch");
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }, []);
  return (
    <div className="sketch" id="sketch">
      <canvas className="sketch" id="board"></canvas>
    </div>
  );
}
