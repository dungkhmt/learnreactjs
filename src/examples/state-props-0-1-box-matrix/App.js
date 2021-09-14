import range from "lodash/range";
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import ViewBox from "./ViewBox";
export default function App() {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [matrix, setMatrix] = useState([]);

  const handleChangeRow = (e) => {
    //const newRows = [...rows, rows.length];
    //setRows(newRows);
    //console.log(rows);
    const n = e.target.value;
    setRows(range(n));

    let newM = [];
    for (let j = 0; j < n; j++) {
      let a = [];
      for (let i = 0; i < cols.length; i++) {
        a.push(0);
      }
      newM.push(a);
    }
    setMatrix(newM);
    localStorage.setItem("matrix", JSON.stringify(matrix));
  };
  const handleChangeCol = (e) => {
    //const newCols = [...cols, cols.length];
    //setCols(newCols);
    const n = e.target.value;
    setCols(range(n));
    //console.log(cols);

    let newM = [];
    for (let j = 0; j < rows.length; j++) {
      let a = [];
      for (let i = 0; i < n; i++) {
        a.push(0);
      }
      newM.push(a);
    }
    setMatrix(newM);
    localStorage.setItem("matrix", JSON.stringify(matrix));
  };

  useEffect(() => {
    const m = JSON.parse(localStorage.getItem("matrix"));
    setMatrix(m);
    let row = m.length;
    let col = m[0].length;
    console.log("useEffect, m = ", m, "row = ", row, "col = ", col);
    let a = [];
    for (let i = 0; i < row; i++) a.push(0);
    setRows(a);
    let b = [];
    for (let i = 0; i < col; i++) b.push(0);

    setCols(b);
  }, []);
  function handleDownload() {
    const e = document.createElement("a");
    const file = new Blob([JSON.stringify(matrix)], {
      type: "text/plain;charset=utf-8",
    });
    e.href = URL.createObjectURL(file);
    e.download = "myTextFile.txt";
    document.body.appendChild(e);
    e.click();
  }
  return (
    <AppContext.Provider value={{ matrix, setMatrix }}>
      <label>ROW: </label>
      <input type="text" onChange={handleChangeRow} />
      <label>COL: </label>
      <input type="text" onChange={handleChangeCol} />
      <div>
        <ViewBox rows={rows} cols={cols} />
      </div>
      <button onClick={handleDownload}>Save to file</button>
    </AppContext.Provider>
  );
}
