import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { increment } from "./actions";
import Screen1 from "./Screen1";
/*
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
//store.subscribe(() => console.log(store.getState()));

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogged ? <h3>Valuable information I should not see</h3> : ""}

      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/screen1">Screen 1</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/screen1">
                <Screen1 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
