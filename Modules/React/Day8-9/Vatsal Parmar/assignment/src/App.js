import Form from "./components/Form";
import StudentList from "./components/StudentList";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      gender: "",
      college: "",
      studentImg: "",
      collegeLogo: "",
      students: [],
      showStudents: false,
      showForm: true,
    };
    this.studentImg = React.createRef();
    this.collegeLogo = React.createRef();
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "studentImg") {
      const college = e.target.files[0].name;
      this.setState({ [name]: college });
    } else if (name === "collegeLogo") {
      const student = e.target.files[0].name;
      this.setState({ [name]: student });
    } else {
      this.setState({ [name]: value });
    }
  };
  handleShow = (x) => {
    if (x === "students") {
      this.setState({ showStudents: true, showForm: false });
    } else if (x === "form") {
      this.setState({ showStudents: false, showForm: true });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: this.state.students.length + 1,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      gender: this.state.gender,
      college: this.state.college,
      studentImg: this.state.studentImg,
      collegeLogo: this.state.collegeLogo,
    };
    const updatedStudents = [...this.state.students, student];
    this.setState(() => {
      return {
        students: updatedStudents,
        firstName: "",
        lastName: "",
        city: "",
        gender: "",
        college: "",
        studentImg: "",
        collegeLogo: "",
      };
    });
    this.handleShow("students");
  };

  render() {
    return (
      <div className="container">
        {this.state.showForm && (
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleShow={this.handleShow}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            city={this.state.city}
            college={this.state.college}
            students={this.state.students}
          />
        )}
        {this.state.showStudents && (
          <StudentList
            handleShow={this.handleShow}
            students={this.state.students}
          />
        )}
      </div>
    );
  }
}
