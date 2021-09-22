import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-item">HOME</div>
        <div className="menu-item">Products</div>
        <div className="menu-item">Reports</div>
      </div>
      <div className="content">
        <p>
          If position: absolute; or position: fixed; - the right property sets
          the right edge of an element to a unit to the right of the right edge
          of its nearest positioned ancestor.
        </p>
        <p>
          If position: relative; - the right property sets the right edge of an
          element to a unit to the left/right of its normal position.
        </p>
      </div>
      <div className="advertisement">
        <div className="advertisement-item">"Adv. 1"</div>
        <div className="advertisement-item">"Adv. 2"</div>
        <div className="advertisement-item">"Adv. 3"</div>
      </div>
    </div>
  );
}
