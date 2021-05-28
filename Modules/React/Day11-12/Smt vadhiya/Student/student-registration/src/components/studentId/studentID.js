import React, { Component } from 'react'
import StudentServices from '../../services/StudentServices'
import { Collage } from './stdChild/collage'
import { Personal } from './stdChild/personal'

export class StudentID extends Component {
    constructor(props){
        super(props)
        this.state = {
            ...this.props.data,
            showData : true
        }
    }

    showCard = () => {
        this.setState({showData : !this.state.showData})
    }

    render() {
        return (
        <div className="container p-0 wid my-2 border mx-auto border-primary rounded ">
            <Collage  />
            <Personal id={this.state._id} url={this.state.stdImg}  name={this.state.stdFirstName +" "+this.state.stdLastName} dob={this.state.stdDob} />
        </div>
        )
    }
}

//onClick={() => deleteId(this.state.id)}


export class StudentIDs extends Component {
    constructor(props){
        super(props)
        this.state = {data : []}
    }

    componentDidMount(){
        StudentServices.getStudents().then(res => {
            this.setState({
                data : res.data
            })
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.state.data.map(data =>  
                        <div key={data._id} className="col-12 col-md-6 col-xl-4">
                            <StudentID  data = {data}  />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
