import React from "react";
import ReactDOM from "react-dom";
import Assignment1 from "./components/assignment1";
import StudentIDCardAssignment2 from "./components/assignment2";
import StudentIDCardAssignment3 from "./components/assignment3";
import "./index.css";

const student1 = {
  studentImage: "images/kumar.jpeg",
  ID: "17CEUSG032",
  firstName: "Kumar",
  lastName: "Sondarva",
  DOB: "06/09/1999",
};

const student2 = {
  studentImage: "images/pradip.jpeg",
  ID: "17CEUSG015",
  firstName: "Pradip",
  lastName: "Chauhan",
  DOB: "02/12/1999",
};

const student3 = {
  studentImage: "images/gunjan.jpeg",
  ID: "17CEUSG015",
  firstName: "Gunjan",
  lastName: "Thumar",
  DOB: "02/12/1999",
};

const students = [
  {
    studentImage: "images/ankit.jpeg",
    ID: "17CEUSG011",
    firstName: "Ankit",
    lastName: "Parmar",
    DOB: "06/09/1999",
  },
  {
    studentImage: "images/divya.jpeg",
    ID: "17CEUSG012",
    firstName: "Divya",
    lastName: "Shah",
    DOB: "02/12/1999",
  },
  {
    studentImage: "images/darsh.jpeg",
    ID: "17CEUSG013",
    firstName: "Darsh",
    lastName: "Shah",
    DOB: "02/12/1999",
  },
];

const college = {
  collegeLogo: "images/ddu-logo.jpg",
  collegeName: "Dharmsinh Desai University",
  collegeAddress: "College Road, Nadiad 387 001",
};

const studentsElement = [];

ReactDOM.render(
  <React.StrictMode>
    {/* Assignment1 */}
    <Assignment1></Assignment1>
    {/* Assignment2 */}
    <StudentIDCardAssignment2></StudentIDCardAssignment2>
    {/* Assignment3 */}
    <StudentIDCardAssignment3
      student={student1}
      college={college}
    ></StudentIDCardAssignment3>
    {/* Assignment4:  Call StudentID Card component 3 times and pass different student data using props. */}
    <StudentIDCardAssignment3
      student={student2}
      college={college}
    ></StudentIDCardAssignment3>
    {/* Assignment5: Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent */}
    {students.forEach((s) => {
      studentsElement.push(
        <StudentIDCardAssignment3
          key={s.ID}
          student={s}
          college={college}
        ></StudentIDCardAssignment3>
      );
    })}
    {studentsElement}
    {/* Assignment6: While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props. */}
    <StudentIDCardAssignment3 student={student3} college={college}>
      <p>Student Details</p>
    </StudentIDCardAssignment3>
  </React.StrictMode>,
  document.getElementById("root")
);
