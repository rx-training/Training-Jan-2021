import React, { Component } from 'react'
import StudentIdCard from './StudentIdCard'

export default class StudentList extends Component {
    constructor(){
        super();
        this.state={
            studentlist:[{
                    ImageUrl : "https://randomuser.me/api/portraits/men/23.jpg",
                    StudentInfo : {
                      ID: "01",
                      FirstName: "Chirag",
                      LastName: "Fabiyani",
                      DateOfBirth: "11/02/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "https://uploads.sarvgyan.com/2014/05/Ahmedabad-Institute-of-Technology-Ahmedabad.jpg"
                    }
                },{
                    ImageUrl : "https://randomuser.me/api/portraits/men/22.jpg",
                    StudentInfo : {
                      ID: "02",
                      FirstName: "Vinod",
                      LastName: "Meghani",
                      DateOfBirth: "03/04/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "https://uploads.sarvgyan.com/2014/05/Ahmedabad-Institute-of-Technology-Ahmedabad.jpg"
                    }
                },{
                    ImageUrl : "https://randomuser.me/api/portraits/men/21.jpg",
                    StudentInfo : {
                      ID: "03",
                      FirstName: "Kirtan",
                      LastName: "Patadia",
                      DateOfBirth: "25/10/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "https://uploads.sarvgyan.com/2014/05/Ahmedabad-Institute-of-Technology-Ahmedabad.jpg"
                    }
                },{
                    ImageUrl : "https://randomuser.me/api/portraits/men/39.jpg",
                    StudentInfo : {
                      ID: "04",
                      FirstName: "Yash",
                      LastName: "Patel",
                      DateOfBirth: "04/01/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "https://uploads.sarvgyan.com/2014/05/Ahmedabad-Institute-of-Technology-Ahmedabad.jpg"
                    }
                },{
                    ImageUrl : "https://randomuser.me/api/portraits/women/17.jpg",
                    StudentInfo : {
                      ID: "05",
                      FirstName: "Nensi",
                      LastName: "Goswami",
                      DateOfBirth: "18/05/2000"
                    },
                    CollegeInfo: {
                      CollegeName: "Ahmedabad Institute of Technology",
                      CollegeAddress: "S.G Highway Gota",
                      CollegeLogo: "https://uploads.sarvgyan.com/2014/05/Ahmedabad-Institute-of-Technology-Ahmedabad.jpg"
                    }
                }]
        }
    }

    handleDelete=(id)=>{
      const remains = this.state.studentlist.filter((item)=>item.StudentInfo.ID!==id);
      this.setState({
        studentlist:remains
      });
    }


    render() {
        return (
            <div >
                <StudentIdCard StudentObj={this.state.studentlist} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
