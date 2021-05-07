import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BookApp from "./components/Books/BookApp";

ReactDOM.render(
  <React.StrictMode>
    <div className="container my-5">
      <BookApp></BookApp>
    </div>
    <div className="container my-5">
      <App></App>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
