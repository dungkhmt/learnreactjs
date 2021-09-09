import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
