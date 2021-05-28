import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = (props) => {
  const { img, name, job, children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="Developer"></Person>
      <Person img="22" name="Bob" job="Designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          tenetur.
        </p>
      </Person>
      <Person img="56" name="David" job="The Boss"></Person>
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
