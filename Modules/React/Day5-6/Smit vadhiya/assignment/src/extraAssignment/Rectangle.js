import React, { Component } from 'react'

export default class Rectangle extends Component {
    constructor(props){
        super(props)
        this.state = {length : 0,width : 0,area : ''}
    }

    lengthChange = (e) => {
        const l =  e.target.value
        this.setState({length : l, area : l * this.state.width})
    }
    widthChange = (e) => {
        const w =  e.target.value
        this.setState({width : w,area : w * this.state.length})
    }

    render() {
        const area = <h2 className="h4 text-center">Area : {this.state.area}</h2>
        return (
            <div className=" border border-dark rounded bg-lights ">
                <h3 className="text-center bg-dark text-white p-2">Find Area of Rectangle</h3>
                <div className="p-2">
                    <div className="form-group ">
                        <label  htmlFor="length">Enter length </label>
                        <input type="number" className="form-control" onChange ={this.lengthChange} placeholder="enter Length"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="width">Enter width </label>
                        <input type="number" className="form-control" onChange ={this.widthChange} placeholder="enter width"/>
                    </div>
                    <div className="">
                        {(this.state.length == 0 || this.state.width == 0) ? null : area}
                       {/*  <h2>Area : {this.state.area}</h2> */}
                    </div>
                </div>
            </div>
        )
    }
}
