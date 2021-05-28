import React, { Component } from "react";

export default class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: "",
      width: "",
      area: "",
      validLength: true,
      validWidth: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lengthChange = this.lengthChange.bind(this);
    this.widthChange = this.widthChange.bind(this);
  }

  lengthChange(event) {
    this.setState({
      length: event.target.value,
    });
  }

  widthChange(event) {
    this.setState({
      width: event.target.value,
    });
  }

  handleSubmit(event) {
    let isValidLength = true;
    let isValidWidth = true;
    if (this.state.length < 0 || this.state.length === "") {
      this.setState({
        validLength: false,
      });

      isValidLength = false;
    } else {
      this.setState({
        validLength: true,
      });

      isValidLength = true;
    }

    if (this.state.width < 0 || this.state.width === "") {
      this.setState({
        validWidth: false,
      });

      isValidWidth = false;
    } else {
      this.setState({
        validWidth: true,
      });

      isValidWidth = true;
    }

    if (!isValidLength || !isValidWidth) {
      this.setState({
        area: null,
      });
      event.preventDefault();
      return;
    }

    this.setState((state) => {
      return {
        validWidth: true,
        validLength: true,
        area: `Area of Rectangle is ${state.length * state.width}`,
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="border border-primary rounded px-5 py-4">
        <h1 className="text-center font-weight-light mb-5">
          Area of Reactangle
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="length">Enter Length</label>
            <input
              className="form-control"
              type="number"
              onChange={this.lengthChange}
            />
            {!this.state.validLength && (
              <small className="form-text text-danger">
                Provide valid length
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="width">Enter Width</label>
            <input
              className="form-control"
              type="number"
              onChange={this.widthChange}
            />
            {!this.state.validWidth && (
              <small className="form-text text-danger">
                Provide valid width
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Get Area
          </button>
          {this.state.validLength && this.state.validWidth && (
            <p className="mt-3 text-success font-weight-bold">
              {this.state.area}
            </p>
          )}
        </form>
      </div>
    );
  }
}
