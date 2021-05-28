import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        const {addCount} = this.props;
        const {lowerCount} = this.props;
        const {resetCount} = this.props;
        const {toggle} = this.props;
        return (
            <div className="row">
                <button className="col-5 mx-auto btn btn-primary mt-3" onClick={addCount}>Add Count</button>
                <button className="col-5 mx-auto btn btn-warning mt-3" onClick={lowerCount}>Lower Count</button>
                <button className="col-5 mx-auto btn btn-danger mt-3" onClick={resetCount}>Reset Count</button>
                <button className="col-5 mx-auto btn btn-secondary mt-3" onClick={toggle}>Toggle</button>
            </div>
        )
    }
}
