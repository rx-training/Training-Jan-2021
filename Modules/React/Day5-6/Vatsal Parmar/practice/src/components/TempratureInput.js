import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset className="form-group">
        <legend className="text-secondary">
          Enter temperature in {scaleNames[scale]}:
        </legend>
        <input
          className="form-control w-50 text-primary"
          value={temperature}
          onChange={this.handleChange}
          placeholder="Enter Temprature"
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
