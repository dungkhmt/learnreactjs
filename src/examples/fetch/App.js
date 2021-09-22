import { useEffect, useState } from "react";
import * as BST from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const PaginationTable = ({ items }) => {
  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "userId", text: "UserID" },
    { dataField: "title", text: "Title" },
    { dataField: "body", text: "Content" },
  ];

  return (
    <>
      <BootstrapTable
        dataField="id"
        data={items}
        columns={columns}
        pagination={paginationFactory()}
      />
    </>
  );
};
const Table = ({ items }) => {
  return (
    <BST.Table stripped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>UserID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
      </tbody>
    </BST.Table>
  );
};
const TableJson = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
    </>
  );
};
export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <div>
      <PaginationTable items={items} />
    </div>
  );
}
