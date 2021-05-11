import React from 'react'
import collegelogo from '../img/download.jpg'


const PersonalInfo = (props)=> {
    return(
        <div>
            <h1>StudentId : {props.id}</h1>
            <h4>Student Name : {props.name}</h4>
            <h5>Student DOB : {props.dob}</h5>
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

const StudentIdCard3 = (props) =>{
    return(
        <div>
        <div className=" row d-flex justify-content-center mx-5">
           
            <div className="card col-md-3 col-lg-2 m-4" style={{width: "18rem" , backgroundColor:"lightsalmon"}}>
            
                <div className="card-body">
                
                    <Img className="card-text"></Img>
                    <PersonalInfo className="card-text" name={props.name} id={props.id} dob={props.dob}></PersonalInfo>
                    <College className="card-text"></College>
        
                   </div>
            </div>
          

        </div>
        
        </div>
    )
}

export default StudentIdCard3;