import React from "react";

// Assignment3: Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

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

export default StudentIDCard;
