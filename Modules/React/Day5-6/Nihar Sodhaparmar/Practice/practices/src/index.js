import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import BookApp from "./components/Books/BookApp";
import Calculator from "./components/Practices-of-Lifting-State-Up/Calculator";
// import FormSubmit from "./components/FormSubmit";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BookApp></BookApp>
    </div>

    <div className="container text-center my-5">
      <h1 className="display-4 my-5">Lifting State Up Exercise</h1>
      <Calculator></Calculator>
    </div>

    {/* <div className="container my-5 w-50">
      <h1 className="display-4 my-5 text-center">Form Exercise</h1>
      <FormSubmit></FormSubmit>
    </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
