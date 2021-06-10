import React, { useState } from 'react'
import CreateMakeForm from '../../../forms/CreateMakeForm'
import axios from 'axios'
import config from '../../../global.config'

export default function Create(props) {
  const [message, setMessage] = useState({ type: '', text: '' })

  const createData = (data) => {
    axios.post(`${config.api}/admin/make/create`, data).then(res => {
      if (res.data.error) {
        console.log(res.data.error)
        console.log(res)
        setMessage({type: 'failed', text: res.data.msg })
      }
      setMessage({type: 'success', text: res.data.msg })
    })
  }


  return (
    <div>
      { message.type &&
        <div className={message.type === 'success' ? 'alert alert-primary' : 'alert alert-danger'} role="alert">
          {message.text}
        </div>
      }
      <CreateMakeForm createData={createData} />
    </div>
  )
}
