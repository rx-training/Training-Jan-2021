import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Students = () => {
    return (
        <div className="container">
            <Student />

        </div>
    )
}

const Student = (props) => {
    const style = {
        width: "18rem"
    }
    return (
        <div className="card" style={style}>
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
        src={data.image}
        class="card-img-top"
        alt="studentImg"
        className="h-50"
    ></img>
}

const StudentDetails = () => {
    return (
        <div className="student-details">
            <p>Name: {data.fname + " " + data.lname} </p>
            <p>D.O.B: {data.dob}</p>
            <p>Class: {data.class}</p>
        </div>
    )
}

const College = () => {
    return (
        <div className="student-college-details">
            <p>College: {data.college.name}</p>
            <p>Address: {data.college.address}</p>
        </div>
    )
}

const data =
{
    fname: "lisa",
    lname: "marcof",
    dob: "12/11/2011",
    image: "https://media.istockphoto.com/photos/happy-student-picture-id876997614?k=6&m=876997614&s=170667a&w=0&h=4f5DwG1AvtGTBPxq0qSHMC-am24SZ7JqilaUm2yScYE=",
    class: "Computer Engineering",
    college: {
        name: "NIT",
        address: "Delhi"
    }
}




export default Students