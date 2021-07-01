import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CarForm from '../../../forms/CreateCarForm'
import config from '../../../global.config'


export default function Update(props) {
  const carname = props.match.params.carname
  const [car, setCar] = useState()

  const updateData = (data) => {
    axios.put(`${config.api}/admin/cars/update/${carname}`, data).then(res => {
      console.log(res.msg)
    })
    props.history.push('/admin/cars')
  }

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  useEffect(() => {
    axios.get(`${config.api}/admin/cars/${carname}`).then(res => {
      const car = res.data
      var base64Flag = `data:${car.carImageContentType};base64,`
      var imageStr = arrayBufferToBase64(car.carImage.data)
      var img = base64Flag + imageStr
      const carWithImage = { tempImg: img, ...res.data}
      setCar(carWithImage)
    })
  }, [])

  return (
    <div>
      { car && <CarForm myValues={car} updateData={updateData} />}
    </div>
  )
}
