import { React, useState, useEffect } from 'react'
import { Formik, Form as FormikForm, useField, FieldArray } from 'formik'
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../global.config'


import indiaData from './data/india.json'

const states = Array.from(indiaData.states, ({ name }) => name)
const getCities = (state) => {
  if (state === '') {
    return ['Select City']
  }
  const obj = indiaData.states.find(c => c.name === state)
  const cities = Array.from(obj.districts, ({ name }) => name)
  return cities
}


export default function CarForm({ createData = null, myValues, updateData }) {
  const [uploadedCarImage, setUploadedCarImage] = useState(null)
  const [makes, setMakes] = useState(null)

  useEffect(() => {
    axios.get(`${config.api}/admin/make`).then(res => {
      setMakes(Array.from(res.data, ({ makeName }) => makeName))
    })
  }, [])

  return (
    <div className="container">

      <div className="mb-2">
        <span className="h2">{createData ? 'Create Car' : 'Update Car'}</span>
        <span><Link to={`/admin/cars`} className="btn btn-secondary mr-2 float-right">Back</Link></span>
        <span><Link to={`/admin`} className="btn btn-secondary mr-2 float-right">Admin</Link></span>
      </div>
      <Formik
        initialValues={myValues ? myValues : initValues}          // at below 👇
        onSubmit={(data, { setSubmitting }) => {
          let myForm = document.getElementById('myForm');
          let formData = new FormData(myForm);
          setSubmitting(true)
          // make async call
          if (!createData) {
            updateData(formData)
          } else {
            createData(formData)
          }
          setSubmitting(false)
        }}>

        {
          ({ values, errors, touched, isValid, handleReset, setFieldValue, handleChange, handleBlur, dirty, isSubmitting }) => (
            <div className="form-group">
              <FormikForm autoComplete="off" id="myForm">

                <MySelect name="makeName" options={makes} label="Make Name" placeholder="make name" />

                <MyTextInput name="modelName" label="Model Name" placeholder="Model name" />

                <MyTextInput name="versionName" label="Version" placeholder="version" />


                <MyCheckBox name="fuelType" options={['Petrol', 'Diesel', 'Cng', 'Electric']} label="Fuel Type" />

                <MyCheckBox name="transmissionType" options={['Automatic', 'Manual']} label="Transmission Type" />

                <MySelect name="stateName" options={states} label='State' />

                <MySelect name="cityName" placeholder="Select City"
                  options={getCities(values.stateName)}
                />

                <MyTextInput name="price" label="Price" type="number" placeholder="price" />

                {/* nearbyCities */}
                <FieldArray name="nearbyCities">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.nearbyCities.length > 0 &&
                        values.nearbyCities.map((friend, index) => (
                          <div className="row " key={index}>
                            <div className="col col-4">
                              <label htmlFor={`nearbyCities.${index}.nearbyCityName`}>District</label>
                              <MySelect
                                name={`nearbyCities.${index}.nearbyCityName`}
                                placeholder="Select District"
                                options={getCities(values.stateName)}
                              />
                            </div>
                            <div className="col col-4">
                              <MyTextInput name={`nearbyCities.${index}.price`} label="Price" type="number" placeholder="price" />
                            </div>
                            <div className="col col-1 my-auto">
                              <button
                                type="button"
                                className="btn btn-secondary "
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => push({ nearbyCityName: '', price: '' })}
                      >
                        Add
                </button>
                    </div>
                  )}
                </FieldArray>


                {/* car image */}
                <div className="my-2">
                  <label for="imageUpload">Upload Car Image</label>
                  <input name="carImage" type="file" class="form-control-file" id="imageUpload" onChange={(event) => {
                    setFieldValue('carImage', event.target.files[0])
                    var reader = new FileReader()
                    reader.readAsDataURL(event.target.files[0])
                    reader.onloadend = (e) => {
                      setUploadedCarImage(reader.result)
                    }
                  }} />
                  <div>
                    {uploadedCarImage && <img src={uploadedCarImage} alt="" id={'myimage'} width="250" height="200"></img>}
                    {values.tempImg && <img src={values.tempImg} alt="" id={'myimage'} width="250" height="200"></img>}
                  </div>
                </div>

                <MySelect name="carImageType" label="Type of Image" placeholder="eg. external internal color" options={['External', 'Internal', 'Color']} />

                <MyTextInput name="carImageDesc" label="Car Image Description" placeholder="car description" />

                <MySelect name="carPower" label="Power of Car" options={['Popular', 'Featured', 'Upcoming', 'None']} />



                <button type="submit" className="btn btn-primary" disabled={isSubmitting ? true : false}>Submit</button>

              </FormikForm>
              <div>
                <pre>
                  {JSON.stringify({ values }, null, 2)}
                </pre>
              </div>
            </div>
          )
        }
      </Formik>
    </div >

  )
}



const initValues = {
  makeName: '',
  modelName: '',
  versionName: '',
  fuelType: [],
  transmissionType: '',
  stateName: '',
  cityName: '',
  price: '',
  nearbyCities: [{
    nearbyCityName: '',
    price: ''
  }],
  carImage: null,
  carImageDesc: '',
  carImageType: '',
  carPower: ''
}




const MyTextInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div class="form-group">
      <label for={label}>{label}</label>
      <input type={type ? type : 'text'} class="form-control" id={label} {...field} {...props}></input>
    </div>
  );
};



const MySelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label>{label}</label>
      <select class="custom-select" {...field} {...props}>
        {options && ['Select your choice', ...options].map((op, index) => {
          return (
            <option selected={index === 0 ? true : false} value={index === 0 ? '' : op}>
              {op}
            </option>
          )
        })}
      </select>
    </div>
  )
}

const MyCheckBox = ({ options, label, ...props }) => {
  const [field, meta] = useField(props);
  const searchInValues = (myvalue) => {
    if (Array.isArray(meta.value)) {
      return meta.value.find(i => i == myvalue)
    }
    return meta.value === myvalue
  }

  return (
    <div className="">
      <label className="mr-4">{label}</label>
      {
        options.map((myvalue, index) => (
          <div class="form-check form-check-inline" key={index}>
            <input {...field} {...props} class="form-check-input" type="checkbox" value={myvalue} checked={searchInValues(myvalue)}></input>
            <label class="form-check-label">{myvalue}</label>
          </div>
        ))
      }
    </div>
  )
}
