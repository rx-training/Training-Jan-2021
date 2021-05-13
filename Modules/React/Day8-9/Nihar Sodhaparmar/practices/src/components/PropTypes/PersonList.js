import React, { Component } from "react";
import Person from "./Person";

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          img: "https://randomuser.me/api/portraits/men/75.jpg",
          name: "John Doe",
          age: 36,
        },
        {
          id: 2,
          img: "https://randomuser.me/api/portraits/men/94.jpg",
          name: "Bob Roberts",
          age: 34,
        },
        {
          id: 3,
          img: "https://randomuser.me/api/portraits/men/34.jpg",
          name: "Peter Wilson",
          age: 32,
          info: "Peter's info",
        },
        {
          id: 4,
          img: "https://randomuser.me/api/portraits/men/79.jpg",
          name: "Joe Taylor",
          age: 42,
          info: "Joe's info",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container border border-primary rounded my-5">
        <h1 className="display-4 text-center mt-5 text-muted">
          PropTypes Exercise
        </h1>
        <section className="row">
          {this.state.persons.map((person) => (
            <Person key={person.id} person={person}></Person>
          ))}
        </section>
      </div>
    );
  }
}
