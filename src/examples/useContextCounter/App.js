import React, { useState } from "react";
import Counter from "./Counter";
import { CounterContext } from "./CounterContext";
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div>Counter = {counter}</div>
      <Counter />
    </CounterContext.Provider>
  );
}
