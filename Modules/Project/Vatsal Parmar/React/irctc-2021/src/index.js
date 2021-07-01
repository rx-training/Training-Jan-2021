import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { TrainProvider } from "./context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <TrainProvider>
    <Router>
      <App />
    </Router>
  </TrainProvider>,
  document.getElementById("root")
);
