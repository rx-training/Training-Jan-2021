import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState((state, props) => {
      return { count: state.count - props.amount };
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="mt-3">
          <button
            className="btn btn-success mx-2"
            type="button"
            onClick={this.handleIncrease}
          >
            Increase
          </button>
          <span className="text-primary">Count : {this.state.count}</span>
          <button
            type="decrease"
            className="btn btn-danger mx-2"
            onClick={this.handleDecrease}
          >
            Decrease
          </button>
        </div>
      </React.Fragment>
    );
  }
}
