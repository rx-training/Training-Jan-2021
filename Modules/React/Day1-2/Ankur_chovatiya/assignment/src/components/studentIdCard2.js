import React from 'react'
import collegelogo from '../img/download.jpg'


const personalInfo = {
    StudentId : 170070,
    StudentFirstName : "Rohan",
    StudentLastName : "Patel",
    StudentDOB : "24/10/1999"


}

const PersonalInfo = ()=> {
    return(
        <div>
            <h3>StudentId : {personalInfo.StudentId}</h3>
            <h4> Student Name : {personalInfo.StudentFirstName + " " + personalInfo.StudentLastName}</h4>
            <h5> Student DOB : {personalInfo.StudentDOB}</h5>
        </div>
    )
}
const collegeInfo = {
    CollegeName : "AIT",
    CollegeAddress : "Gota , Ahmedabad",
    Collegelogo : collegelogo
}

const College = ()=>{
    return(
        <div>
            <h4>College Name : {collegeInfo.CollegeName}</h4>
            <h5>College Address  : {collegeInfo.CollegeAddress}</h5>
            <img src={collegeInfo.Collegelogo}></img>
        </div>
    )
}

const Img = () =>{
    return(
        <div>
            <img src="https://randomuser.me/api/portraits/med/men/75.jpg"></img>
        </div>
    )
}

const StudentIdCard2 = () =>{
    return(
        <div>
        <div className=" row d-flex justify-content-center mx-5">
           
            <div className="card col-md-3 col-lg-2 m-4" style={{width: "18rem" , backgroundColor:"lightsalmon"}}>
            
                <div className="card-body">
                
                    <Img className="card-text"></Img>
                    <PersonalInfo className="card-text"></PersonalInfo>
                    <College className="card-text"></College>
        
                {/* <img src={stu.img} alt="student photo" />
                <h5 className="card-title">Name : {stu.name}</h5>
                <h6 className="card-text">Roll No :{stu.rollno}</h6>
                <h6 className="card-text">Class : {stu.class}</h6>
                <h6 className="card-text">Marks : {stu.marks}</h6>
                <h6 className="card-text">Address : {stu.address}</h6> */}
                   </div>
            </div>
          

        </div>
        
        </div>
    )
}

export default StudentIdCard2;