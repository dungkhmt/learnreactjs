import React, { useEffect } from "react";

function Home() {
  console.log("Home render");
  useEffect(() => {
    console.log("Home effect");
    return () => {
      console.log("Home clean up");
    };
  }, []);
  return (
    <div>
      <h1> Home</h1>
    </div>
  );
}

export default Home;
