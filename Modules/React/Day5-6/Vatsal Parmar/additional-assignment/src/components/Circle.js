import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { radius: 0 };
  }
  handleChange = (e) => {
    this.setState({ radius: e.target.value });
  };
  render() {
    return (
      <div className="border border-primary p-3 rounded" id="circle">
        <h2 className="text-primary text-center">Find The Area Of Circle</h2>
        <div className="form-group">
          <p className="text-primary my-2">
            <b>Enter Radius : </b>
          </p>
          <input
            className="form-control w-50 text-primary"
            id="radious"
            onChange={this.handleChange}
            placeholder="Radius"
            type="number"
          />
        </div>
        <p className="text-primary my-2">
          <b>Area Of Circle : </b>
          {3.14 * this.state.radius * this.state.radius}
        </p>
      </div>
    );
  }
}

export default Circle;
