import React, { Component } from 'react'
import { Collage } from './stdChild/collage'
import { Personal } from './stdChild/personal'

export class StudentID extends Component {
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
            url : this.props.info.url,
            showData : true
        }
    }

    showCard = () => {
        this.setState({showData : !this.state.showData})
    }

    render() {
        const {deleteId} = this.props 
        const data = [<Collage name={this.state.clgName} address={this.state.clgAddress} logo ={this.state.clgLogo} />,
                    <Personal id={this.state.id} url={this.state.url}  name={this.state.firstName +" "+this.state.lastNme} dob={this.state.dob} /> ]

        return (
        <div className="container p-0 wid my-2 border mx-auto border-primary rounded ">
            
            {/* data will display is showdata is true */}
            {this.state.showData ? data : null}

            {/* for hide and delete */}
            <div className="bg-secondary text-right">
                <button className="btn btn-warning mx-2" onClick={this.showCard}>{this.state.showData ? 'Hide' : 'Show'}</button>
                <button className="btn btn-danger" onClick={() => deleteId(this.state.id)}>delete</button>
            </div>
        </div>
        )
    }
}

//onClick={() => deleteId(this.state.id)}


export class StudentIDs extends Component {
    constructor(props){
        super(props)
        this.state = {info : this.props.info}
    }

    deleteId = (id) => {
        console.log(id);
        const newData = this.state.info.filter((data) => data.id !== id)
        this.setState({info : newData}) 
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.state.info.map(data =>  
                        <div key={data.id} className="col-12 col-md-6 col-xl-4">
                            <StudentID  info = {data} deleteId = {this.deleteId}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
