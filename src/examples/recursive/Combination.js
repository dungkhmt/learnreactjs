import React, { useState } from "react";

export const Combination = () => {
  const [k, setK] = useState(0);
  const [n, setN] = useState(0);
  const [rs, setRs] = useState(0);
  function C(k, n) {
    if (k > n) return -1;
    if (k === 0 || k === n) return 1;
    return C(k - 1, n - 1) + C(k, n - 1);
  }
  function handleChangeK(e) {
    let t = parseInt(e.target.value);
    setK(t);
    setRs(C(t, n));
  }
  function handleChangeN(e) {
    let t = parseInt(e.target.value);
    setN(t);
    setRs(C(k, t));
  }
  return (
    <>
      k: <input type="text" onChange={handleChangeK}></input>
      n: <input type="text" onChange={handleChangeN}></input>
      C({k},{n}) = {rs}
    </>
  );
};
