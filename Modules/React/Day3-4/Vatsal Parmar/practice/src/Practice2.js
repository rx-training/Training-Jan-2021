import React, { Component } from "react";
import Practice3 from "./Practice3";
import "./App.css";

//Practice 2 = Practice Exercise from official site. Using map function and state object

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [1, 2, 3, 4, 5] };
  }
  addNum = () => {
    let ar1 = this.state.numbers;
    ar1.push(this.state.numbers.length + 1);
    this.setState({
      numbers: ar1,
    });
  };
  removeNum = () => {
    let ar1 = this.state.numbers;
    ar1.pop();
    this.setState({
      numbers: ar1,
    });
  };
  render() {
    const listItems = this.state.numbers.map((number) => (
      <li className="list-inline-item" key={number}>
        <h4>{number}</h4>
      </li>
    ));
    return (
      <div>
        <h4 className="text-success">
          Practice 2 - Practice Exercise from official site. Using map function
          and state object
        </h4>
        <Practice3 />
        <h4 className="text-success">
          ( ii ) - Using map function and state object
        </h4>

        <ul className="list-inline text-info">{listItems}</ul>
        <div>
          <button className="btn btn-success mx-2 mb-4" onClick={this.addNum}>
            Add
          </button>
          <button className="btn btn-danger mx-2 mb-4" onClick={this.removeNum}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
