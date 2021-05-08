import React, { Component } from "react";
import StudentIDCard from "./StudentIdCard";
import students from "../data/studentsData";
import college from "../data/collegeData";

export default class StudentIdCardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students,
      college: college,
    };
  }

  // function to remove student from list
  deleteStudentIdCard = (id) => {
    const sortedStudents = this.state.students.filter((s) => s.ID !== id);
    this.setState({
      students: sortedStudents,
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          {this.state.students.map((s, i) => (
            <StudentIDCard
              key={s.ID}
              student={s}
              college={this.state.college}
              // passing deleteStudentIdCard function to child
              deleteStudentIdCard={this.deleteStudentIdCard}
            ></StudentIDCard>
          ))}
        </div>
      </div>
    );
  }
}
