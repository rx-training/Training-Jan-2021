import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService'

class ViewDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            doctor: {}
        }
    }

    componentDidMount(){
        DoctorService.getDoctor(this.state.id).then( res => {
            this.setState({doctor: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Doctor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Doctor First Name: </label>
                            <div> { this.state.doctor.name }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Id: </label>
                            <div> { this.state.doctor.id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDoctorComponent