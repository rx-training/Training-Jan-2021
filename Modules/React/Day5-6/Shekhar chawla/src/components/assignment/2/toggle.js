import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bulb: 'off'
    }
  }

  handleBulbChange = (e) => {
    var currentBulb = e.target.value === 'off' ? 'on' : 'off'
    this.setState({
      bulb: currentBulb
    })

  }

  render() {
    return (
      <div className="form-check form-switch">
        <input onChange={(e) => this.handleBulbChange(e)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={this.state.bulb} />
        <label className="form-check-label" for="flexSwitchCheckDefault">{this.state.bulb}</label>
      </div>

    )
  }
}

export default Toggle