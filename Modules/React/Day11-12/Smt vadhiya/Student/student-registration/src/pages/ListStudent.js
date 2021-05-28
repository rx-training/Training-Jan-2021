import React, { Component } from 'react'
import { StudentIDs } from '../components/studentId/studentID'
import StudentServices from '../services/StudentServices'


export default class ListStudent extends Component {
   state ={
      studentList : [] 
   }

   handleInfo =(id) =>{
      this.props.history.push(`more-info/${id}`)
   }
   handleDelete=(id)=>{
      if(window.confirm("Delete the item?")){
         StudentServices.deleteStudent(id).then(res=>{
            this.setState({studentList : this.state.studentList.filter(data=> data._id !== id)})
         })
      } 
   }

   componentDidMount(){
      StudentServices.getStudents().then(res=>{
         this.setState({studentList : res.data});
         
      })
   }
   render() {
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
                     
                     {this.state.studentList.map((info) =>
                        <tr key={info._id}>
                           <td>{info.stdFirstName}</td>
                           <td>{info.stdMiddleName}</td>
                           <td>{info.stdLastName}</td>
                           <td>{info.stdDob}</td>
                           <td>
                              <button className="btn btn-primary" onClick={() => {this.handleInfo(info._id)}}>More info</button>
                           </td>
                           <td>
                              <button className="btn btn-danger" onClick={() => {this.handleDelete(info._id)}}>delete</button>
                           </td>

                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

      )
   }
} 
