import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Layout from "./Routes";

function App() {
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
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" exact component={Reports} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
