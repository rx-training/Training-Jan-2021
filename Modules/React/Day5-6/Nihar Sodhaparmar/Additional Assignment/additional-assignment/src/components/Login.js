import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errMsg: "",
      validUsername: true,
      validPassword: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    let isValidUsername = true;
    let isValidPassword = true;
    if (this.state.username === "") {
      this.setState({
        validUsername: false,
      });

      isValidUsername = false;
    } else {
      this.setState({
        validUsername: true,
      });

      isValidUsername = true;
    }

    if (this.state.password === "") {
      this.setState({
        validPassword: false,
      });

      isValidPassword = false;
    } else {
      this.setState({
        validPassword: true,
      });

      isValidPassword = true;
    }

    if (!isValidUsername || !isValidPassword) {
      this.setState({
        errMsg: "Email or Password is invalid",
      });
      event.preventDefault();
      return;
    }

    this.setState((state) => {
      return {
        validUsername: true,
        validPassword: true,
        errMsg: "Email or Password is invalid",
      };
    });

    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        errMsg: null,
      });
      alert("Login Successfull");
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="border border-primary rounded px-5 py-4">
        <h1 className="text-center font-weight-light mb-5">Login</h1>
        {this.state.validUsername && this.state.validPassword && (
          <p className="text-danger">{this.state.errMsg}</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              onChange={this.emailChange}
            />
            {!this.state.validUsername && (
              <small className="form-text text-danger">
                Provide valid username
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              onChange={this.passwordChange}
            />
            {!this.state.validPassword && (
              <small className="form-text text-danger">
                Provide valid password
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    );
  }
}
