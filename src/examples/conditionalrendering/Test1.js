import React, { useEffect, useState } from "react";

function Com1() {
  const [counter, setCounter] = useState(0);
  console.log("Com1 render");
  useEffect(() => {
    console.log("Com1 effect");
    return () => {
      console.log("Com1 cleanup, component unmount");
    };
  }, []);
  return (
    <>
      <h1>Com 1, counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </>
  );
}
function Com2() {
  const [counter, setCounter] = useState(0);
  console.log("Com2 render");
  useEffect(() => {
    console.log("Com2 effect");
    return () => {
      console.log("Com2 cleanup, component unmount");
    };
  }, []);
  return (
    <>
      <h1>Com 2, counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </>
  );
}

export default function Test1() {
  const [com1, setCom1] = useState(true);
  console.log("Test1 render");
  return (
    <div>
      <button onClick={() => setCom1(!com1)}>Change Com</button>
      {com1 ? <Com1 /> : <Com2 />}
    </div>
  );
}
