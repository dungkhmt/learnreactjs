import { useState } from "react";
export default function App() {
  const [value, setValue] = useState("choice1");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <label>You select {value}</label>
      <form>
        <label>
          <input
            type="radio"
            value="choice1"
            checked={value === "choice1"}
            onChange={handleChange}
          />
          Choice 1
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="choice2"
            checked={value === "choice2"}
            onChange={handleChange}
          />
          Choice 3
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="choice3"
            checked={value === "choice3"}
            onChange={handleChange}
          />
          Choice 2
        </label>
      </form>
    </>
  );
}
