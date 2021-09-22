import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";

const orders = [
  {
    id: "ORD0001",
    customerId: "C0001",
    date: "2021-03-21",
    orderItems: [
      { productId: "M001", productName: "Vani Milk", QTY: 200 },
      { productId: "M002", productName: "Socola Milk", QTY: 220 },
      { productId: "M003", productName: "Creme", QTY: 100 },
    ],
  },
  {
    id: "ORD0002",
    customerId: "C0003",
    date: "2021-03-11",
    orderItems: [
      { productId: "P001", productName: "French Cheese", QTY: 210 },
      { productId: "P002", productName: "American Cheese", QTY: 120 },
      { productId: "P003", productName: "May Cheese", QTY: 130 },
    ],
  },
  {
    id: "ORD0003",
    customerId: "C0005",
    date: "2021-06-14",
    orderItems: [
      { productId: "P001", productName: "French Cheese", QTY: 310 },
      { productId: "P002", productName: "American Cheese", QTY: 620 },
      { productId: "M003", productName: "Creme", QTY: 230 },
    ],
  },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow key={row.key}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.customerId}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>

      <TableRow key={row.id + "-c"}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div margin={1} style={{ backgroundColor: "lightgrey" }}>
              <h3>OrderItems</h3>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ProductID</TableCell>
                    <TableCell>ProductName</TableCell>
                    <TableCell align="right">QTY</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orderItems.map((orderItem) => (
                    <TableRow key={orderItem.productId}>
                      <TableCell component="th" scope="row">
                        {orderItem.productId}
                      </TableCell>
                      <TableCell>{orderItem.productName}</TableCell>
                      <TableCell align="right">{orderItem.QTY}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>OrderID</TableCell>
            <TableCell align="right">CustomerID</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
