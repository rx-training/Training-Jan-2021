import React, { Component } from "react";

export default class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("E-mail : " + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            value={this.state.value}
            onChange={this.emailChange}
            required
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
