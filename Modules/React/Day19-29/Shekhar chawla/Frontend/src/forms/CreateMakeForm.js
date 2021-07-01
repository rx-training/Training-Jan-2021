import { React, useState } from 'react'
import { Formik, Form as FormikForm, useField } from 'formik'
import { Link } from 'react-router-dom'

export default function StudentForm({ createData = null, myValues, updateData }) {
  const [uploadedMakeImage, setUploadedMakeImage] = useState(null)

  return (
    <div className="container">

      <div className="mb-2">
        <span className="h2">{createData ? 'Create Make' : 'Update Make'}</span>
        <span><Link to={`/admin/make`} className="btn btn-secondary mr-2 float-right">Back</Link></span>
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

                <MyTextInput name="makeName" label="Make Name" placeholder="make name" />

                <MyTextInput name="makeDesc" label="Description" placeholder="make description" />

                <MyTextInput name="makePriceStart" type="number" label="Make Prices starts" placeholder="eg. 233000" />

                <MyTextInput name="makePriceEnd" type="number" label="Make Price End" placeholder="eg. 200000" />

                {/* make image */}
                <div className="my-2">
                  <label for="makeImage">Upload Brand Image</label>
                  <input name="makeImage" type="file" class="form-control-file" id="makeImage" onChange={(event) => {
                    setFieldValue('makeImage', event.target.files[0])
                    var reader = new FileReader()
                    reader.readAsDataURL(event.target.files[0])
                    reader.onloadend = (e) => {
                      setUploadedMakeImage(reader.result)
                    }
                  }} />
                  <div>
                    {uploadedMakeImage && <img src={uploadedMakeImage} alt="" id={'myimae'} width="250" height="200"></img>}
                    {values.tempImg && <img src={values.tempImg} alt="" id={'myimage'} width="250" height="200"></img>}
                  </div>
                </div>

                <MyTextInput name="makeImageDesc" label="Make Image Description" placeholder="Make description" onChange={(e) => {
                    e.target.value = e.target.value.split(' ').join('-')
                    setFieldValue('makeImageDesc', e.target.value)
                }} />

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
  makeDesc: '',
  makePriceStart: '',
  makePriceEnd: '',
  makeImageDesc: '',
  makeImage: null
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

