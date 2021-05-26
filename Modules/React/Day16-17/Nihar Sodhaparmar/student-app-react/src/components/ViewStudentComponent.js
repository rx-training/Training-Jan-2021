import React, { Component } from "react";
import StudentService from "../services/StudentService";

export default class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: { ...res.data } });
    });
  }

  editStudent = () => {
    this.props.history.push(`/add-student/${this.state.id}`);
  };

  deleteStudent = () => {
    StudentService.deleteStudent(this.state.id).then((res) => {
      this.props.history.push("/students");
    });
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      dob,
      birthPlace,
      firstLanguage,
      country,
      state,
      city,
      pincode,
      fatherFirstName,
      fatherMiddleName,
      fatherLastName,
      fatherEmail,
      fatherEducation,
      fatherProfession,
      fatherDesignation,
      fatherPhoneNumber,
      motherFirstName,
      motherMiddleName,
      motherLastName,
      motherEmail,
      motherEducation,
      motherProfession,
      motherDesignation,
      motherPhoneNumber,
      studentImage,
    } = this.state.student;
    return (
      <div className="container student-info-container rounded mb-5">
        <div className="form-student-image mx-auto rounded-circle d-block text-center">
          <img
            className="rounded-circle"
            width="175"
            height="175"
            src={`../${studentImage}`}
            alt="student"
          />
        </div>
        <table className="table table-sm table-hover student-table mt-4">
          <tbody>
            <tr>
              <td colSpan="2">
                <h5 className="text-muted font-weight-bold">Students's Info</h5>
                <hr />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold pr-5">Student Name</td>
              <td>
                {firstName} {middleName} {lastName}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">E-mail</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Phone Number</td>
              <td>{phoneNumber}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Date of Birth</td>
              <td>
                {new Date(dob).getDate()}-{new Date(dob).getMonth() + 1}-
                {new Date(dob).getFullYear()}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Birth Place</td>
              <td className="text-capitalize">{birthPlace}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">First Language</td>
              <td className="text-capitalize">{firstLanguage}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Address</td>
              <td>
                <p className="m-0 text-capitalize">
                  {city} {pincode},
                </p>
                <p className="m-0 text-capitalize">
                  {state}, {country}
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <h5 className="text-muted font-weight-bold">Father's Info</h5>
                <hr />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Father Name</td>
              <td>
                {fatherFirstName} {fatherMiddleName} {fatherLastName}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">E-mail</td>
              <td>{fatherEmail}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Education</td>
              <td>{fatherEducation}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Profession</td>
              <td>{fatherProfession}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Designation</td>
              <td>{fatherDesignation}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Phone Number</td>
              <td>{fatherPhoneNumber}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <h5 className="text-muted font-weight-bold">Mother's Info</h5>
                <hr />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Mother Name</td>
              <td>
                {motherFirstName} {motherMiddleName} {motherLastName}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">E-mail</td>
              <td>{motherEmail}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Education</td>
              <td>{motherEducation}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Profession</td>
              <td>{motherProfession}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Designation</td>
              <td>{motherDesignation}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Phone Number</td>
              <td>{motherPhoneNumber}</td>
            </tr>
          </tbody>
        </table>
        <div className="row mt-5">
          <div className="col col-md-6">
            <button
              type="button"
              className="btn btn-sm btn-success btn-block w-75"
              onClick={this.editStudent}
            >
              Edit Student
            </button>
          </div>
          <div className="col col-md-6">
            <button
              type="button"
              className="btn btn-sm btn-danger btn-block w-75"
              onClick={this.deleteStudent}
            >
              Delete Student
            </button>
          </div>
        </div>
      </div>
    );
  }
}
