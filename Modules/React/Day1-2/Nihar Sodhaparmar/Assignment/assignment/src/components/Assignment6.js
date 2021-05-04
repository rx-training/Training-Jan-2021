import React from "react";

// Assignment6: While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props.

const student1 = {
  studentImage: "images/gunjan.jpeg",
  ID: "17CEUSG015",
  firstName: "Gunjan",
  lastName: "Thumar",
  DOB: "02/12/1999",
};

const college = {
  collegeLogo: "images/ddu-logo.jpg",
  collegeName: "Dharmsinh Desai University",
  collegeAddress: "College Road, Nadiad 387 001",
};

function Assignment6() {
  return (
    <StudentIDCard student={student1} college={college}>
      <p>Student Details</p>
    </StudentIDCard>
  );
}

function StudentIDCard(props) {
  const { student, college, children } = props;
  return (
    <section className="idcard">
      <Image image={student.studentImage}></Image>
      <Personal student={student}></Personal>
      {children}
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

export default Assignment6;
