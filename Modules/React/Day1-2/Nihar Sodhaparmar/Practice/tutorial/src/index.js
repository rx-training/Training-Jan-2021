import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Spread from "./json-depth";
import People from "./people";

function Books() {
  return (
    <>
      <section className="books">
        {/* <People></People> */}
        {/* <Spread></Spread> */}
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </section>
    </>
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage></CoverImage>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200"
    src="https://images-eu.ssl-images-amazon.com/images/I/91k7dMnLw6L._AC_UL160_.jpg"
    alt="wonkey donkey"
  />
);

const Title = () => <h1 style={{ fontSize: "2rem" }}>The Wonkey Donkey</h1>;

const authorStyle = {
  letterSpacing: "10px",
  color: "green",
};
const Author = () => <p style={authorStyle}>By Craig Smith</p>;

// three arguments element, propsObject, chilren
// function Greeting(){
//   return React.createElement('div', {}, 'hello world');
// }

ReactDom.render(<Books></Books>, document.getElementById("root"));
