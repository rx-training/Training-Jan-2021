import React, { Component } from "react";
import StudentId from "./StudentId";
import StudentService from "../services/StudentService";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ studentList: res.data });
    });
  }

  handleInfo = (id) => {
    this.props.history.push(`/student/${id}`);
  };

  render() {
    let stdNo = this.state.studentList.length;
    return (
      <div className="my-5">
        <div className="p-3 bg-dark text-white text-center rounded-top">
          <h4 className="text-uppercase">Students List</h4>
        </div>
        <div className="p-5 bg-light rounded-bottom">
          {stdNo > 0 ? (
            <div className="row">
              {this.state.studentList.map((item) => (
                <StudentId
                  key={item._id}
                  student={item}
                  handleInfo={this.handleInfo}
                />
              ))}
            </div>
          ) : (
            <h1 className="text-danger text-center">
              Opps! No Students To Show
            </h1>
          )}
        </div>
      </div>
    );
  }
}
