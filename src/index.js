import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./examples/reduxcounter/reducers";
//import App from "./examples/simplemenu/App";
import App from "./examples/sidebarmenu/App";
//import App from "./examples/drawing/App";
//import App from "./examples/drawing-graph/App";
//import App from "./applications/whiteboard/App";
//import App from "./examples/reduxcounter/App";
//import App from "./examples/button/App";
//import App from "./examples/textfield/App";
//import App from "./examples/selectbox/App";
//import App from "./examples/table-static/App";
//import App from "./examples/table-dynamic/App";
//import App from "./examples/model-built-from-scratch/App";
//import App from "./examples/radiobutton/App";
//import App from "./material-ui/material-table/App";
//import App from "./examples/state-props/App";
//import App from "./examples/useContext/App";
//import App from "./examples/state-props-0-1-box-matrix/App";
//import App from "./examples/moviesmanagement/App";
//import App from "./examples/helloworld/App";
//import App from "./examples/calculator/App";
//import App from "./examples/fetch/App";
//import App from "./applications/chatapp/App";
//import App from "./examples/useMemo/App";
//import App from "./examples/useCallback/App";
//import App from "./examples/useEffect/App";
import "./index.css";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
