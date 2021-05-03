import React from "react";

function People() {
  const friends = [
    { name: "john", job: "developer", age: 23, company: "apple" },
    { name: "bob", job: "designer", age: 21, company: "facebook" },
    { name: "susy", job: "artist", age: 26, company: "google" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <p>some info</p>
      </Person>
      <Person person={friends[1]}></Person>
      <Person person={friends[2]}></Person>
      {/* <Person name="john doe" job="developer"></Person>
      <Person name="bob doe" job="designer"></Person>
      <Person name="susy doe" job="artist" age="22"></Person> */}
    </section>
  );
}

const Person = (props) => {
  // {person:{name, job, age, company}}
  const { name, job, age, company } = props.person;
  const { children } = props;
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

export default People;
