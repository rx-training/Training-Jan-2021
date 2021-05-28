import React, { Component } from "react";

export default class UnControlledInputsForm extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef;
    this.email = React.createRef;
    this.nameValue = "";
    this.emailValue = "";
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.nameValue = this.name.value;
    this.emailValue = this.email.value;

    this.forceUpdate();

    const text1 = this.refs.myText1;
    text1.style.color = "green";
    text1.style.fontWeight = "bold";

    const text2 = this.refs.myText2;
    text2.style.color = "green";
    text2.style.fontWeight = "bold";
  };
  render() {
    return (
      <section className="container my-5 p-5 border border-primary rounded">
        <h1 className="display-4 text-center text-muted">
          Un Controlled Inputs Exercise
        </h1>
        <article className="mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Name</label>
              <input
                className="form-control"
                type="text"
                ref={(name) => (this.name = name)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter E-mail</label>
              <input
                className="form-control"
                type="email"
                ref={(email) => (this.email = email)}
              />
            </div>
            <button className="btn btn-sm btn-primary mt-3" type="submit">
              Submit
            </button>
          </form>

          <p className="mt-3" ref="myText1">
            {this.nameValue}
          </p>
          <p ref="myText2">{this.emailValue}</p>
        </article>
      </section>
    );
  }
}
