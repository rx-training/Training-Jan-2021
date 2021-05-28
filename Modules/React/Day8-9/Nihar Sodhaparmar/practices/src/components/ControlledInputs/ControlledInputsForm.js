import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      people: [],
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    if (firstName.length > 0 || lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };

  render() {
    return (
      <section className="container my-5  p-5 border border-primary rounded">
        <h1 className="display-4 text-center text-muted">
          Controlled Inputs Exercise
        </h1>
        <article className="mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Enter Firstname</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Enter Lastname</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-sm btn-primary mt-3" type="submit">
              Submit
            </button>
            <div className="mt-4">
              <h3 className="text-muted mb-3">People</h3>
              <div>
                {this.state.people.map((person, i) => (
                  <p key={i} className="text-success font-weight-bold">
                    {person}
                  </p>
                ))}
              </div>
            </div>
          </form>
        </article>
      </section>
    );
  }
}
