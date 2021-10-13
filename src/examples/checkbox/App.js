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
  const [users, setUsers] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  function handleChange(e) {
    const { id, checked } = e.target;
    let tmp = users.map((u) => (u.id === id ? { ...u, checked: checked } : u));
    let cnt = 0;
    for (let j = 0; j < users.length; j++) {
      if (tmp[j].checked == true) cnt = cnt + 1;
    }
    if (cnt == users.length) setCheckAll(true);
    else setCheckAll(false);

    setUsers(tmp);
  }
  function handleClick() {
    console.log(users);
  }
  function handleCheckAll() {
    if (checkAll) {
      let tmp = data.map((i) => {
        return { ...i, checked: false };
      });
      setUsers(tmp);
    } else {
      let tmp = data.map((i) => {
        return { ...i, checked: true };
      });
      setUsers(tmp);
    }
    setCheckAll(!checkAll);
  }
  useEffect(() => {
    let tmp = data.map((d) => {
      return {
        ...d,
        checked: false,
      };
    });
    setUsers(tmp);
  }, []);
  return (
    <div style={{ width: "500px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox onChange={handleCheckAll} checked={checkAll}></Checkbox>
              <label>Check All</label>
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, i) => (
            <TableRow key={i}>
              <TableCell>
                <Checkbox
                  id={item.id}
                  checked={item.checked}
                  onChange={handleChange}
                ></Checkbox>
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button variant="contained" color="primary" onClick={handleClick}>
        Process
      </Button>
    </div>
  );
}
