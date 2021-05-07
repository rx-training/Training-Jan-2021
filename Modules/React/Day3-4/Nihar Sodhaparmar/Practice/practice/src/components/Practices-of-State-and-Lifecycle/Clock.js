import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 1 };
  }

  tick() {
    // this.setState({
    //   date: new Date(),
    // });
    this.setState((state, props) => {
      return { count: state.count + 1, date: new Date() };
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In getDerivedStateFromProps()");
    return {};
  }

  componentDidMount() {
    console.log("In componentDidMount()");
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("In componentWillUnmount()");
    clearInterval(this.timerId);
  }

  render() {
    console.log("In render() and count is " + this.state.count);
    return (
      <div>
        <h2>Timer</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
