import React from 'react'

class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            date: new Date()
        }
    }
    incCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }


    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incCounter} className="btn btn-primary">+</button>

                <h1>{this.state.date.toLocaleString()}</h1>
                <button onClick={this.inc} className="btn btn-dark" >Start Clock</button>
            </div>
        )
    }
}
export default Practice