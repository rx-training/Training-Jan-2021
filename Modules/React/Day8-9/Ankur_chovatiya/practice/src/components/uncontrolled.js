import React, { Component } from 'react'

export default class Uncontrolled extends Component {
 
    handleSubmit = e => {
        e.preventDefault();
        const name = this.refs.myName.value;
        console.log(this.email.value);
        console.log(name);
        const text = this.refs.text;
        text.style.color = 'red'
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="myName"></input>
                    <input type="email" ref={email => (this.email = email)}></input>
                    <button type="submit">Submit</button>
                </form>
                <p ref="text">This is my text</p>
            </div>
        )
    }
}
