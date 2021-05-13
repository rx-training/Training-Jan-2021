import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      image: "",
      collegeName: "",
      collegeAddress: "",
      collegeCountry: "",
      collegeLogo: "",
      students: [],
      isValidDetails: false,
      isEdit: false,
    };

    // this.image = React.createRef();
    // this.collegeLogo = React.createRef();
  }

  handleChange = (event) => {
    let targetName = event.target.name;
    let targetValue = event.target.value;

    if (targetName === "image" || targetName === "collegeLogo") {
      targetValue = `images/${event.target.files[0].name}`;
    }

    this.setState(
      {
        [targetName]: targetValue,
      },
      () => {
        if (
          !this.state.id ||
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.dob ||
          !this.state.gender ||
          !this.state.collegeName ||
          !this.state.collegeAddress ||
          this.state.collegeCountry === "select" ||
          !this.state.image ||
          !this.state.collegeLogo
        ) {
          this.setState({
            isValidDetails: false,
          });
          return;
        } else {
          this.setState({
            isValidDetails: true,
          });
        }
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const student = {
      studentImage: this.state.image,
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      collegeLogo: this.state.collegeLogo,
      collegeName: this.state.collegeName,
      collegeAddress: this.state.collegeAddress,
      collegeCountry: this.state.collegeCountry,
    };

    this.setState({
      students: [...this.state.students, student],
      id: "",
      firstName: "",
      lastName: "",
      dob: "",
      image: "",
      gender: "",
      collegeName: "",
      collegeAddress: "",
      collegeCountry: "",
      collegeLogo: "",
      isValidDetails: false,
      isEdit: false,
    });
  };

  // function to remove student from list
  deleteStudent = (id) => {
    const sortedStudents = this.state.students.filter((s) => s.id !== id);
    this.setState({
      students: sortedStudents,
    });
  };

  editStudent = (id) => {
    const filteredStudents = this.state.students.filter((s) => s.id !== id);
    const selectedStudent = this.state.students.find((s) => s.id === id);

    this.setState({
      students: filteredStudents,
      isEdit: true,
      id: id,
      firstName: selectedStudent.firstName,
      lastName: selectedStudent.lastName,
      dob: selectedStudent.dob,
      gender: selectedStudent.gender,
      image: selectedStudent.studentImage,
      collegeName: selectedStudent.collegeName,
      collegeAddress: selectedStudent.collegeAddress,
      collegeCountry: selectedStudent.collegeCountry,
      collegeLogo: selectedStudent.collegeLogo,
    });
  };

  render() {
    const student = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      image: this.state.image,
      collegeName: this.state.collegeName,
      collegeAddress: this.state.collegeAddress,
      collegeCountry: this.state.collegeCountry,
      collegeLogo: this.state.collegeLogo,
    };

    return (
      <div>
        <StudentForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          isValidDetails={this.state.isValidDetails}
          student={student}
          isEdit={this.state.isEdit}
        ></StudentForm>
        <StudentList
          students={this.state.students}
          deleteStudent={this.deleteStudent}
          editStudent={this.editStudent}
        ></StudentList>
      </div>
    );
  }
}
