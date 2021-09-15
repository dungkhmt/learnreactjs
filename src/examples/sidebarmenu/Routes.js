import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [sidebar, setSidebar] = useState(true);
  console.log("App render" + sidebar);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log("App effect");
    return () => {
      console.log("App cleanup");
    };
  }, []);

  return (
    <>
      <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      <main
        className={`content ${sidebar ? "minWidthContent" : "maxWidthContent"}`}
      >
        <div className="toolbar" />
        {children}
      </main>
    </>
  );
}

export default Layout;
