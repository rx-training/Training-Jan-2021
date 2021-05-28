import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
      }
    
      handleClick=()=>{
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
      render() {
        return (
        <div className="container text-center">
          <button className="btn btn-primary btn-lg mx-auto mt-5" onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
        );
      }
}
