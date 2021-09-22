import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
const data = [
  { id: "1", name: "username1" },
  { id: "2", name: "username2" },
  { id: "3", name: "username3" },
];
export default function App() {
  const [selected, setSelected] = useState([]);

  const [checkAll, setCheckAll] = useState(false);

  function handleChange(e, i) {
    //alert("Change " + e.target.value + " index = " + i);
    let s = selected;
    s[i] = !s[i];

    setSelected([...s]);

    let cnt = 0;
    for (let i = 0; i < data.length; i++) if (s[i] == true) cnt = cnt + 1;
    if (cnt == data.length) setCheckAll(true);
    if (cnt == 0) setCheckAll(false);
  }
  function handleClick() {
    console.log(selected);
  }
  function handleCheckAll() {
    console.log("handleCheckAll");
    let s = [];
    for (let i = 0; i < data.length; i++) s.push(true);
    setSelected(s);
  }
  useEffect(() => {
    let s = [];
    for (let i = 0; i < data.length; i++) s.push(false);
    setSelected(s);
  }, []);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>
                <Checkbox
                  id={"check" + { i }}
                  checked={selected[i]}
                  onChange={(e) => handleChange(e, i)}
                ></Checkbox>
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <label>Check All</label>
      <Checkbox onChange={handleCheckAll} checked={checkAll}></Checkbox>
      <Button onClick={handleClick}>Process</Button>
    </div>
  );
}
