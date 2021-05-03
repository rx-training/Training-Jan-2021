import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//--------------------------------------------Book Mini Project---------------------------------------------------
// const Books = () => {
//   return (
//     <section className="books">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className="book">
//       <CoverImage />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const CoverImage = () => {
//   return (
//     <img
//       width="200"
//       src="https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale"
//       alt="Book Cover"
//     ></img>
//   );
// };

// const Title = () => {
//   return <h1 style={{ fontSize: "2rem" }}>The Book</h1>;
// };

// const authorStyle = {
//   letterSpacing: "10px",
//   color: "green",
// };
// const Author = () => {
//   return <p style={authorStyle}>The Author</p>;
// };

//ReactDom.render(<Books />, document.getElementById("root"));
//--------------------------------------------------------------------------------------------------------------
// function Greeting() {
//   return React.createElement("div", {}, "hello world");
// }

//--------------------------------------------JavaScript In JSX---------------------------------------------------

// const Person = () => {
//   const btn = "Search";
//   const fname = "Jhon";
//   const lname = "Doe";
//   return (
//     <section>
//       <button>{btn}</button>
//       <h2>{fname + " " + lname}</h2>
//       <p>Info</p>
//     </section>
//   );
// };

// ReactDom.render(<Person />, document.getElementById("root"));

//--------------------------------------------Props & Childrean Props---------------------------------------------------

// const People = () => {
//   const personData = [
//     { name: "Jhon", job: "Developer" },
//     { name: "Abc", job: "Designer" },
//     { name: "Xyz", job: "Manager", age: "22" },
//   ];
//   return (
//     <section>
//       <Person person={personData[0]}>
//         <p>Some Info About Me</p>
//       </Person>
//       <Person person={personData[1]} />
//       <Person person={personData[2]} />
//     </section>
//   );
// };

// const Person = ({ children, person: { name, job, age } }) => {
//   //const { name, job, age } = props.person;
//   return (
//     <article>
//       <h1>{name}</h1>
//       <p>{job}</p>
//       <p>{age}</p>
//       {children}
//       <hr />
//     </article>
//   );
// };

// ReactDom.render(<People />, document.getElementById("root"));

//--------------------------------------------Person List Project--------------------------------------------------

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="user"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Jhon" job="Developer" />
      <Person img="22" name="Bob" job="Designer">
        <p>Lorem ipsum dolor</p>
      </Person>
      <Person img="56" name="David" job="The Boss" />
    </section>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));
