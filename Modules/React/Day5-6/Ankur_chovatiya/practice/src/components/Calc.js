import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'

 
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }


  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <h5 style={{color:"red"}}>The water would boil.</h5>;
    }
    return <h5 style={{color:"blue"}}>The water would not boil.</h5>;
  }


export default class Calc extends Component {


    constructor(props){
        super(props);
        this.handleCelsiusChange  = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = 
        {
            temperature: '', scale: 'c'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
               <TemperatureInput 
               scale="c" 
               temperature={celsius}
               onTemperatureChange={this.handleCelsiusChange}
               />
              <h1>=</h1> 
               <TemperatureInput 
               scale="f" 
               temperature={fahrenheit}
               onTemperatureChange={this.handleFahrenheitChange}
               />
               <BoilingVerdict
          celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
