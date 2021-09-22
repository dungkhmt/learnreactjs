import { useEffect, useState } from "react";

export const Permutation = () => {
  const [perm, setPerm] = useState([]);
  const [n, setN] = useState(0);
  const [rs, setRs] = useState("");

  function firstPerm(N) {
    let p = [];
    for (let i = 1; i <= N; i++) p.push(i);
    console.log("firstPerm, p = ", p);
    setPerm(p);
  }
  function genNext() {
    console.log("genNext, perm = ", perm);
    let a = perm;
    let n = a.length;
    let i = n - 2;
    while (i >= 0 && a[i] > a[i + 1]) i = i - 1;
    console.log("found i = ", i);

    if (i < 0) return;
    let j = i + 1;
    while (j < n && a[j] > a[i]) j++;
    j = j - 1;
    console.log("found j = ", j);
    //swap a[i] and a[j]
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
    console.log("a = ", a);
    // sort a[i+1,...,a.length-1] in an increasing order
    for (let k = i + 1; k <= (n + i) / 2; k++) {
      tmp = a[k];
      a[k] = a[n + i - k];
      a[n + i - k] = tmp;
    }
    console.log("final new perm a = ", a);
    setPerm(a);
    let s = "";
    for (let i = 0; i < n; i++) s = s + a[i] + ",";
    setRs(s);
  }
  useEffect(() => {}, []);

  function handleChangeN(e) {
    let t = parseInt(e.target.value);
    firstPerm(t);
  }

  return (
    <div>
      n: <input type="text" onChange={handleChangeN}></input>
      <button onClick={genNext}>Next permutation</button>
      permutation:{rs}
    </div>
  );
};
