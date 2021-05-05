import React from "react";

// Assignment5: Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent

const students = [
  {
    studentImage: "images/ankit.jpeg",
    ID: "17CEUSG011",
    firstName: "Ankit",
    lastName: "Parmar",
    DOB: "06/09/1999",
  },
  {
    studentImage: "images/divya.jpeg",
    ID: "17CEUSG012",
    firstName: "Divya",
    lastName: "Shah",
    DOB: "02/12/1999",
  },
  {
    studentImage: "images/darsh.jpeg",
    ID: "17CEUSG013",
    firstName: "Darsh",
    lastName: "Shah",
    DOB: "02/12/1999",
  },
];

const college = {
  collegeLogo: "images/ddu-logo.jpg",
  collegeName: "Dharmsinh Desai University",
  collegeAddress: "College Road, Nadiad 387 001",
};

function Assignment5() {
  const studentsElement = [];

  students.forEach((s) => {
    studentsElement.push(
      <StudentIDCard key={s.ID} student={s} college={college}></StudentIDCard>
    );
  });

  return (
    <div className="container bg-light border border-primary rounded mt-5 p-5 text-center">
      <h1 className="display-4">Assignment 5</h1>
      <p className="lead">
        Create Students Array of 3 students with field
        Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and
        pass it as Object to the StudentIDCardComponent
      </p>
      <section>{studentsElement}</section>
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

export default Assignment5;
