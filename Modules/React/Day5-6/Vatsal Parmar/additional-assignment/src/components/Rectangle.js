import React, { Component } from "react";

export default class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.state = { h: 0, l: 0, area: null };
  }
  areaOfRectangle = () => {
    let len = this.state.l;
    let height = this.state.h;

    let area = len * height;

    this.setState({ area: area });
  };
  render() {
    return (
      <div className="border border-warning p-3 rounded" id="rectangle">
        <h2 className="text-warning text-center">Find The Area Of Rectangle</h2>
        <div className="form-group">
          <p className="text-warning my-2">
            <b>Enter Height : </b>
          </p>
          <input
            className="form-control w-50 text-warning"
            id="height"
            onChange={(e) => {
              this.setState({ h: e.target.value });
            }}
            placeholder="Height"
            type="number"
          />
          <p className="text-warning my-2">
            <b>Enter Length : </b>
          </p>
          <input
            className="form-control w-50 text-warning"
            id="length"
            onChange={(e) => {
              this.setState({ l: e.target.value });
            }}
            placeholder="Length"
            type="number"
          />
          <button
            type="button"
            className="btn btn-warning my-3"
            onClick={this.areaOfRectangle}
          >
            Find Area
          </button>
          <p className="text-warning">
            <b>Area Of Rectangle : </b>
            {this.state.area ? this.state.area : ""}
          </p>
        </div>
      </div>
    );
  }
}
