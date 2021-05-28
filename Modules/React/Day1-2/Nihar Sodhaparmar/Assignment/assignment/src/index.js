import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import Assignment3 from "./components/Assignment3";
import Assignment4 from "./components/Assignment4";
import Assignment5 from "./components/Assignment5";
import Assignment6 from "./components/Assignment6";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* Assignment1 */}
    <Assignment1></Assignment1>
    {/* Assignment2 */}
    <Assignment2></Assignment2>
    {/* Assignment3 */}
    <Assignment3></Assignment3>
    {/* Assignment4 */}
    <Assignment4></Assignment4>
    {/* Assignment5 */}
    <Assignment5></Assignment5>
    {/* Assignment6 */}
    <Assignment6></Assignment6>
    <div className="mt-5"></div>
  </React.StrictMode>,
  document.getElementById("root")
);
