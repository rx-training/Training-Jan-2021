import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService'



function StudentList(props) {

    const [studentsList ,setStudentList ] = useState([])

    useEffect(() =>{
        StudentService.getStudent().then((res)=>{
            setStudentList(res.data)
    })
    })

    const handleEdit = (id) =>{
        props.history.push(`add-student/${id}`);
    }

    const handleDelete = (id) =>{
        StudentService.deleteStudent(id).then((res) =>{
            setStudentList(
                studentsList.filter(stu => stu.studentId !== id)
            )
        })
    }

    const handleDetails = (id) =>{
       props.history.push(`/show-details/${id}`);

    }
    const addStudent = () =>{
        props.history.push('/add-student/add')
    }

    return (
        <div className="m-5" >
            <table className="table table-striped" style={{width : "850px"}}>
                                <thead className="thead-dark">
                                <tr className="text-center">
                                    <th >Rooll No</th>
                                    <th>Last Name</th>
                                    <th >Name</th>
                                    <th >Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentsList.map((stu , index) =>{
                                            return (
                                                <tr className="text-center">
                                        <td>{index }</td>
                                        <td>{stu.firstName}</td>
                                        <td>{stu.lastName}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2" onClick={() => {handleEdit(stu.studentId)}} >Edit</button>
                                            <button className="btn btn-danger mx-2" onClick={() => {handleDelete(stu.studentId)}} >Delete</button>
                                            <button className="btn btn-warning mx-2" onClick={() => {handleDetails(stu.studentId)}}>Details </button>
                                        </td>
                                    </tr>
                                    
                                            )
                                        })
                                    }
                                    </tbody>
                                    </table>
          
                          <button className="btn btn-primary btn-block" onClick={() => {addStudent()}}>Add Student</button>              
                
                </div>
    )
}

export default StudentList
