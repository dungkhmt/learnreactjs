import React, { useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { SidebarData } from "./SidebarData";

function Navbar({ sidebar, showSidebar }) {
  console.log("Nav render");

  useEffect(() => {
    console.log("Nav effect");
    return () => {
      console.log("Nav cleanup");
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="toolbar">
          <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "#fff" }} />
          </Link>
          <div style={{ display: "flex", flexGrow: 1 }} />
        </div>
      </header>
      <div className="drawer-root">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items" />
          {/* <ul className="nav-menu-items" onClick={showSidebar}> */}
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item) => (
            <li key={item.path} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          {/* </ul> */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
