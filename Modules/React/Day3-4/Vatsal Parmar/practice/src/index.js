import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Practice1 />
      <Practice2 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
