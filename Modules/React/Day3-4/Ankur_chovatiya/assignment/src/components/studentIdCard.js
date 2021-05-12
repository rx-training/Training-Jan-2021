import React, { Component } from 'react'
import card from 'react-bootstrap/Card'



export default class StudentsIdCard extends Component {
   
   
    render() {
        return (
        <div className=" row d-flex justify-content-center mx-5">
            {this.props.students.map((stu) =>
            <div key={stu.id} className="card col-md-3 col-lg-2 m-4" style={{width: "18rem" , backgroundColor:"lightsalmon"}}>
            
                <div className="card-body">
                <img src={stu.img} alt="student photo" />
                <h5 className="card-title">Name : {stu.name}</h5>
                <h6 className="card-text">Roll No :{stu.rollno}</h6>
                <h6 className="card-text">Class : {stu.class}</h6>
                <h6 className="card-text">Marks : {stu.marks}</h6>
                <h6 className="card-text">Address : {stu.address}</h6>
                   </div>
            </div>
            )}

        </div>
        )
    }



}

