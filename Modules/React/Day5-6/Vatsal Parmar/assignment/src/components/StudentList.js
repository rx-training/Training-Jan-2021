import React, { Component } from "react";
import studentData from "./studentData";
import StudentIDCard from "./StudentIDCard";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: studentData };
  }
  //To delete Student ID Card
  deleteItem = (id) => {
    const updatedList = this.state.students.filter((item) => item.id !== id);
    this.setState({ students: updatedList });
  };
  render() {
    let studentList = this.state.students.map((item) => {
      return (
        <StudentIDCard
          key={item.id}
          student={item}
          deleteItem={this.deleteItem}
        >
          <div className="text-primary">{item.details}</div>
        </StudentIDCard>
      );
    });
    return <div className="row">{studentList}</div>;
  }
}
