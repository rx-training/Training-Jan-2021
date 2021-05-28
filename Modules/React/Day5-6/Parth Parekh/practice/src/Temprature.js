import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    handleChange = (e) => {
        console.log(e.target);
        this.props.onTemperatureChange(e.target.value);
    };

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div className="form-group">
                <label for="" className="m-3 h5">
                    Enter temperature in {scaleNames[scale]}
                </label>{" "}
                <div className="w-100"></div>
                <input
                    type="text"
                    value={temperature}
                    className="w-25 m-2 rounded border border-primary"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: "", scale: "c" };
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale: "c", temperature });
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: "f", temperature });
    };

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius =
            scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit =
            scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div className="card bg-dark text-white">
                <div className="">
                    <TemperatureInput
                        scale="c"
                        temperature={celsius}
                        onTemperatureChange={this.handleCelsiusChange}
                    />
                </div>
                <div className="">
                    <TemperatureInput
                        scale="f"
                        temperature={fahrenheit}
                        onTemperatureChange={this.handleFahrenheitChange}
                    />
                </div>
                <div className="">
                    <BoilingVerdict celsius={parseFloat(celsius)} />
                </div>
            </div>
        );
    }
}

export default Calculator;
