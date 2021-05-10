import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Students = (props) => {
    return (
        <div className="container">
            <div className="card-group">
                <Student student={data[0]} />
                <Student student={data[1]} />
                <Student student={data[2]} />
            </div>
            {props.children}
        </div>
        
    )
}

const Student = (props) => {
    const style = {
        width: "18rem"
    }
    return (
        <div className="card mx-4" style={style}>
            <div class="card-header">
                <College college={props.student['college']} />
            </div>
            <StudentImage image={props.student['image']} />
            <div class="card-body">
                <h5 class="card-title">Student Details</h5>
                <p class="card-text"><StudentDetails student={props.student} /></p>
            </div>
        </div>

    )
}

const StudentImage = (props) => {
    return <img
        src={props.image}
        class="card-img-top"
        alt="studentImg"
        className="h-50"
    ></img>
}

const StudentDetails = ({ student }) => {
    return (
        <div className="student-details">
            <p>Name: {student.fname + " " + student.lname} </p>
            <p>D.O.B: {student.dob}</p>
            <p>Class: {student.class}</p>
        </div>
    )
}

const College = ({ college }) => {
    return (
        <div className="student-college-details">
            <p>College: {college.name}</p>
            <p>Address: {college.address}</p>
        </div>
    )
}

const data = [
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
    },
    {
        fname: "peter",
        lname: "doe",
        dob: "10/01/2002",
        image: "http://i.huffpost.com/gen/1801406/images/o-STUDENT-ON-COMPUTER-facebook.jpg",
        class: "Mechanical Engineering",
        college: {
            name: "IIT",
            address: "Banglore"
        }
    },
    {
        fname: "mohan",
        lname: "lassiwala",
        dob: "11/11/2000",
        image: "https://collegesofdistinction.com/wp-content/uploads/2018/08/independent-research-better-student-1100x672.jpg",
        class: "Chemical Engineering",
        college: {
            name: "GIT",
            address: "Ahmedabad"
        }
    },
]



export default Students