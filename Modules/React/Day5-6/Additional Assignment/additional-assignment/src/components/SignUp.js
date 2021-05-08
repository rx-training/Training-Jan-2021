import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      panNumber: "",
      isSigned: false,
      validName: true,
      validAddress: true,
      validPanNumber: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.panNumberChange = this.panNumberChange.bind(this);
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  addressChange(event) {
    this.setState({
      address: event.target.value,
    });
  }

  panNumberChange(event) {
    this.setState({
      panNumber: event.target.value,
    });
  }

  handleSubmit(event) {
    let isValidName = true;
    let isValidAddress = true;
    let isValidPanNumber = true;

    if (this.state.name === "") {
      this.setState({
        validName: false,
      });

      isValidName = false;
    } else {
      this.setState({
        validName: true,
      });

      isValidName = true;
    }

    if (this.state.address === "") {
      this.setState({
        validAddress: false,
      });

      isValidAddress = false;
    } else {
      this.setState({
        validAddress: true,
      });

      isValidAddress = true;
    }

    if (this.state.panNumber === "") {
      this.setState({
        validPanNumber: false,
      });

      isValidPanNumber = false;
    } else {
      this.setState({
        validPanNumber: true,
      });

      isValidPanNumber = true;
    }

    if (!isValidName || !isValidAddress || !isValidPanNumber) {
      this.setState({
        isSigned: false,
      });
      event.preventDefault();
      return;
    }

    this.setState({
      validName: true,
      validAddress: true,
      validPanNumber: true,
      isSigned: true,
    });

    event.preventDefault();
  }
  render() {
    return (
      <div className="border border-primary rounded px-5 py-4">
        <h1 className="text-center font-weight-light mb-5">Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              onChange={this.nameChange}
            />
            {!this.state.validName && (
              <small className="form-text text-danger">
                Provide valid name
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              className="form-control"
              type="text"
              onChange={this.addressChange}
            />
            {!this.state.validAddress && (
              <small className="form-text text-danger">
                Provide valid name
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="panNumber">Pan Number</label>
            <input
              className="form-control"
              type="text"
              onChange={this.panNumberChange}
            />
            {!this.state.validPanNumber && (
              <small className="form-text text-danger">
                Provide valid name
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Register
          </button>
          {this.state.isSigned && (
            <div className="mt-3 text-success font-weight-bold">
              <p>Name : {this.state.name}</p>
              <p>Address : {this.state.address}</p>
              <p>Pan Number : {this.state.panNumber}</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
