import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggle:true
        }
    }

    handleToggle=()=>{
        this.setState({
            isToggle:!this.state.isToggle
        })
    }

    render() {
        const{student,handleDelete} = this.props;
        return (
            <div className=" row col-lg-5 mx-auto my-3">
                {this.state.isToggle?<div className="shadow bg-light row col mx-auto border border-primary rounded text-left pb-4 my-5">
                <div className="col-12 text-center">
                    <img className="rounded-circle" width="75" src={student.CollegeInfo.CollegeLogo} alt="logo" />
                </div>
                <div className="col-12 text-center">
                    <h6>{student.CollegeInfo.CollegeName}</h6>
                </div>
                <div className="col-12 text-center pb-4">
                    <h6>{student.CollegeInfo.CollegeAddress}</h6>
                </div>
                <div className="col-6">
                    <img className="" src={student.ImageUrl} alt="profile" />
                </div>
                <div className="col-6 pt-3">
                    <h6>ID: {student.StudentInfo.ID}</h6>
                    <h6>FirstName: {student.StudentInfo.FirstName}</h6>
                    <h6>LastName: {student.StudentInfo.LastName}</h6>
                    <h6>DateOfBirth: {student.StudentInfo.DateOfBirth}</h6>
                </div>
                <div className="col-12 text-center">
                    <button className="btn btn-success mt-3 mx-4" onClick={this.handleToggle}>Toggle Card</button>
                    <button className="btn btn-danger mt-3 mx-4" onClick={()=>handleDelete(student.StudentInfo.ID)}>Delete Card</button>
                </div></div>:
                <div className="col-12 mt-3 text-center">
                    <button className="btn btn-success mt-3 mx-4" onClick={this.handleToggle}>Toggle Card</button>
                    <button className="btn btn-danger mt-3 mx-4" onClick={()=>handleDelete(student.StudentInfo.ID)}>Delete Card</button>
                </div>
    }
            </div>
        )
    }
}
