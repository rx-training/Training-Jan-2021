import React from "react";

function StudentIDCard(props) {
  const { student, college, children } = props;
  return (
    <section className="text-center col-md-4">
      <div className="idcard rounded p-4 mx-auto my-5 bg-white">
        <Image image={student.studentImage}></Image>
        <Personal student={student}></Personal>
        {children}
        <College college={college}></College>
      </div>
    </section>
  );
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

export default StudentIDCard;
