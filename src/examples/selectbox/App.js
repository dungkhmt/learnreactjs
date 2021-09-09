import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const optionVehicles = [
    { value: "value-car", title: "Car" },
    { value: "value-truck", title: "Truck" },
    { value: "value-bus", title: "BUS" },
  ];

  return (
    <>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="value-fortuner"> Fortuner </option>
        <option value="value-vinfast"> VinFast </option>
        <option value="value-bmw"> BMW </option>
      </select>
      <br></br>
      <label>You select: {value}</label>
      <br></br>
      <select
        onChange={(e) => {
          setVehicle(e.target.value);
        }}
      >
        {optionVehicles.map((item, index) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
      <br></br>
      <label>You select vehicle: {vehicle}</label>
    </>
  );
}
