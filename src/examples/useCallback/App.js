import React, { useCallback, useState } from "react";
import Com from "./Com";
export default function App() {
  const [num, setNum] = useState(30);
  const [green, setGreen] = useState(false);
  const theme = {
    backgroundColor: green ? "green" : "white",
  };
  console.log("App render");

  const setSize = useCallback(() => {
    return 2 * num;
  }, [num]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setGreen((prevGreen) => !prevGreen)}>
        Change Green
      </button>

      <Com setSize={setSize} />
    </div>
  );
}
