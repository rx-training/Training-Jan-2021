import { React, useState } from 'react'
import { Formik, Form, useField, FieldArray } from 'formik'
import { Button, TextField, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl, FormHelperText, Typography, Grid, CssBaseline, Paper, FormLabel, RadioGroup } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import countriesData from './data/countries'

import StudentValidation from './validations/StudentValidation'

const countries = Array.from(countriesData, ({ country }) => country)
const getStates = (ofCountry) => {
  const obj = countriesData.find(c => c.country === ofCountry)
  return obj.states
}


export default function StudentForm({ createData = null, myValues, updateData }) {
  const classes = useStyles();                // at below 👇
  const [uploadedImg, setUploadedImg] = useState(null)


  return (
    <div>
      <CssBaseline />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <main className={classes.layout} >
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" style={{ marginBottom: "20px" }}>
              Admission Form
          </Typography>


            <Formik
              initialValues={myValues ? myValues : initValues}          // at below 👇
              validationSchema={StudentValidation}
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
                ({ values, errors, touched, isValid, handleReset, setFieldValue, handleChange, handleBlur, dirty }) => (
                  <div>
                    <Typography variant="h6" gutterBottom>
                      Personal Details
                    </Typography>
                    <Form autoComplete="off" id="myForm">

                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput id="firstName" name="firstName" label="First Name *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput id="middleName" name="middleName" label="Middle Name" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput id="lastName" name="lastName" label="Last Name *" />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth id="placeOfBirth" name="placeOfBirth" label="Place of Birth" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth id="firstLanguage" name="firstLanguage" label="First Language" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8}>
                          <MyTextInput fullWidth id="email" name="email" label="Email" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                          <KeyboardDatePicker
                            fullWidth
                            name="dob"
                            autoOk
                            variant="inline"
                            label="Date of Birth *"
                            format="MM/dd/yyyy"
                            initialFocusedDate={new Date()}
                            helperText={touched.dob && errors.dob ? errors.dob : null}
                            error={touched.dob && errors.dob ? true : false}
                            value={values.dob}
                            onChange={(date, value) => setFieldValue("dob", value)}
                            onBlur={e => handleBlur(e)}
                            KeyboardButtonProps={{ "aria-label": "change date" }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend" error={errors.gender ? true : false}>Gender</FormLabel>
                            <RadioGroup row>
                              <MyRadio name="gender" type="radio" value="female" label="Female" />
                              <MyRadio name="gender" type="radio" value="male" label="Male" />
                              <MyRadio name="gender" type="radio" value="other" label="Other" />
                            </RadioGroup>
                            <FormHelperText error={errors.gender ? true : false}>{errors.gender ? errors.gender : null}</FormHelperText>
                          </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={6} md={12}>
                          <Typography component="h6">Address</Typography>
                          <FormControl style={{ minWidth: '50%' }}>
                            <MySelect name="address.country" label="Country *" className={classes.formControl} options={countries} />
                          </FormControl>
                          <FormControl style={{ minWidth: '50%' }}>
                            <MySelect name="address.state" label="State *" className={classes.formControl} options={values.address.country && getStates(values.address.country)} />
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="address.city" label="City *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="address.pin" label="Pin Code *" />
                        </Grid>






                        <Grid item xs={12} sm={6} md={12}>
                          <Typography component="h6" variant="h6">Father Details</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="father.firstName" label="First Name *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="father.middleName" label="Middle Name" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="father.lastName" label="Last Name *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="father.email" label="Email" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="father.education" label="Education" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="father.profession" label="Profession" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="father.designation" label="Designation" />
                        </Grid>








                        <Grid item xs={12} sm={6} md={12}>
                          <Typography component="h6" variant="h6">Mother Details</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="mother.firstName" label="First Name *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="mother.middleName" label="Middle Name" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <MyTextInput fullWidth name="mother.lastName" label="Last Name *" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="mother.email" label="Email" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="mother.education" label="Education" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="mother.profession" label="Profession" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <MyTextInput fullWidth name="mother.designation" label="Designation" />
                        </Grid>



                        <Grid item xs={12} sm={6} md={12}>
                          <Typography component="h6" variant="h6">References Details</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                          <FieldArray name="reference">
                            {arrayHelpers => (
                              <div>

                                { values.reference.map((ref, index) => {
                                  const name = `reference.${index}.name`
                                  const address = `reference.${index}.address`
                                  const country = values.reference[index].address.country
                                  return (
                                    <Grid container spacing={3} key={index}>
                                      <Grid item xs={12} sm={6} md={6}>
                                        <MyTextInput fullWidth name={name} label="Name" />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={6}>
                                        <MyTextInput fullWidth name={address + '.telNo'} label="Phone Number" />
                                      </Grid>

                                      <Grid item xs={12} sm={6} md={6}>
                                        <MyTextInput fullWidth name={address + '.pin'} label="Pin Code" />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={6}>
                                        <MyTextInput fullWidth name={address + '.city'} label="City" />
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={12}>
                                        <FormControl style={{ minWidth: "50%" }}>
                                          <MySelect name={address + '.country'} label="Country" className={classes.formControl} options={countries} />
                                        </FormControl>
                                        <FormControl style={{ minWidth: "50%" }}>
                                          <MySelect name={address + '.state'} label="State" className={classes.formControl} options={country && getStates(country)} />
                                        </FormControl>
                                      </Grid>
                                      <Grid item xs={12} sm={6} md={12}>
                                        <Button fullWidth variant="outlined" color="secondary" style={{ marginBottom: "10px" }} onClick={() => arrayHelpers.remove(index)}>X</Button>
                                      </Grid>

                                    </Grid>
                                  );
                                })}
                                <Grid item xs={12} sm={6} md={12}>
                                  <Button fullWidth variant="outlined" color="primary" onClick={() => arrayHelpers.push({
                                    name: '',
                                    address: {
                                      country: '',
                                      state: '',
                                      city: '',
                                      pin: ''
                                    },
                                    telNo: '',
                                    id: '' + Math.random()
                                  })}>Add</Button>
                                </Grid>

                              </div>
                            )}
                          </FieldArray>
                        </Grid>

                        <div>
                          <p>Upload photo</p>
                          <input name="photo1" type="file" onChange={(event) => {
                            setFieldValue('photo1', event.target.files[0])
                            var reader = new FileReader()
                            reader.readAsDataURL(event.target.files[0])
                            reader.onloadend = (e) => {
                              setUploadedImg(reader.result)
                            }
                          }} />
                          <div>
                            {uploadedImg && <img src={uploadedImg} alt="" id={'myimage'} width="250" height="200"></img>}
                          </div>
                        </div>

                        <Grid item md={12}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                          >Submit</Button>
                        </Grid>

                      </Grid>
                    </Form>

                  </div>
                )
              }
            </Formik>
          </Paper>
        </main>
      </MuiPickersUtilsProvider>


    </div >

  )
}


const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl>
      <TextField label={label} className="text-input" {...field} {...props}
        error={meta.error && meta.touched ? true : false}
      />
      <FormHelperText error={meta.error && meta.touched ? true : false}>
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </FormControl>
  );
};



const MySelect = ({ label, options, className, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <FormControl className={className} error={meta.touched && meta.error ? true : false}>
      <InputLabel >{label}</InputLabel>
      <Select label={label} {...field} {...props}
      >
        {options && options.map((op, index) => {
          return (
            <MenuItem value={op} key={index}>{op}</MenuItem>
          )
        })
        }
      </Select>
      <FormHelperText>{meta.touched && meta.error ? meta.error : null}</FormHelperText>
    </FormControl>
  )
}


const MyRadio = ({ label, ...props }) => {
  const field = props
  return (
    <FormControlLabel {...field} {...props} control={<Radio />} label={label} />
  )
}


const initValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  dob: null,
  email: '',
  placeOfBirth: '',
  firstLanguage: '',
  gender: '',
  country: '',
  state: '',
  address: {
    country: '',
    state: '',
    city: '',
    pin: ''
  },
  father: {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    education: '',
    profession: '',
    designation: ''
  },
  mother: {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    education: '',
    profession: '',
    designation: ''
  },
  reference: [{
    name: '',
    address: {
      country: '',
      state: '',
      city: '',
      pin: ''
    },
    telNo: '',
    id: "" + Math.random()
  }],
  photo1: ''
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

