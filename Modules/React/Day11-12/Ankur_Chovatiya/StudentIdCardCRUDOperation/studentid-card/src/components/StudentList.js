import React, { Component } from 'react'
import StudentListItem from './StudentListItem'
import StudentService from '../services/StudentService'

export default class StudentList extends Component {
    
    state  = {
        studentlist : []
    }
    
    componentDidMount() {
        StudentService.getStudent().then((res)=>{
            this.setState({
                studentlist : res.data
            })
        })
    }
    addStudent = () =>{
        this.props.history.push('add-student/add');
    }

    handleDetails = (id) =>{
        this.props.history.push(`/show-details/${id}`);
    }
    handleDelete = (id) =>{
        StudentService.deleteStudent(id).then((res) =>{
            this.setState({
                studentlist : this.state.studentlist.filter(stu => stu.studentId !== id)
            })
        })
    }
    handleEdit = (id) =>{
        
            this.props.history.push(`add-student/${id}`);
    }

    render() {
        const { studentlist } = this.state
        // const { handleDelete , handleEdit} = this.props
        
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
                                        studentlist.map((stu , index) =>{
                                            return (
                                                <tr className="text-center">
                                        <td>{index }</td>
                                        <td>{stu.firstName}</td>
                                        <td>{stu.lastName}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2" onClick={() => {this.handleEdit(stu.studentId)}} >Edit</button>
                                            <button className="btn btn-danger mx-2" onClick={() => {this.handleDelete(stu.studentId)}} >Delete</button>
                                            <button className="btn btn-warning mx-2" onClick={() => {this.handleDetails(stu.studentId)}}>Details </button>
                                        </td>
                                    </tr>
                                    
                                            )
                                        })
                                    }
                                    </tbody>
                                    </table>
          
                          <button className="btn btn-primary btn-block" onClick={() => {this.addStudent()}}>Add Student</button>              
                
                </div>
        )
    }
}
