import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


export default class EventState extends Component {

    constructor(props){
        super(props)
        this.state  = {
            isToggleOn : true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // console.log('button clicked');
        this.setState((prevState)=>({
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Button>
            </div>
        )
    }
}
