import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h2 className="text-success text-center p-2">Practice Exercise</h2>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
