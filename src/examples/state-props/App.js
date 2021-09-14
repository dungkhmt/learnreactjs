import { useState } from "react";
import View from "./View";
export default function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div>Num : {num}</div>
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNum(num - 1);
          }}
        >
          -
        </button>
      </div>
      {true ? <View num={num} /> : ""}
    </>
  );
}
