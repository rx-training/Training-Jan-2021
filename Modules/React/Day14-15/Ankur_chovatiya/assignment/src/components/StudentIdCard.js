import React from 'react'
import Student from './Student'

export default function StudentIdCard(props) {
    const {StudentObj,handleDelete} = props;
    return (
        <div className="container row mx-auto">
                {StudentObj.map(student=>(
                    <Student key={student.StudentInfo.ID} student={student} handleDelete={handleDelete} />
                ))}
            </div>
    )
}
