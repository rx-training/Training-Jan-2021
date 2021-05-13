import React from 'react'

import StudentPhoto from './StudentPhoto'
import StudentDetails from './StudentDetails'
import StudentCollegeDetails from './StudentCollegeDetails'


class Student extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      style : {
        width: "22rem",
        "border-radius": "2%"
      }
    }
  }
  
  delete = (e) => {
    console.log(e.target.value , 'deleted')
    this.setState({
      style: {
        display : "none"
      }
    })
  }
  render() {
  return (
    <div className="card mx-4 text-dark h-100" style={this.state.style}>
      
      <div className="card-header">
        <StudentCollegeDetails college={this.props.student.college} />
      </div>
      
      <StudentPhoto image={this.props.student.image} />
      <div class="card-body">
        <h5 class="card-title">Student Details</h5>
        <p class="card-text"><StudentDetails student={this.props.student} /></p>

        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={this.delete} value={this.props.student.fname}>Delete</button>
        </div>
      </div>
    </div>

  )
  }
}
// https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg
// https://i.pinimg.com/originals/2b/0d/59/2b0d59149d7c76e5ac29cb7d77fbbb14.jpg

export default Student