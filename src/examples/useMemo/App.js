import React, { useMemo, useState } from "react";
export default function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "green" : "white",
  };
  const nextNum = useMemo(() => {
    return f(num);
  }, [num]);

  function handleChange(e) {
    setNum(parseInt(e.target.value));
  }
  console.log("App render");
  return (
    <>
      <input type="number" value={num} onChange={handleChange}></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={theme}>{nextNum}</div>
    </>
  );
}
function f(num) {
  console.log("slow function");
  for (let i = 0; i < 2000000000; i++) {}
  return num + 1;
}
