import React, { useEffect } from "react";

export default function SubCom() {
  console.log("SubCom render");
  useEffect(() => {
    console.log("SubCom EFFECT");
  }, []);
  return <div></div>;
}
