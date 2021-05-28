import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: "",
      area: "",
      validradius: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.radiusChange = this.radiusChange.bind(this);
  }

  radiusChange(event) {
    this.setState({
      radius: event.target.value,
    });
  }

  handleSubmit(event) {
    let isValidRadius = true;
    if (this.state.radius < 0 || this.state.radius === "") {
      this.setState({
        validradius: false,
      });

      isValidRadius = false;
    } else {
      this.setState({
        validradius: true,
      });

      isValidRadius = true;
    }

    if (!isValidRadius) {
      this.setState({
        area: null,
      });
      event.preventDefault();
      return;
    }

    this.setState((state) => {
      return {
        validradius: true,
        area: `Area of Circle is ${3.14 * state.radius * state.radius}`,
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="border border-primary rounded px-5 py-4">
        <h1 className="text-center font-weight-light mb-5">Area of Circle</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="radius">Enter Radius</label>
            <input
              className="form-control"
              type="number"
              onChange={this.radiusChange}
            />
            {!this.state.validradius && (
              <small className="form-text text-danger">
                Provide valid radius
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Get Area
          </button>
          {this.state.validradius && (
            <p className="mt-3 text-success font-weight-bold">
              {this.state.area}
            </p>
          )}
        </form>
      </div>
    );
  }
}
