import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Calculator from "../calculator/Calculator";
import DrawingApp from "../drawing/DrawingApp";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/drawing">Drawing</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>

            <Route path="/drawing">
              <DrawingApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
