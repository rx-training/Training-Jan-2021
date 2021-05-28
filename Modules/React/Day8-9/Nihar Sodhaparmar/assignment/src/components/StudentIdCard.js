import React, { Component } from "react";

export default class StudentIdCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { student, college, children, deleteStudent, editStudent } =
      this.props;
    return (
      <section className="text-center col-md-6 col-lg-4">
        <div className="idcard rounded p-4 mx-auto my-5 bg-white">
          <Image image={student.studentImage}></Image>
          <Personal student={student}></Personal>
          {children}
          <College college={college}></College>
        </div>

        {/*  passing passing deleteStudentIdCard function to child component DeleteButton */}
        <div className="mt-5">
          <DeleteButton
            deleteStudentIdCard={deleteStudent}
            id={student.id}
          ></DeleteButton>

          {/*  passing passing checkShowIdCard function to child component ToogleButton */}
          <EditButton editStudent={editStudent} id={student.id}></EditButton>
        </div>
      </section>
    );
  }
}

const Image = (props) => {
  return (
    <article>
      <img
        className="rounded-circle"
        width="140"
        src={props.image}
        alt="student"
      />
    </article>
  );
};

const Personal = (props) => {
  const { id, firstName, lastName, dob, gender } = props.student;
  return (
    <article className="mt-3">
      <p>{id}</p>
      <p>
        {firstName} {lastName}
      </p>
      <p>DOB : {dob}</p>
      <p className="text-capitalize">Gender : {gender}</p>
    </article>
  );
};

const College = (props) => {
  const { collegeLogo, collegeName, collegeAddress, collegeCountry } =
    props.college;
  return (
    <article>
      <img width="70" src={collegeLogo} alt="logo" />
      <p className="text-uppercase mt-3">{collegeName}</p>
      <p className="text-capitalize">
        {collegeAddress}, {collegeCountry}
      </p>
    </article>
  );
};

// calling deleteStudentIdCard with id
const DeleteButton = (props) => {
  return (
    <button
      className="delete-button btn btn-sm btn-danger"
      type="button"
      onClick={() => props.deleteStudentIdCard(props.id)}
    >
      Delete Id Card
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
      Edit Id Card
    </button>
  );
};
