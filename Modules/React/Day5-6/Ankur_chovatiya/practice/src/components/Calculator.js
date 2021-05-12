import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }


export default class Calculator extends Component {
    
    constructor(props) {
        super(props)
        this.handleCange = this.handleCange.bind(this);
        this.state = {
            temperature : ''
        }
    }

    handleCange(e){
        this.setState({temperature : e.target.value});
    }
    
    
    
    render() {
        const temperature = this.state.temperature;
        return (
            <div>
            

                <h1>Enter temperature in Celsius:</h1>
                <input
                    value = {temperature}
                    onChange = {this.handleCange}
                >
                </input> 
                <BoilingVerdict celsius={parseFloat(temperature)} ></BoilingVerdict> 
            </div>
        )
    }
}
