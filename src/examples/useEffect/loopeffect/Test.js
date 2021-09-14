import { useEffect, useState } from "react";
export default function Test() {
  const [count, setCount] = useState(0);
  console.log("render");
  useEffect(() => {
    console.log("effect: ", count);
    if (count < 5) setCount(count + 1);
    return () => {
      console.log("cleanup");
    };
  }, [count]);
  return <>{count}</>;
}
