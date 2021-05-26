import React, { Component } from 'react'
import StudentIdCard from './StudentIdCard'

export default class StudentList extends Component {
    constructor(){
        super();
        this.state={
            studentlist:[{
                    ImageUrl : "https://picsum.photos/534/354",
                    StudentInfo : {
                      ID: "01",
                      FirstName: "Chirag",
                      LastName: "Fabiyani",
                      DateOfBirth: "11/02/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "AIT"
                    }
                },{
                    ImageUrl : "https://picsum.photos/535/354",
                    StudentInfo : {
                      ID: "02",
                      FirstName: "Vinod",
                      LastName: "Meghani",
                      DateOfBirth: "03/04/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "AIT"
                    }
                },{
                    ImageUrl : "https://picsum.photos/536/354",
                    StudentInfo : {
                      ID: "03",
                      FirstName: "Kirtan",
                      LastName: "Patadia",
                      DateOfBirth: "25/10/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "AIT"
                    }
                },{
                    ImageUrl : "https://picsum.photos/537/354",
                    StudentInfo : {
                      ID: "04",
                      FirstName: "Yash",
                      LastName: "Patel",
                      DateOfBirth: "04/01/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "AIT"
                    }
                },{
                    ImageUrl : "https://picsum.photos/538/354",
                    StudentInfo : {
                      ID: "05",
                      FirstName: "Nensi",
                      LastName: "Goswami",
                      DateOfBirth: "18/05/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "AIT"
                    }
                }]
        }
    }
    render() {
        return (
            <div>
                <StudentIdCard StudentObj={this.state.studentlist} />
            </div>
        )
    }
}
