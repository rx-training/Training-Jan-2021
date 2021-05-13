import React, { Component } from "react";
import StudentIDCard from "./StudentIdCard";

export default class StudentIdCardsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     students: students,
  //     college: college,
  //   };
  // }

  render() {
    const { students, deleteStudent, editStudent } = this.props;
    // console.log("deleteStudent");
    // console.log(deleteStudent);
    return (
      <div className="container my-5">
        <div className="row">
          {students.map((s) => {
            const student = {
              studentImage: s.studentImage,
              id: s.id,
              firstName: s.firstName,
              lastName: s.lastName,
              dob: s.dob,
              gender: s.gender,
            };

            const college = {
              collegeLogo: s.collegeLogo,
              collegeName: s.collegeName,
              collegeAddress: s.collegeAddress,
              collegeCountry: s.collegeCountry,
            };

            return (
              <StudentIDCard
                key={s.id}
                student={student}
                college={college}
                // passing deleteStudentIdCard function to child
                deleteStudent={deleteStudent}
                editStudent={editStudent}
              ></StudentIDCard>
            );
          })}
        </div>
      </div>
    );
  }
}
