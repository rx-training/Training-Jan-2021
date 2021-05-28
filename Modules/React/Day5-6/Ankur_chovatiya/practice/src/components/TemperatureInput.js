import React, { Component } from 'react'
import card from 'react-bootstrap/Card'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
 

 export default class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
    //   this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
    //   const temperature = this.state.temperature;
    const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <div className="d-flex justify-content-center m-3">
        <div className="card " style={{width : "350px" , backgroundColor: 'lightblue'}}>
          <div className="card-body">
          <h5>Enter temperature in {scaleNames[scale]}:</h5>
          <input className="form-control" value={temperature}
                 onChange={this.handleChange} />
                 </div>
        </div>
        </div>
      );
    }
  }