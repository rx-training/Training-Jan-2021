import React from "react";

// Assignment3: Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

const student1 = {
  studentImage: "images/kumar.jpeg",
  ID: "17CEUSG032",
  firstName: "Kumar",
  lastName: "Sondarva",
  DOB: "06/09/1999",
};

const college = {
  collegeLogo: "images/ddu-logo.jpg",
  collegeName: "Dharmsinh Desai University",
  collegeAddress: "College Road, Nadiad 387 001",
};

function Assignment3() {
  return (
    <div className="container bg-light border border-primary rounded mt-5 p-5 text-center">
      <h1 className="display-4">Assignment 3</h1>
      <p className="lead">
        Store above example info javascript variable and then display
        dynamically, Display FullName variable in respective Component
      </p>
      <StudentIDCard student={student1} college={college}></StudentIDCard>
    </div>
  );
}

function StudentIDCard(props) {
  const { student, college } = props;
  return (
    <section className="idcard">
      <Image image={student.studentImage}></Image>
      <Personal student={student}></Personal>
      <College college={college}></College>
    </section>
  );
}

const Image = (props) => {
  return (
    <article className="studentImage">
      <img width="140" src={props.image} alt="student" />
    </article>
  );
};

const Personal = (props) => {
  const { ID, firstName, lastName, DOB } = props.student;
  return (
    <article>
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
    <article className="college">
      <img width="70" src={collegeLogo} alt="logo" />
      <p className="collegename">{collegeName}</p>
      <p>{collegeAddress}</p>
    </article>
  );
};

export default Assignment3;
