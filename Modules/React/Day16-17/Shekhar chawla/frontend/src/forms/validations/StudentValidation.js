import * as Yup from 'yup'


var convertDateFormat = (date = new Date()) => {
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var dd = String(date.getDate()).padStart(2, '0')
  var yyyy = date.getFullYear()
  date = dd + '/' + mm + '/' + yyyy
  return date
}

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .matches(/^[a-z]+$/ , 'Name cannot contain number')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[a-z]+$/ , 'Name cannot contain number')
    .required('Required'),
  middleName: Yup.string()
  .matches(/^[a-z]+$/ , 'Name cannot contain number'),
  dob: Yup.date()
    .nullable()
    .typeError('Invalid Date..')
    .required("Required")
    .min("2000/01/01", 'Date must be after 2000')
    .max(new Date(), 'Are you from future')
    .test('not-today', 'Dob must not be today', value => {
      return value && convertDateFormat(value) !== convertDateFormat()
    }),
  gender: Yup.string(),
    // .required('Required'),
  placeOfBirth: Yup.string(),
  firstLanguage: Yup.string(),
  email: Yup.string()
    .email('Invalid Email'),
  address: Yup.object({
    country: Yup.string()
      .required('Required'),
    state: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Required'),
    pin: Yup.number()
      .typeError('Pincode must be number')
      .required('Required')
      .positive('Number must be postitive')
      .test('check length', 'Must be of exactly 6 numbers', val => (val + '').length === 6)
  }),
  father: Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-z]+$/ , 'Name cannot contain number')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-z]+$/ , 'Name cannot contain number')
      .required('Required'),
    middleName: Yup.string()
    .matches(/^[a-z]+$/ , 'Name cannot contain number'),
    email: Yup.string()
      .email('Invalid Email'),
    education: Yup.string(),
    profession: Yup.string(),
    designation: Yup.string()
  }),
  mother: Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-z]+$/ , 'Name cannot contain number')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-z]+$/ , 'Name cannot contain number')
      .required('Required'),
    middleName: Yup.string()
      .matches(/^[a-z]+$/ , 'Name cannot contain number'),
    email: Yup.string()
      .email('Invalid Email'),
    education: Yup.string(),
    profession: Yup.string(),
    designation: Yup.string()
  }),
  // emergency: obj
  // reference: [objs]
  

})

export default formSchema