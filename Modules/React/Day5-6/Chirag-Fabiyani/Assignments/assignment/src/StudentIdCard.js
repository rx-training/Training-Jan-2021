import React, { Component } from 'react'
import Student from './Student'

export default class StudentIdCard extends Component {
    
    render() {
        const {handleDelete} = this.props;
        return (
            <div className="container row mx-auto">
                {this.props.StudentObj.map(student=>(
                    <Student student={student} handleDelete={handleDelete} />
                ))}
            </div>
        )
    }
}
