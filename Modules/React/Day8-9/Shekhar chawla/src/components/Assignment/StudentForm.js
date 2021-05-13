import React from 'react'
import StudentList from './StudentList'

class PeopleForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      image: '',
      collegeName: '',
      collegeLogo: '',
      students: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const addThisPerson = { id: this.state.students.length+1, firstName: this.state.firstName, lastName: this.state.lastName, image: this.state.image, college: { logo: this.state.collegeLogo, name: this.state.collegeName } }
    this.setState({
      students: [...this.state.students, addThisPerson]
    },
    () => console.log(this.state.students) )
  }

  render() {
    return (
      <div className="row">

        <form className="col col-6" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Firstname:</label>
            <input type="text" id="firsName" name="firstName" className="form-control" value={this.firstName} onChange={this.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Lastname:</label>
            <input type="text" id="lastName" name="lastName" className="form-control" value={this.lastName} onChange={this.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
            <input type="text" id="image" name="image" className="form-control" value={this.image} onChange={this.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="collegeName" className="form-label">College name:</label>
            <input type="text" id="collegeName" name="collegeName" className="form-control" value={this.collegeName} onChange={this.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="collegeLogo" className="form-label">College logo:</label>
            <input type="text" id="collegeLogo" name="collegeLogo" className="form-control" value={this.collegeLogo} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      { this.state.students.length!==0 && 
        <StudentList students={this.state.students} />
      }
        
      </div>
    )

  }
}


export default PeopleForm