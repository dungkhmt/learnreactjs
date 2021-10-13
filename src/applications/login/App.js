import { Button } from "@material-ui/core";
import axios from "axios";
import { createBrowserHistory } from "history";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import LoginPopupDialog from "./logindialog/PopupDialog";
import Report from "./Report";
import Users from "./Users";

export default function App() {
  const [sidebar, setSidebar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  //const history = useHistory();

  const history = createBrowserHistory();

  function showSideBar() {
    setSidebar(!sidebar);
  }
  function handleLogin() {
    //setIsOpen(true);
    history.push({ pathname: "/login" });
    //history.push("/users");
  }
  function getListUsers() {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/list-users", {
        headers: { "X-Auth-Token": token },
      })
      .then((res) => {
        console.log("getListUsers res = ", res);
        console.log("token = ", token);
      });
  }
  function processLogin(username, password) {
    //alert("login username = " + username + " password = " + password);
    const data = {};
    axios
      .post("http://localhost:8080", data, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((res) => {
        console.log("login res = ", res);
        let token = res.headers["x-auth-token"];
        console.log("token = ", token);
        localStorage.setItem("token", token);

        getListUsers();
      })
      .catch((err) => {
        console.log("exception err = ", err);
      });
  }
  return (
    <div>
      <Router history={history}>
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
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">User management</Link>
            </li>
          </div>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/report" exact component={Report} />
              <Route path="/login" exact component={Login} />
              <Route path="/users" exact component={Users} />
            </Switch>
          </div>
        </div>
      </Router>

      <LoginPopupDialog
        onProcessLogin={processLogin}
        open={isOpen}
        setOpen={setIsOpen}
      ></LoginPopupDialog>
    </div>
  );
}
