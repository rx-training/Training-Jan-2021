import React, { useEffect, useState } from 'react'
import StudentServices from '../services/StudentServices'


export const ListStudent = (props) => {
   const [studentList, setStudentList] = useState([])

   const handleInfo =(id) =>{
      props.history.push(`more-info/${id}`)
   }

   const handleDelete=(id)=>{
      if(window.confirm("Delete the item?")){
         StudentServices.deleteStudent(id).then(res=>{
            setStudentList(studentList.filter(data=> data._id !== id))
         })
      } 
   }

   useEffect(() => {
      StudentServices.getStudents().then(res=>{
         setStudentList([...res.data]);
      })
   },[])


   return (
      <div className="container">
            <div className="row">
               <table className="table table-striped table-border listTable border">
                  <thead>
                     <tr>
                        <th>Firstname</th>
                        <th>Middlename</th>
                        <th>Firstname</th>
                        <th>Date Of Birth</th>
                        <th>More Info</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     
                     {studentList.map((info) =>
                        <tr key={info._id}>
                           <td>{info.stdFirstName}</td>
                           <td>{info.stdMiddleName}</td>
                           <td>{info.stdLastName}</td>
                           <td>{info.stdDob}</td>
                           <td>
                              <button className="btn btn-primary" onClick={() => {handleInfo(info._id)}}>More info</button>
                           </td>
                           <td>
                              <button className="btn btn-danger" onClick={() => {handleDelete(info._id)}}>delete</button>
                           </td>

                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
   )
}
