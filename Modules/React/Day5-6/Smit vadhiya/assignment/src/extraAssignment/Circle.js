import React, { Component } from 'react'

export default class Circle extends Component {
    constructor(props){
        super(props)
        this.state = {radius : 0,area : ''}
    }

    radiusChange = (e) => {
        const r =  e.target.value
        this.setState({radius : r,area : Math.pow(r,2) * 3.14})
    }
    
    render() {
        const area = <h2 className="h4 text-center">Area : {this.state.area}</h2>
        return (
            <div className="border border-dark rounded bg-lights my-2">
                <h3 className="text-center bg-dark text-white p-2">Find Area of Circle</h3>
                <div className="p-2">
                    <div className="form-group ">
                        <label  htmlFor="radius">Enter radius </label>
                        <input type="number" className="form-control" onChange ={this.radiusChange} placeholder="enter radius"/>
                    </div>
                    <div className="">
                        {this.state.radius == 0 ? null : area}
                    </div>
                </div>
            </div>
        )
    }
}
