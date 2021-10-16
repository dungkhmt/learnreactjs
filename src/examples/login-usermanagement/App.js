//import { createBrowserHistory } from "history";
import { Button } from "@material-ui/core";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import CreateUser from "./CreateUser";
import Home from "./Home";
import Login from "./Login";
import Report from "./Report";
import Users from "./Users";
export default function App() {
  const [sidebar, setSidebar] = useState(true);
  const history = useHistory();
  function showSideBar() {
    setSidebar(!sidebar);
  }
  function handleLogin() {
    //alert("login");
    history.push("/login");
  }
  return (
    <div>
      <div className="nav-bar">
        <div className="fa-bar">
          <FaIcons.FaBars onClick={showSideBar} style={{ color: "#fff" }} />
        </div>
        <div className="blank-nav-bar"></div>
        <div className="login">
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>

      <div className="content">
        <div className={sidebar ? "menu active" : "menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">User management</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/report" exact component={Report} />
            <Route path="/login" exact component={Login} />
            <Route path="/users" exact component={Users} />
            <Route path="/create-user" exact component={CreateUser} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
