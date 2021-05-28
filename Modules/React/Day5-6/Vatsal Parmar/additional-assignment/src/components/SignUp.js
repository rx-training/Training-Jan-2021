import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: null, phone: null, address: null, info: false };
  }
  signUp = () => {
    this.setState({ info: true });
  };
  render() {
    return (
      <div className="p-3 border border-info rounded" id="signup">
        <h2 className="text-info text-center">Sign Up</h2>
        <div className="form-group">
          <p className="text-info my-2">
            <b>Enter Name : </b>
          </p>
          <input
            className="form-control w-75 text-info"
            id="name"
            onChange={(e) => {
              this.setState({ name: e.target.value, info: false });
            }}
            placeholder="Name"
          />
          <p className="text-info my-2">
            <b>Enter Phone Number : </b>
          </p>
          <input
            className="form-control w-75 text-info"
            id="phone"
            type="number"
            onChange={(e) => {
              this.setState({ phone: e.target.value, info: false });
            }}
            placeholder="Phone Number"
          />
          <p className="text-info my-2">
            <b>Enter Address : </b>
          </p>
          <textarea
            className="form-control w-75 text-info"
            id="phone"
            onChange={(e) => {
              this.setState({ address: e.target.value, info: false });
            }}
            placeholder="Address"
          />
        </div>
        <button
          type="button"
          className="btn btn-info my-3"
          onClick={this.signUp}
        >
          Sign Up
        </button>
        {this.state.info && (
          <div>
            <p className="text-info">
              <b>Name : </b>
              {this.state.name ? (
                this.state.name
              ) : (
                <span className="text-danger">Enter Name</span>
              )}
            </p>
            <p className="text-info">
              <b>Phone Number : </b>
              {this.state.phone ? (
                this.state.phone
              ) : (
                <span className="text-danger">Enter Phone Number</span>
              )}
            </p>
            <p className="text-info">
              <b>Address : </b>
              {this.state.address ? (
                this.state.address
              ) : (
                <span className="text-danger">Enter Address</span>
              )}
            </p>
          </div>
        )}
      </div>
    );
  }
}
