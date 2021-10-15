import { Button } from "@material-ui/core";
import React, { useState } from "react";

const create2Array = (row, col) => {
  let x = [];
  for (let i = 0; i <= 8; i++) {
    let r = [];
    for (let j = 0; j <= 8; j++) r.push(0);
    x.push(r);
  }
  return x;
};
const create3Array = (s1, s2, s3) => {
  let x = [];
  for (let i = 0; i < s1; i++) {
    let y = [];
    for (let j = 0; j < s2; j++) {
      let z = [];
      for (let k = 0; k < s3; k++) z.push(0);
      y.push(z);
    }
    x.push(y);
  }
  return x;
};
export default function Sudoku() {
  const [table, setTable] = useState([]);
  let x = create2Array(9, 9);
  let sol = create2Array(9, 9);
  let markRow = create2Array(9, 10);
  let markCol = create2Array(9, 10);
  let markSquare = create3Array(3, 3, 10);
  let found = false;

  function check(v, r, c) {
    if (markRow[r][v] == 1) return 0;
    if (markCol[c][v] == 1) return 0;
    if (markSquare[Math.floor(r / 3)][Math.floor(c / 3)][v] == 1) return 0;
    return 1;
  }
  function Try(r, c) {
    if (found) return;
    for (let v = 1; v <= 9; v++) {
      if (check(v, r, c) == 1) {
        x[r][c] = v;
        markRow[r][v] = 1;
        markCol[c][v] = 1;
        markSquare[Math.floor(r / 3)][Math.floor(c / 3)][v] = 1;
        if (r == 8 && c == 8) {
          found = true;
          //console.log(x);
          //setTable(x);
          for (let i = 0; i <= 8; i++)
            for (let j = 0; j <= 8; j++) sol[i][j] = x[i][j];
        } else {
          if (c == 8) Try(r + 1, 0);
          else Try(r, c + 1);
        }
        markRow[r][v] = 0;
        markCol[c][v] = 0;
        markSquare[Math.floor(r / 3)][Math.floor(c / 3)][v] = 0;
      }
    }
  }
  function handleSolve() {
    console.log(x);
    //setTable(x);
    found = false;
    Try(0, 0);
    setTable(sol);
    let r = 5;
    console.log(Math.floor(r / 3));
  }
  return (
    <div>
      <Button onClick={handleSolve}>Solve</Button>
      <table style={{ border: "solid" }}>
        {table.map((row) => (
          <tr>
            {row.map((cell) => (
              <td
                style={{
                  border: "solid",
                  width: "30px",
                  height: "20px",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
