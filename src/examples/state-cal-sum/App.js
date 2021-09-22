import React, { useState } from "react";
export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [rs, setRs] = useState(0);
  function onChangeA(e) {
    let t = parseInt(e.target.value);
    setA(t);
    setRs(t + b);
  }
  function onChangeB(e) {
    let t = parseInt(e.target.value);
    setB(t);
    setRs(a + t);
  }

  return (
    <div>
      <div>
        <input type="text" onChange={onChangeA}></input>
        <input type="text" onChange={onChangeB}></input>
      </div>
      <div>
        sum {a} + {b} = {rs}
      </div>
    </div>
  );
}
