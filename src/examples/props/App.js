import React, { useState } from "react";

const Com = (props) => {
  const counter = props.counter;
  const setCounter = props.setCounter;
  return <button onClick={() => setCounter(counter + 1)}>Inc</button>;
};
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Com counter={counter} setCounter={setCounter} />
      Counter: {counter}
    </div>
  );
}
