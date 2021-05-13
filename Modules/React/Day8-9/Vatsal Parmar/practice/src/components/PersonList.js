import React, { Component } from "react";
import Person from "./Person";
import PropTypes from "prop-types";

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

// Person.defaultProps = {
//   img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//   name: "james",
//   age: 34,
//   info: "default info",
// };

export default class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "jhon",
        age: 24,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/85.jpg",
        name: "bob",
        age: 25,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        name: "peter",
        age: 25,
        info: "some info about peter",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    );
  }
}
