import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Report from "./Report";
export default function App() {
  const [sidebar, setSidebar] = useState(true);

  function showSideBar() {
    setSidebar(!sidebar);
  }
  return (
    <div>
      <Router>
        <div className="nav-bar">
          <FaIcons.FaBars onClick={showSideBar} style={{ color: "#fff" }} />
        </div>
        <div className="content">
          <div className={sidebar ? "menu active" : "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
          </div>
          <div>
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
