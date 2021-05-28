import React, { Component } from "react";

export default class StudentIdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIdCard: true,
    };
  }

  // function to change state of showIdCard
  checkShowIdCard = () => {
    this.setState((state) => {
      return {
        showIdCard: !this.state.showIdCard,
      };
    });
  };

  render() {
    const { student, college, children, deleteStudentIdCard } = this.props;
    return (
      <section className="text-center col-md-6 col-lg-4">
        {this.state.showIdCard && (
          <div className="idcard rounded p-4 mx-auto my-5 bg-white">
            <Image image={student.studentImage}></Image>
            <Personal student={student}></Personal>
            {children}
            <College college={college}></College>
          </div>
        )}

        {/*  passing passing deleteStudentIdCard function to child component DeleteButton */}
        <div className="mt-5">
          {this.state.showIdCard ? (
            <DeleteButton
              deleteStudentIdCard={deleteStudentIdCard}
              id={student.ID}
            ></DeleteButton>
          ) : null}

          {/*  passing passing checkShowIdCard function to child component ToogleButton */}
          <ToogleButton
            checkShowIdCard={this.checkShowIdCard}
            id={student.ID}
          ></ToogleButton>
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
  const { ID, firstName, lastName, DOB } = props.student;
  return (
    <article className="mt-3">
      <p>{ID}</p>
      <p>
        {firstName} {lastName}
      </p>
      <p>DOB: {DOB}</p>
    </article>
  );
};

const College = (props) => {
  const { collegeLogo, collegeName, collegeAddress } = props.college;
  return (
    <article>
      <img className="mb-3" width="70" src={collegeLogo} alt="logo" />
      <p className="text-uppercase">{collegeName}</p>
      <p>{collegeAddress}</p>
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

const ToogleButton = (props) => {
  return (
    <button
      className="btn btn-sm btn-primary"
      type="button"
      onClick={props.checkShowIdCard}
    >
      Toogle Id Card
    </button>
  );
};
