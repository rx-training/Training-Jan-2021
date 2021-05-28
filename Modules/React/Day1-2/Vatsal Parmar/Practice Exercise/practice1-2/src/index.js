import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//--------------------------------------------Book Mini Project---------------------------------------------------

const Books = () => {
  return (
    <div>
      <h2 style={{ color: "green" }}>Book Mini Project</h2>
      <section className="books">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
};

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => {
  return (
    <img
      width="200"
      src="https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale"
      alt="Book Cover"
    ></img>
  );
};

const Title = () => {
  return <h1 style={{ fontSize: "2rem" }}>The Book</h1>;
};

const authorStyle = {
  letterSpacing: "10px",
  color: "green",
};
const Author = () => {
  return <p style={authorStyle}>The Author</p>;
};

//--------------------------------------------------------------------------------------------------------------
function Greeting() {
  return React.createElement("div", {}, "hello world");
}

//--------------------------------------------JavaScript In JSX---------------------------------------------------

const Person1 = () => {
  const btn = "Search";
  const fname = "Jhon";
  const lname = "Doe";
  return (
    <section>
      <h2 style={{ color: "green" }}>JavaScript In JSX</h2>
      <button>{btn}</button>
      <h2>{fname + " " + lname}</h2>
      <p>Info</p>
    </section>
  );
};

//--------------------------------------------Props & Childrean Props---------------------------------------------------

const People = () => {
  const personData = [
    { name: "Jhon", job: "Developer" },
    { name: "Abc", job: "Designer" },
    { name: "Xyz", job: "Manager", age: "22" },
  ];
  return (
    <section>
      <h2 style={{ color: "green" }}>Props And Childrean Props</h2>
      <Person2 person={personData[0]}>
        <p>Some Info About Me</p>
      </Person2>
      <Person2 person={personData[1]} />
      <Person2 person={personData[2]} />
    </section>
  );
};

const Person2 = ({ children, person: { name, job, age } }) => {
  //const { name, job, age } = props.person;
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      {children}
      <hr />
    </article>
  );
};

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
    <div>
      <h2 style={{ color: "green" }}>Person List Project</h2>
      <section className="person-list">
        <Person img="34" name="Jhon" job="Developer" />
        <Person img="22" name="Bob" job="Designer">
          <p>Lorem ipsum dolor</p>
        </Person>
        <Person img="56" name="David" job="The Boss" />
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2 style={{ color: "green", marginBottom: "20px" }}>
        Practice Exercise - Do the hands on the exercise provided in video on
        the https://tutorials.rxtrainees.radixweb.net/ site and
        https://reactjs.org/docs/hello-world.html
      </h2>
      <Greeting />
      <Books />
      <Person1 />
      <People />
      <PersonList />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
