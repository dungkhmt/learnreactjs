import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import List from "./List";
import "./style.css";
export default function App() {
  const [customers, setCustomers] = useState([]);
  const [maxID, setMaxID] = useState(1);
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/list">List of customers</Link>
          </li>
          <li>
            <Link to="/add">Add new customer</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/list">
            <List customers={customers} setCustomers={setCustomers} />
          </Route>
          <Route path="/add">
            <FormAdd
              customers={customers}
              setCustomers={setCustomers}
              maxID={maxID}
              setMaxID={setMaxID}
            />
          </Route>
          <Route path="/edit/:index">
            <FormEdit customers={customers} setCustomers={setCustomers} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
