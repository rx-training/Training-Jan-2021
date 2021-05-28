import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    console.log("called first : ", this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      console.log("called second : ", this.state.count)
    );

    // this.setState({
    //   count: this.state.count + 2,
    // });

    console.log("called third : ", this.state.count);
  };

  handleDecrease = () => {
    console.log("called first : ", this.state.count);

    this.setState(
      (state, props) => {
        return {
          count: state.count - 1,
        };
      },
      () => console.log("called second : ", this.state.count)
    );

    // this.setState((state, props) => {
    //   return {
    //     count: state.count - 2,
    //   };
    // });

    console.log("called third : ", this.state.count);
  };

  render() {
    return (
      <div className="container border border-primary rounded p-5 my-5 text-center">
        <h1 className="display-4 text-center text-muted">
          setState() Asynchronous Exercise
        </h1>
        <h3 className="d-block mt-5">Count : {this.state.count}</h3>
        <button
          type="button"
          className="btn btn-danger mt-4 mx-3"
          onClick={this.handleDecrease}
        >
          Decrease
        </button>
        <button
          type="button"
          className="btn btn-success mt-4 mx-3"
          onClick={this.handleIncrease}
        >
          Increase
        </button>
      </div>
    );
  }
}
