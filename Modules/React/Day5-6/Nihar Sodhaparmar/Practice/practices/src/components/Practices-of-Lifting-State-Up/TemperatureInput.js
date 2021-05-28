import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className="form-group text-center">
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input
          className="form-control mx-auto width-of-input"
          value={temperature}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
