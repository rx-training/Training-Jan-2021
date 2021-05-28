import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class StudentIdCard extends Component {
    
    render() {
        const Students = this.props.StudentObj.map(student=>(
            <section className="container text-center mx-auto w-50 bg-light text-dark">
                <div className="row mt-3">
                    <div className="col-md-4 border border-dark py-3">
                    <img width="200" src={student.ImageUrl} alt="" className="rounded-circle border-box" />
                    </div>
                    <div className="col-md-4 border border-dark py-2">
                    <p>ID: {student.StudentInfo.ID}</p>
                    <p>FirstName: {student.StudentInfo.FirstName}</p>
                    <p>LastName: {student.StudentInfo.LastName}</p>
                    <p>DateOfBirth: {student.StudentInfo.DateOfBirth}</p>
                    </div>
                    <div className="col-md-4 border border-dark py-2">
                    <p>CollegeName: {student.CollegeInfo.CollegeName}</p>
                    <p>CollegeAddress: {student.CollegeInfo.CollegeAddress}</p>
                    <p>CollegeLogo: {student.CollegeInfo.CollegeLogo}</p>
                    </div>
                </div>
            </section>
        ))

        return (
            <div>
                {Students}
            </div>
        )
    }
}
