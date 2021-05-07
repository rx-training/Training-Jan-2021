import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pass: null,
      validUser: false,
      invalidUser: false,
    };
  }
  login = () => {
    if (this.state.user === "admin" && this.state.pass === "admin") {
      this.setState({ validUser: true, invalidUser: false });
    } else {
      this.setState({ validUser: false, invalidUser: true });
    }
  };
  render() {
    return (
      <div className="p-3 border border-success rounded" id="login">
        <h2 className="text-success text-center">Log In</h2>
        <div className="form-group">
          <p className="text-success my-2">
            <b>Enter Username : </b>
          </p>
          <input
            className="form-control w-75 text-primary"
            id="user"
            onChange={(e) => {
              this.setState({ user: e.target.value });
            }}
            placeholder="Username"
          />
          <p className="text-success my-2">
            <b>Enter Password : </b>
          </p>
          <input
            className="form-control w-75 text-primary"
            id="id"
            onChange={(e) => {
              this.setState({ pass: e.target.value });
            }}
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="btn btn-success my-3"
          onClick={this.login}
        >
          Login
        </button>
        {this.state.validUser && (
          <h4 className="text-success">Login Successfull</h4>
        )}
        {this.state.invalidUser && (
          <h4 className="text-danger">Wrong Username Or Password</h4>
        )}
      </div>
    );
  }
}
