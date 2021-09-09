import "./App.css";

export default function App() {
  const data = [
    { id: "0001", name: "Pierre", address: "Rue de la Neuville" },
    { id: "0002", name: "Francois", address: "Grand rue" },
    { id: "0003", name: "Stephan", address: "Wallons" },
  ];

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
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
