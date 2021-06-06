import React, { Component } from 'react'
import DoctorService from '../../services/DoctorService'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctors: []
    }
  }

  deleteDoctor(id) {
    this.props.history.push(`/delete-doctor/${id}`)
  }
  viewDoctor(id) {
    this.props.history.push(`/view-doctor/${id}`);
  }
  editDoctor(id) {
    this.props.history.push(`/add-doctor/${id}`);
  }

  componentDidMount() {
    DoctorService.getDoctors().then((res) => {
      this.setState({ doctors: res.data });
    });
  }

  addDoctor = () => {
    this.props.history.push('/add-doctor/_add');
  }


  render() {
    return (
      <div>
        <h2 className="text-center">Doctors List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addDoctor}> Add Doctor</button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th> Doctor First Name</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              { 
                this.state.doctors.map(
                  (doctor, index) =>
                    <tr key={index}>
                      <td> {doctor.name} </td>

                      <td>
                        <button onClick={() => this.editDoctor(doctor.id)} className="btn btn-info">Update </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.deleteDoctor(doctor.id)} className="btn btn-danger">Delete </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewDoctor(doctor.id)} className="btn btn-info">View </button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>

        </div>

      </div>
    )
  }
}
