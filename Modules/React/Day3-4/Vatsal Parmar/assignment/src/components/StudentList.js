import React, { Component } from "react";
import studentData from "./studentData";
import StudentIDCard from "./StudentIDCard";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: studentData };
  }
  render() {
    let studentList = this.state.students.map((item) => {
      return <StudentIDCard key={item.id} student={item} />;
    });
    return <div className="row">{studentList}</div>;
  }
}
