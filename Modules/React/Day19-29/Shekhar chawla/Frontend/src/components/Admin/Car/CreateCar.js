import React, { useState } from 'react'
import CreateCarForm from '../../../forms/CreateCarForm'
import axios from 'axios'
import config from '../../../global.config'

export default function Create(props) {

  const createData = (data) => {
    axios.post(`${config.api}/admin/cars/create`, data).then( res => {
      if( res.error) {
        console.log(res.error)
      }
      console.log(res.msg)
    })
  }


  return (
    <div>
      <CreateCarForm createData={createData} />
    </div>
  )
}
