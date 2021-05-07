
import React, { Component } from 'react'
import { Image } from './image'


export  class Personal extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.id,
            name : this.props.name,
            dob : this.props.dob,
            url : this.props.url
        }
    }

    render() {
        return (
            <div className="row m-0 bg-secondary text-white">
            <div className="col-4 p-1">
                <Image src={this.state.url} ></Image>
            </div>
            <div className="col-8 p-3">
                <span className="font-weight-bold"> Id :</span> {this.state.id} <br/>
                <span className="font-weight-bold">  Name :</span> {this.state.name}<br/>
                <span className="font-weight-bold"> Date Of Birth :</span> {this.state.dob}
            </div>
        </div> 
        )
    }
}
