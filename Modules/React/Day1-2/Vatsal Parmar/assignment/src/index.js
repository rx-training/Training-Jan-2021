import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";
import Assignment4 from "./Assignment4";
import Assignment5 from "./Assignment5";
import Assignment6 from "./Assignment6";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h2 className="text-success text-center m-2">Assignment</h2>
      <h4 className="text-success">
        1. Create a Functional Component which prints Hello World.
      </h4>
      <Assignment1 />
      <h4 className="text-success">
        2. Create a StudentIDCard Component which will include another component
        image,Personal Component include(ID,FirstName,LastName,DOB),College
        Component include collegeName,College Address and College Logo
      </h4>
      <Assignment2 />
      <h4 className="text-success">
        3. Store above example info javascript variable and then display
        dynamically, Display FullName variable in respective Component
      </h4>
      <Assignment3 />
      <h4 className="text-success">
        4. Call StudentID Card component 3 times and pass different student data
        using props.
      </h4>
      <Assignment4 />
      <h4 className="text-success">
        5. Create Students Array of 3 students with field
        Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and
        pass it as Object to the StudentIDCardComponent.
      </h4>
      <Assignment5 />
      <h4 className="text-success">
        6. While calling StudentID Component in the app Component pass one
        Student Details as children. Access it in the StudentID Card Component
        with Children props.
      </h4>
      <Assignment6 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
