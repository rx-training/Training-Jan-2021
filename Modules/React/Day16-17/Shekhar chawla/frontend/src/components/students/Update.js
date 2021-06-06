import React, { useState, useEffect } from 'react'
import StudentService from '../../services/StudentService'
import StudentForm from '../../forms/StudentForm'

export default function Update(props) {
  const apiname = useState(props.match.params.apiname)
  const id = useState(props.match.params.id)
  const [student, setStudent] = useState()

  const updateData = (data, thisId=id[0]) => {
    StudentService.updateOne(apiname[0], thisId, data ).then( res => {
      console.log(res.msg)
    })
    props.history.push('/students')
  }  

  useEffect(() => {
    StudentService.getOne(apiname[0], id[0]).then(res => {
      setStudent(res.data)
    })
  }, [])

  return (
    <div>
      { student && <StudentForm myValues={student} updateData={updateData} /> }
    </div>
  )
}
