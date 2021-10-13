import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
export default function SubCounter() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>SubCounter: Inc</button>
    </div>
  );
}
