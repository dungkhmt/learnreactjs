import { useState } from "react";
export default function App() {
  const [textValue, setTextValue] = useState(null);

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      <label>The text you type is: {textValue}</label>
    </>
  );
}
