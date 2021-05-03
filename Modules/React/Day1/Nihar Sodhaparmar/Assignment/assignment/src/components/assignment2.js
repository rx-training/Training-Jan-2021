import React from "react";

// Assignment2: Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

function StudentIDCard() {
  return (
    <section className="idcard">
      <Image></Image>
      <Personal></Personal>
      <College></College>
    </section>
  );
}

const Image = () => {
  return (
    <article className="studentImage">
      <img width="140" src="images/nihar.jpg" alt="student" />
    </article>
  );
};

const Personal = () => {
  return (
    <article>
      <p>17CEUBG094</p>
      <p>Nihar Sodhaparmar</p>
      <p>DOB: 21/05/2000</p>
    </article>
  );
};

const College = () => {
  return (
    <article className="college">
      <img width="70" src="images/ddu-logo.jpg" alt="logo" />
      <p className="collegename">Dharmsinh Desai University</p>
      <p>College Road, Nadiad 387 001</p>
    </article>
  );
};

export default StudentIDCard;
