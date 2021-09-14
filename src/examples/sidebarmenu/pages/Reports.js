import React, { useEffect } from "react";

function Reports() {
  console.log("Reports render");

  useEffect(() => {
    console.log("Reports effect");
    return () => {
      console.log("Reports cleanup");
    };
  }, []);
  return (
    <div>
      <h1> Reports</h1>
    </div>
  );
}

export default Reports;
