import React, { Component } from 'react'
import { Collage } from './stdChild/collage'
import { Personal } from './stdChild/personal'

class StudentID extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.info.id,
            firstName : this.props.info.firstName,
            lastNme : this.props.info.lastNme,
            dob : this.props.info.dob,
            clgName : this.props.info.clgName,
            clgAddress : this.props.info.clgAddress,
            clgLogo : this.props.info.clgLogo,
            url : this.props.info.url
        }
    }

    render() {
        return (
            <div className="container wid border mx-auto my-2 border-primary rounded m-2">
            <div className="text-center">
                {this.props.children}
            </div>
            <Collage name={this.state.clgName} address={this.state.clgAddress} logo ={this.state.clgLogo} />
            <Personal id={this.state.id} url={this.state.url}  name={this.state.firstName +" "+this.state.lastNme} dob={this.state.dob} />
        </div>
        )
    }
}




export default class studentIDs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row ">
                    {this.props.info.map(data =>  
                        <div className="col-12 col-md-6 col-xl-4">
                            <StudentID  info = {data}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
