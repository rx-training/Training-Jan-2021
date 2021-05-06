import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import StudentIDCard from "./assignment5-6";
import StudentIDCard1 from "./assignment2";
import StudentIDCard2 from "./assignment3";
import StudentIDCard3 from "./assignment4";
import Assignment1 from "./assignment1";
import "./index.css";

const Personx = (props) => {
    console.log(props);
    const { FirstName, LastName, Age } = props.person;
    return (
        <>
            <h1 style={{ color: "green", margin: "25px" }}>
                {FirstName} {LastName}
                <p>Age : {Age}</p>
            </h1>
            <hr />
            {props.children}
        </>
    );
};

const App = () => {
    let personObject = [
        { FirstName: "Parth", LastName: "Parekh", Age: 21 },
        { FirstName: "Mahendra Singh", LastName: "Dhoni", Age: 39 },
        { FirstName: "Suresh", LastName: "Raina", Age: 34 },
    ];
    return (
        <div className="container">
            <h3>Practice Exercises</h3>
            <Personx person={personObject[0]} />
            <h1>How Are You </h1>
            <Personx person={personObject[1]} />
            <Personx person={personObject[2]} />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root2"));

const Books = () => {
    return (
        <>
            <section className="Books container">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </section>
        </>
    );
};

const Book = () => {
    return (
        <div className="Book">
            <CoverImage />
            <Title />
        </div>
    );
};
const CoverImage = () => (
    <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81yxRLBMmkL._AC_UL200_SR200,200_.jpg"
        width="200"
        alt="Life Amazing Secrets"
    />
);
const Title = () => <h3 style={{ color: "red" }}>Life's Amazing Secrets</h3>;

ReactDOM.render(<Books />, document.getElementById("books"));

//PerosnList Project
const Person = ({ img, name, job, children }) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <article className="person">
            <img src={url} alt="user" />
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    );
};

const PersonList = () => {
    return (
        <section className="person-list container">
            <Person img="53" name="Parth" job="Developer" />
            <Person img="59" name="Salaman" job="Actor">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit officia, commodi laboriosam cupiditate asperiores minus
                </p>
            </Person>
            <Person img="33" name="Ranvir" job="Manager" />
        </section>
    );
};
ReactDOM.render(<PersonList />, document.getElementById("personlist"));

//Assignment
ReactDOM.render(<Assignment1 />, document.getElementById("root1"));
ReactDOM.render(<StudentIDCard />, document.getElementById("root"));

ReactDOM.render(<StudentIDCard1 />, document.getElementById("root3"));
ReactDOM.render(<StudentIDCard2 />, document.getElementById("root4"));
ReactDOM.render(<StudentIDCard3 />, document.getElementById("root5"));
