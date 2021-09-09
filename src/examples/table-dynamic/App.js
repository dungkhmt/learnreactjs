import { useState } from "react";
import "./App.css";
export default function App() {
  const data = [
    { id: "0001", name: "Pierre", address: "Rue de la Neuville" },
    { id: "0002", name: "Francois", address: "Grand rue" },
    { id: "0003", name: "Stephan", address: "Wallons" },
  ];

  const [contacts, setContacts] = useState(data);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    address: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newContact = { ...contact }; // copy object
    newContact[fieldName] = fieldValue;
    setContact(newContact); // set the new object to state contact
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contact.id,
      name: contact.name,
      address: contact.address,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add new</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          required="required"
          placeholder="Enter an id"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address"
          onChange={handleFormChange}
        />
        <button type="submit">ADD</button>
      </form>
    </>
  );
}
