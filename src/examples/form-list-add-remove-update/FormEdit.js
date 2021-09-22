import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
export default function FormEdit(props) {
  const params = useParams();
  const index = params.index;
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  function findCustomer(id) {
    console.log(
      "findCustomer, id = ",
      id,
      " length = ",
      customers ? customers.length : 0
    );
    for (let i = 0; i < customers.length; i++) {
      console.log(
        "findCustomer, customer[',i,'].id = ",
        customers[i].id,
        " id = ",
        id
      );
      if (customers[i].id == id) {
        console.log("FOUND i = ", i);
        return customers[i];
      }
    }
    return null;
  }
  useEffect(() => {
    console.log(
      "Edit, effect, customer length  = ",
      customers ? customers.length : 0
    );
    let c = customers[index]; //findCustomer(customerId);
    if (c != null) {
      setName(c.name);
      setAddress(c.address);
      setPhone(c.phone);
      console.log("prev  name = ", c.name);
    } else {
      console.log("cannot find customer ", index);
    }
  }, []);

  function handleSave() {
    let currentCustomers = customers;
    let c = customers[index]; // findCustomer(customerId);
    c.name = name;
    c.address = address;
    c.phone = phone;
    console.log(currentCustomers);
    setCustomers([...currentCustomers]);

    history.push("/list");
  }
  return (
    <div className="form-add">
      <div className="add-item">
        <div className="item-label">Name</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="add-item">
        <div className="item-label">Address</div>
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="add-item">
        <div className="item-label">Phone number</div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="add-item">
        <div className="add-item-button">
          <button
            style={{ backgroundColor: "blue", border: "none" }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
