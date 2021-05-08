import React from "react";
import StudentIdCardsList from "./components/StudentIdCardsList";
import "./App.css";

export default function App() {
  return (
    <div className="container bg-light border border-primary rounded my-5 p-5 text-center">
      <h1 className="display-4">Assignment</h1>
      <ol>
        <li className="lead mt-3">
          Reference to day3-4 assignment, StudentID Card Should contain delete
          button and should delete remove that from StudentList component. Need
          to use the concept passing methods to children.
        </li>
        <li className="lead mt-3">
          Add one toggle button in StudentIdCard Component, implement toggle
          functionality using ternary operator in JSX.
        </li>
      </ol>
      <StudentIdCardsList></StudentIdCardsList>
    </div>
  );
}
