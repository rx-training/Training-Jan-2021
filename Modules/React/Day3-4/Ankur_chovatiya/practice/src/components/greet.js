import React, { Component } from 'react'

export default class Greet extends Component {

    constructor(){
        super()
        this.state = {
            messages : 'Welcome Ankur'
        }
    }

    handleClick() {
        this.setState({
            messages : 'Thanks you for clicking me!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.messages}</h1>
                <button onClick= { () =>this.handleClick()}>Click me!</button>
            </div>
        )
    }
}
