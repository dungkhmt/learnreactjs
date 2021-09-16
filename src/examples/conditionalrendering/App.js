import React, { useState } from "react";

function Com1() {
  return <h1>Com 1</h1>;
}
function Com2() {
  return <h1> Com 2</h1>;
}

export default function App() {
  const [com1, setCom1] = useState(true);
  return (
    <div>
      <button onClick={() => setCom1(!com1)}>Change Com</button>
      {com1 ? <Com1 /> : <Com2 />}
    </div>
  );
}
