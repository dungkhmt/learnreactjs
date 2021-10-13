import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Report from "./Report";

const datasidebar = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Report",
    path: "/report",
  },
];
export default function App() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
    console.log("showSidebar");
  }
  return (
    <div className="root">
      <Router>
        <div className="nav-bar">
          <div style={{ marginLeft: 10 }}>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "#fff" }} />
          </div>
        </div>
        <div className="content">
          <div className={sidebar ? "menu active" : "menu"}>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/report"> Report</Link>
            </li>
          </div>
          <div className={sidebar ? "minWidthContent" : "maxWidthContent"}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/report" exact component={Report} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
