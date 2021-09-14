import React, { useEffect, useState } from "react";

export default function Com({ setSize }) {
  const [width, setWidth] = useState();

  console.log("Com render");
  const style = {
    width: width,
  };
  useEffect(() => {
    console.log("Com EFFECT");
    setWidth(setSize());
  }, [setSize]);
  return <button style={style}>Com</button>;
}
