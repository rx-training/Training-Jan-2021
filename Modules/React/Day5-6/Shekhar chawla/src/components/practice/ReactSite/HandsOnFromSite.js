import React from 'react'
import Counter from './Counter'

class Practice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            celcius: '',
            fahrenheit: ''
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    changeTemp = (e, scale) => {
        if (isNaN(e)) {
            console.log('Please enter a number')
        } else if (scale === 'f') {
            this.setState({
                celcius: (e - 32) * 5 / 9,
                fahrenheit: e
            })

        } else if (scale === 'c') {
            this.setState({
                fahrenheit: (e * 9) / 5 + 32,
                celcius: e
            })

        }
    }

    render() {
        return (
            <>

                <Counter counter={this.state.counter} increment={this.increment} decrement={this.decrement}
                    changeTemp={this.changeTemp} celcius={this.state.celcius} fahrenheit={this.state.fahrenheit} />

                <BoilingVerdict celsius={this.state.celcius} />
            </>
        )
    }
}


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default Practice