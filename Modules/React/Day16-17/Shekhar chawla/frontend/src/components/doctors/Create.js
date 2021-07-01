import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService';

class CreateDoctorComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: '',
      doctorId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
  }

  // step 3
  componentDidMount() {

    // step 4
    if (this.state.id === '_add') {
      return
    } else {
      DoctorService.getDoctor(this.state.id).then((res) => {
        let doctor = res.data;
        this.setState({
          doctorId: doctor.id,
          firstName: doctor.name
        });
      });
    }
  }
  saveOrUpdateDoctor = (e) => {
    e.preventDefault();
    let doctor = { firstName: this.state.firstName, doctorId: this.state.doctorId };
    console.log('doctor => ' + JSON.stringify(doctor));

    // step 5
    if (this.state.id === '_add') {
      DoctorService.createDoctor(doctor).then(res => {
        this.props.history.push('/doctors');
      });
    } else {
      DoctorService.updateDoctor(this.state.doctorId, doctor).then(res => {
        this.props.history.push('/doctors');
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  cancel() {
    this.props.history.push('/doctors');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Doctor</h3>
    } else {
      return <h3 className="text-center">Update Doctor</h3>
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className="card-body">
                <form autoComplete="off">
                  <div className="form-group">
                    <label> First Name: </label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                      value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                  </div>
                  <div className="form-group">
                    <label> Id: </label>
                    <input placeholder="Id" name="doctorId" className="form-control"
                      value={this.state.doctorId} onChange={this.changeFirstNameHandler} />
                  </div>

                  <button className="btn btn-success" onClick={this.saveOrUpdateDoctor}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CreateDoctorComponent