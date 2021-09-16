import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import Layout from "./Routes";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
function App() {
  const [sidebar, setSidebar] = useState(true);
  console.log("App render" + sidebar);

  const showSidebar = () => setSidebar(!sidebar);

  console.log("App render");

  useEffect(() => {
    console.log("App effect");
    return () => {
      console.log("App cleanup");
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
        <main
          className={`content ${
            sidebar ? "minWidthContent" : "maxWidthContent"
          }`}
        >
          <div className="toolbar" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" exact component={Reports} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
