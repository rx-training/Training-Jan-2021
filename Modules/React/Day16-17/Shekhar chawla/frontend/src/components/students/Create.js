import React, { useState } from 'react'
import StudentForm from '../../forms/StudentForm'
import StudentService from '../../services/StudentService'


export default function Create(props) {
  const apiname = useState(props.match.params.apiname)

  const createData = (data) => {
    StudentService.createOne(apiname[0], data).then( res => {
      if( res.error) {
        console.log(res.error)
      }
      console.log(res.msg)
    })
  }


  return (
    <div>
      <StudentForm createData={createData} />
    </div>
  )
}
