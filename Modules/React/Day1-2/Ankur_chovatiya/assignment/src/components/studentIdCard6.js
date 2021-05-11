import React, { Children } from 'react';



const StudentImage = ({studentImage}) => {
    return(
        <div>
            <img 
            width="150px"
            src={studentImage}></img>
        </div>
    )
}
// const collegeInfo = {
//     collegeName : "AIT",
//     collegeAddress : "Gota , ahmedabad"
// }
const College = ({collegeAddress , collegeName , collegeLogo}) =>{
    return(
        <div>
            <h3>College Name : {collegeName}</h3>
            <h4>College Address : {collegeAddress}</h4>
            <img src={collegeLogo}></img>
        </div>
    )
}

const PersonalInfo = () =>{
    return(
        <div>
            
        </div>
    )
}

const StudentIdCard = ({student : {Id , studentImage,firstName , lastName , dob,collegeName , collegeAddress , collegeLogo }, children}) =>{
    return(
        <div className="person">
            <StudentImage studentImage ={studentImage}></StudentImage>
            <h3>Student Id : {Id}</h3>
            <h4>FirstName : {firstName}</h4>
            <h4>LastName : {lastName}</h4>
            <h4>DOB : {dob}</h4>
            {children}
            <College collegeLogo={collegeLogo} collegeAddress={collegeAddress} collegeName={collegeName}></College>
            
        </div>
    )
}

export default StudentIdCard;