import React, { useState } from "react";
import { useHistory } from "react-router";

export default function FormAdd(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const maxID = props.maxID;
  const setMaxID = props.setMaxID;
  const history = useHistory();
  function findNewID() {
    let id = maxID + 1;
    setMaxID(id);
    return id;
  }
  function handleAdd() {
    let newCustomers = [
      ...customers,
      {
        id: findNewID(),
        name: name,
        address: address,
        phone: phone,
      },
    ];
    setCustomers(newCustomers);
    history.push("/list");
  }
  return (
    <div className="form-add">
      <div className="add-item">
        <div className="item-label">Name</div>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
      </div>
      <div className="add-item">
        <div className="item-label">Address</div>
        <div>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="add-item">
        <div className="item-label">Phone number</div>
        <div>
          <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
        </div>
      </div>
      <div className="add-item">
        <div className="add-item-button">
          <button
            style={{ backgroundColor: "blue", border: "none" }}
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
