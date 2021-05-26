import React, { Component } from "react";
import StudentService from "../services/StudentService";

export default class EmployeeListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    StudentService.getAllStudents().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }

  addStudent = () => {
    this.props.history.push(`/add-student/_add`);
  };

  viewStudent = (id) => {
    this.props.history.push(`/view-student/${id}`);
  };

  render() {
    return (
      <div className="container">
        {/* <h2 className="text-center mb-5">Student List</h2> */}
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th> Student Name</th>
              <th className="d-none d-lg-table-cell">Date of Birth</th>
              <th> E-mail</th>
              <th className="d-none d-lg-table-cell">Phone Number</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student._id}>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                <td className="d-none d-lg-table-cell">
                  {new Date(student.dob).getDate()}-
                  {new Date(student.dob).getMonth() + 1}-
                  {new Date(student.dob).getFullYear()}
                </td>
                <td>{student.email}</td>
                <td className="d-none d-lg-table-cell">
                  {student.phoneNumber}
                </td>

                <td className="text-center">
                  <button
                    onClick={() => this.viewStudent(student._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
