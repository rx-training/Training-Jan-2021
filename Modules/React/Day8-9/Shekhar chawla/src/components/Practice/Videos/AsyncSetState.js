import React from 'react'

class DemoAsync extends React.Component {
    state = {
        counter: 0
    }

    handleIncrease = () => {
        console.log('first', this.state.counter)
        this.setState({
            counter: this.state.counter + 1
        }, () => console.log('third', this.state.counter))
        console.log('second', this.state.counter)
    }
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        }, () => console.log('third', this.state.counter))
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-success" onClick={this.handleIncrease}>+</button>
                <span className="h2 mx-4">{this.state.counter}</span>
                <button type="button" className="btn btn-danger" onClick={this.handleDecrease}>-</button>
            </React.Fragment>
        )
    }
}

export default DemoAsync