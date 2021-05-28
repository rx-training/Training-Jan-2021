import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
