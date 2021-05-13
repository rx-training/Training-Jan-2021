import React, { Component } from "react";
import PropTypes from "prop-types";
const Person = ({ person: { img, name, age } }) => {
    return (
        <article className="card border border-danger bg-dark  p-3 ">
            <img
                src={
                    img ||
                    "https://randomuser.me/api/portraits/thumb/men/22.jpg"
                }
                className="mx-auto"
                width="80px"
                alt="Logo"
            />
            <h4>{name || "parth"}</h4>
            <h4>{age}</h4>
        </article>
    );
};

//Proptype to check the props  , isRequired
Person.propTypes = {
    perosn: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }),
    // img: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired,
};
//Default Props , Use for default value , if value missing then use this values of Default Props
Person.defaultProps = {
    person: {
        img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
        name: "parth",
        age: 23,
    },
    // img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    // name: "parth",
    // age: 23,
};

export default class PersonList extends Component {
    state = {
        people: [
            {
                id: 1,
                img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
                name: "Parth",
                age: 21,
            },
            {
                id: 2,
                //img: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
                name: "Rabul",
                age: 31,
            },
        ],
    };
    render() {
        return (
            <section className="mt-2 bg-dark text-white border border-primary text-center p-3 m-2">
                <h1 className="display-4">
                    PropTypes ,Default Props ,isRequired Examples
                </h1>
                {this.state.people.map((person) => (
                    <Person key={person.id} person={person} />
                ))}
            </section>
        );
    }
}
