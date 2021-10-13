import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
export default function Counter() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </div>
  );
}
