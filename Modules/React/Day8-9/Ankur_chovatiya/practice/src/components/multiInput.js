import React, { Component } from 'react'

export default class MultiInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: [value]
        });
        // console.log(this.state);
      }
    
      render() {
        return (
          <form>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        );
      }
}
