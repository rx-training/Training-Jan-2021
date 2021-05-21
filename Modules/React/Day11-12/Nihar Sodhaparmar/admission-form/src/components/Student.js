import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { student, deleteStudent, editStudent } = this.props;
    return (
      <div className="text-center col-md-6 col-lg-4 mb-5">
        <div className="idcard rounded p-4 mx-auto bg-white">
          <Image image={student.studentImage} />
          <Personal student={student} />
        </div>
        <div className="mt-5">
          <DeleteButton
            deleteStudent={deleteStudent}
            id={student.id}
          ></DeleteButton>

          {/*  passing passing checkShowIdCard function to child component ToogleButton */}
          <EditButton editStudent={editStudent} id={student.id}></EditButton>
        </div>
      </div>
    );
  }
}

const Image = (props) => {
  return (
    <div>
      <img
        className="rounded-circle"
        width="140"
        height="140"
        src={props.image}
        alt="student"
      />
    </div>
  );
};

const Personal = (props) => {
  const {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    dob,
    city,
    state,
    country,
    pincode,
  } = props.student;
  return (
    <div className="mt-3">
      <p>
        {firstName} {lastName}
      </p>
      <p>DOB : {dob}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <p className="text-capitalize">
        {city} {pincode}
      </p>
      <p className="text-capitalize">
        {state}, {country}
      </p>
      <p style={{ fontSize: "small" }}>{id}</p>
    </div>
  );
};

const DeleteButton = (props) => {
  return (
    <button
      className="delete-button btn btn-sm btn-danger"
      type="button"
      onClick={() => props.deleteStudent(props.id)}
    >
      Delete Student
    </button>
  );
};

const EditButton = (props) => {
  return (
    <button
      className="btn btn-sm btn-success px-3"
      type="button"
      onClick={() => props.editStudent(props.id)}
    >
      Edit Student
    </button>
  );
};
