import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (e) => {
    // if (e.target.name === "firstName") {
    //   const textValue = e.target.value;
    //   this.setState({ firstName: textValue });
    // }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };
  render() {
    return (
      <>
        <div className="bg-secondary p-3 rounded col-md-6 mx-auto text-white">
          <form onSubmit={this.handleSubmit}>
            <label className="col-md-3 form-label">First Name :</label>
            <input
              type="text"
              name="firstName"
              className="col-md-9 form-control"
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <label className="form-label">Last Name :</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button className="btn btn-warning" type="submit">
              Submit
            </button>
          </form>
          <h2>People</h2>
          <div className="text-warning">{this.state.people}</div>
        </div>
      </>
    );
  }
}
