import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.myName = React.createRef();
    this.myEmail = React.createRef();
    this.myText = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.myName.value;
    const email = this.myEmail.value;

    const text = this.myText;
    text.textContent = `Name : ${name} , Email : ${email}`;
    text.style.color = "yellow";
  };
  render() {
    return (
      <div className="bg-secondary p-3 rounded col-md-6 mx-auto text-white">
        <form onSubmit={this.handleSubmit}>
          <label className="col-md-3 form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            ref={(input) => (this.myName = input)}
          />
          <label className="col-md-3 form-label">Email :</label>
          <input
            type="email"
            className="form-control"
            ref={(input) => (this.myEmail = input)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p ref={(input) => (this.myText = input)}>Hello World</p>
      </div>
    );
  }
}
