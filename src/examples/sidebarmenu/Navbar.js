import React, { useEffect } from "react";
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
      <div className="navbar">
        <div className="toolbar">
          <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "#fff" }} />
          </Link>
          <div style={{ display: "flex", flexGrow: 1 }} />
        </div>
      </div>
      <div className="drawer-root">
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items" />
          {SidebarData.map((item) => (
            <li key={item.path} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
