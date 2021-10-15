import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Sudoku from "./Sudoku";

export default function App() {
  const [n, setN] = useState(null);
  const [result, setResult] = useState("");
  const [lst, setLst] = useState([]);

  let x = [];
  let solutions = [];
  for (let i = 0; i < 10; i++) x.push(0);
  function solution() {
    let s = "";
    //console.log("solution, x = ", x, " lst = ", lst);
    for (let i = 0; i < n; i++) s = s + x[i];
    solutions.push(s);
    //let tmp = []; //[...lst, s];
    //for (let j = 0; j < lst.length; j++) tmp.push(lst[j]);
    //tmp.push(s);
    //console.log("solution, tmp = ", tmp);
    //setLst([...lst, s]);
  }
  function Try(k) {
    //console.log("Try(", k, x, "), n = ", n);
    for (let v = 0; v <= 1; v++) {
      x[k] = v;
      if (k == n - 1) solution(x);
      else Try(k + 1, x);
    }
  }
  function handleClick() {
    Try(0);
    setLst(solutions);
  }
  function handleChange(e) {
    console.log("change e = ", e.target.value);
    setN(e.target.value);
  }
  return (
    <div style={{ padding: 20 }}>
      <Sudoku />
      <h1>Discrete Math</h1>
      <div style={{ padding: 100 }}>
        <TextField label="input n" onChange={handleChange} />
        <Button variant="text" color="primary" onClick={handleClick}>
          Process
        </Button>
      </div>
      <div>
        {lst.map((i) => (
          <li>{i}</li>
        ))}
      </div>
    </div>
  );
}
