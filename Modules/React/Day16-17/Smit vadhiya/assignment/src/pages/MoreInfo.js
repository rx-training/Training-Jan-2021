import React, { useEffect, useState } from 'react'
import StudentServices from '../services/StudentServices'
import '../App.css'


export const MoreInfo = (props) => {
   const [info, setInfo] = useState("")

   const handleDelete=(id)=>{
      if(window.confirm("Delete the item?")){
         StudentServices.deleteStudent(id).then(res=>{
            props.history.push('/')
         })
      } 
   }

   const handleupdate =(id)=>{
      props.history.push(`../update-student/${id}`)
   }

   useEffect(() => {
      const id = props.match.params.id
      StudentServices.getStudentById(id).then(res => {
         setInfo(res.data)
      })
   })

   return (
      <div className="row">
            <div className="col-12 p-0 card ">
               <div className="card-header bg-success" >
                  <h1 className="text-center text-white">Student Details</h1>
               </div>
               <div className="card-body row justify-content-center info">
                  <div className="col-12 col-md-4 text-center  d-flex align-item-center ">
                     <img src={info.stdImg} alt="student " width="200px" className="img-fluid m-auto" />
                  </div>
                  <div className="col-12 col-md-8 justify-content-center "> 
                     <table className="table table-border">
                        <tbody >
                           <tr >
                              <th>Full name</th>
                              <td>{info.stdFirstName+" "+ info.stdMiddleName +" "+ info.stdLastName}</td>
                           </tr>
                           <tr>
                              <th>birth date</th>
                              <td>{info.stdDob}</td>
                           </tr>
                           <tr>
                              <th>Address </th>
                              <td>{info.stdAddress}<br/>{info.stdState+","+info.stdDist}<br/>{"Pincode :" + info.pinCode}</td>
                           </tr>
                           <tr>
                              <th>First Language </th>
                              <td>{info.stdLanguage}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  
                  <div className="row">
                     <div className="col-12 col-md-6 my-2">
                        <h3 className="text-center">Father's details</h3>
                        <table className="table table-border">
                           <tbody >
                              <tr >
                                 <th>Full name</th>
                                 <td>{info.fatherFirstName+" "+ info.fatherMiddleName +" "+ info.fatherLastName}</td>
                              </tr>
                              <tr>
                                 <th>Email Id</th>
                                 <td className="text-lowercase">{info.fatherEmail}</td>
                              </tr>
                              <tr>
                                 <th>Phone no.</th>
                                 <td>{info.fatherPhone}</td>
                              </tr>
                              <tr>
                                 <th>Education Qualification </th>
                                 <td>{info.fatherEducation}</td>
                              </tr>
                              <tr>
                                 <th>Designation </th>
                                 <td>{info.fatherDesignation}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <div className="col-12 col-md-6 my-2">
                        <h3 className="text-center">Mother's details</h3>
                        <table className="table  table-border">
                           <tbody >
                              <tr >
                                 <th>Full name</th>
                                 <td>{info.motherFirstName+" "+ info.motherMiddleName +" "+ info.motherLastName}</td>
                              </tr>
                              <tr>
                                 <th >Email Id</th>
                                 <td className="text-lowercase">{info.motherEmail}</td>
                              </tr>
                              <tr>
                                 <th>Phone no.</th>
                                 <td>{info.motherPhone}</td>
                              </tr>
                              <tr>
                                 <th>Education Qualification </th>
                                 <td>{info.motherEducation}</td>
                              </tr>
                              <tr>
                                 <th>Designation </th>
                                 <td>{info.motherDesignation}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>


                     <div className="col-12 col-md-6 my-2">
                        <h3 className="text-center">Emergency Contact Details</h3>
                        <table className="table  table-border">
                           <tbody >
                              <tr >
                                 <th>Full name</th>
                                 <td>{info.relFirstName+" "+ info.relMiddleName +" "+ info.relLastName}</td>
                              </tr>
                              <tr>
                                 <th>Relation</th>
                                 <td>{info.relation}</td>
                              </tr>
                              <tr>
                                 <th>Phone no.</th>
                                 <td>{info.relPhone}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                  <div className="col-12 col-md-6 my-2">
                        <h3 className="text-center">Reference Details</h3>
                        <table className="table  table-border">
                           <tbody >
                              <tr >
                                 <th>Full name</th>
                                 <td>{info.refFirstName+" "+ info.refLastName}</td>
                              </tr>
                              <tr>
                                 <th>Address</th>
                                 <td>{info.refAddress}</td>
                              </tr>
                              <tr>
                                 <th>Phone no.</th>
                                 <td>{info.refPhone}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>


                  <div className="m-auto text-center">
                     <button className="btn btn-danger m-2" onClick={() => {handleDelete(info._id)}}>Delete</button>
                     <button className="btn btn-info m-2" onClick={() => {handleupdate(info._id)}}>Update</button>
                  </div>

               </div>
            </div>
         </div>
      
   )
}
