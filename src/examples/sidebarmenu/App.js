import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

function App() {
  console.log("App render");
  useEffect(() => {
    console.log("App effect");
    return () => {
      console.log("App cleanup");
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" exact component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
