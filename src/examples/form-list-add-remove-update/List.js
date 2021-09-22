import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
const TableCustomer = (customers, onDelete, onEdit) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map((c, index) => (
          <TableRow>
            <TableCell>{c.id}</TableCell>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.address}</TableCell>
            <TableCell>{c.phone}</TableCell>
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => onEdit(index)}>Edit</button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default function List(props) {
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const history = useHistory();

  function handleDelete(idx) {
    let id = customers[idx].id;
    //alert("delete " + id);
    setCustomers(
      customers.filter((c) => {
        return c.id != id;
      })
    );
  }
  function handleEdit(idx) {
    history.push("/edit/" + idx);
  }
  function handleAdd() {
    history.push("/add");
  }
  return (
    <div className="list">
      <div>
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div>
        List of customers
        {customers ? TableCustomer(customers, handleDelete, handleEdit) : ""}
      </div>
    </div>
  );
}
