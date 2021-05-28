import React from 'react'
import collegelogo from '../img/download.jpg'


const PersonalInfo = ()=> {
    return(
        <div>
            <h1>StudentId : 170070</h1>
            <h4>Student FirstName : Rohan</h4>
            <h4>Student LastName : Patel</h4>
            <h5>Student DOB : 24/10/1999</h5>
        </div>
    )
}

const College = ()=>{
    return(
        <div>
            <h4>CollegeName : AIT</h4>
            <h5>CollegeAddress : Gota , Ahmedabad</h5>
            <img src={collegelogo}></img>
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

const StudentIdCard1 = () =>{
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

export default StudentIdCard1;