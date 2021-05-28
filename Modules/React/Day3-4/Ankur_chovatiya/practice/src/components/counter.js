import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    handleClick() {
        // this.setState({
        //     count : this.state.count + 1
        // } , () => {
        //     console.log(this.state.count);
        // });

        this.setState((prevState) => ({
            count : prevState.count + 1
        }));
        
    }

    incrementFive() {
        this.handleClick()
        this.handleClick()
        this.handleClick()
        this.handleClick()
        this.handleClick()
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count} </h1>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
