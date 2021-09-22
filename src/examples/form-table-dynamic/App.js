import React, { useState } from "react";
import "./App.css";

const Form = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    let o = { name: name, address: address };
    let newData = [...data, o];
    setData(newData);
    console.log("handleSubmit, newData = ", newData);
  };
  return (
    <div className="form-container">
      <div className="form">
        <div className="input">
          <label className="label-input">Name</label>
          <input
            type="text"
            className="text-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="input">
          <label className="label-input">Address</label>
          <input
            type="text"
            className="text-input"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className="form-button">
          <button type="submit" className="button-add" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const Table = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <td>Name</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr className="table-rows" key={index}>
              <td>{e.name}</td>
              <td>{e.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default function App() {
  const [data, setData] = useState([]);

  console.log("App render");
  return (
    <>
      <Form data={data} setData={setData} />

      <Table data={data} />
    </>
  );
}
