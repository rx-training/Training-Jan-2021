import React from "react";

// Assignment4: Call StudentID Card component 3 times and pass different student data using props.

const student1 = {
  studentImage: "images/pradip.jpeg",
  ID: "17CEUSG015",
  firstName: "Pradip",
  lastName: "Chauhan",
  DOB: "02/12/1999",
};

const student2 = {
  studentImage: "images/pratik.jpeg",
  ID: "17CEUSG020",
  firstName: "Pratik",
  lastName: "Parmar",
  DOB: "02/12/1999",
};

const student3 = {
  studentImage: "images/harshil.jpeg",
  ID: "17CEUSG021",
  firstName: "Harshil",
  lastName: "Ninama",
  DOB: "02/12/1999",
};

const college = {
  collegeLogo: "images/ddu-logo.jpg",
  collegeName: "Dharmsinh Desai University",
  collegeAddress: "College Road, Nadiad 387 001",
};

function Assignment4() {
  return (
    <>
      <StudentIDCard student={student1} college={college}></StudentIDCard>
      <StudentIDCard student={student2} college={college}></StudentIDCard>
      <StudentIDCard student={student3} college={college}></StudentIDCard>
    </>
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

export default Assignment4;
