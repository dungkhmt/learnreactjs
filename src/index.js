import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
//import App from "./examples/checkbox/App";
//import App from "./examples/dialogbox/App";
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
import { BrowserRouter as Router } from "react-router-dom";
//import App from "./examples/recursive/App";
//import App from "./examples/state-props/App";
//import App from "./examples/useContext/App";
//import App from "./examples/useContextCounter/App";
//import App from "./applications/chatapp/App";
//import App from "./examples/useMemo/App";
//import App from "./examples/useCallback/App";
//import App from "./examples/useEffect/App";
//import App from "./examples/localstorage/App";
//import App from "./examples/readtextfile/App";
//import App from "./examples/readtextfile-drawgraph/App";
//import App from "./examples/conditionalrendering/App";
//import App from "./examples/flexcss/App";
//import App from "./examples/flexcss-navbar/App";
//import App from "./examples/flexcss-menu-content-adv/App";
//import App from "./examples/flexcss-grid-wrap/App";
//import App from "./examples/flexcss-dynamic/App";
//import App from "./examples/form-list-add-remove-update/App";
//import App from "./examples/props/App";
//import App from "./examples/state-cal-sum/App";
//import App from "./examples/props/App";
//import App from "./examples/form-table-dynamic/App";
//import App from "./applications/timetable/App";
//import App from "./examples/sidebarmenu/App";
//import App from "./examples/simplesidebarmenu/App";
//import App from "./examples/menusidebar/App";
//import App from "./examples/menusidebar/App";
//import App from "./applications/login/App";
// import App from "./examples/login-usermanagement/App";
import "./index.css";
import App from "./examples/maps/App";

/*
let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
