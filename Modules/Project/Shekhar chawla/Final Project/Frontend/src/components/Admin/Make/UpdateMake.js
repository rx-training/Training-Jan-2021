import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MakeForm from '../../../forms/CreateMakeForm'
import config from '../../../global.config'


export default function Update(props) {
  const makename = props.match.params.makename
  const [make, setMake] = useState()

  const updateData = (data) => {
    axios.put(`${config.api}/admin/make/update/${makename}`, data).then(res => {
      console.log(res.msg)
    })  
  }

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect(() => {
    axios.get(`${config.api}/admin/make/${makename}`).then(res => {
      const make = res.data
      var base64Flag = `data:${make.makeImageContentType};base64,`
      var imageStr = arrayBufferToBase64(make.makeImage.data)
      var img = base64Flag + imageStr
      const makeWithImage = { tempImg: img, ...res.data}
      setMake(makeWithImage)
    })
  }, [])

  return (
    <div>
      { make && <MakeForm myValues={make} updateData={updateData} />}
    </div>
  )
}
