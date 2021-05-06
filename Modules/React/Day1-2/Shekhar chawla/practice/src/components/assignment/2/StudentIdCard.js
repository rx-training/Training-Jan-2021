import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Students = () => {
    return (
        <div className="container">
            <Student />
        </div>
    )
}

const Student = () => {
    const style = {
        width: "18rem"
    }
    return (
        <div class="card" style={style}>
            <div class="card-header">
                <College />
            </div>
            <StudentImage />
            <div class="card-body">
                <h5 class="card-title">Student Details</h5>
                <p class="card-text"><StudentDetails /></p>
            </div>
        </div>
    )
}

const StudentImage = () => {
    return <img
        src="https://media.istockphoto.com/photos/happy-student-picture-id876997614?k=6&m=876997614&s=170667a&w=0&h=4f5DwG1AvtGTBPxq0qSHMC-am24SZ7JqilaUm2yScYE="
        class="card-img-top"
        alt="studentImg"
    ></img>
}

const StudentDetails = () => {
    return (
        <div className="student-details">
            <p>Name: John </p>
            <p>Roll No: 8</p>
            <p>Class: 8th B</p>
        </div>
    )
}

const College = (props) => {
    return (
        <div className="student-college-details">
            <p>College: BSC</p>
            <p>Address: Gujarat</p>
        </div>
    )
}

export default Students