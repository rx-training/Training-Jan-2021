import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    const { students, deleteStudent, editStudent } = this.props;
    return (
      <div className="container">
        <div className="row py-5">
          {students.map((s) => {
            return (
              <Student
                key={s.id}
                student={s}
                deleteStudent={deleteStudent}
                editStudent={editStudent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
