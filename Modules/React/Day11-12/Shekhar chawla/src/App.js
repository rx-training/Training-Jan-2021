import './App.css'
import { Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import FormVanilla from './components/practice/mediumBlog/FormVanilla'
import FormFormik from './components/practice/mediumBlog/FormFormik'


const nameValidation = (name, value) => {
  if(value.trim() === '' ){
    return `${name} is required`
  }
  if( /[^a-zA-Z -]/.test(value) ){
    return 'Invalid characters'
  }
  if( value.trim().length < 3 ){
    return `${name} must be at least 3 characters long`
  }
}

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const ageValidation = age => {
  if( !age ){
    return `Age is required`
  }
  if( age<18 ){
    return `Age must be at least 18`
  }
  if( age<99 ){
    return `Age must be under 99`
  }
  return null
}

const validate = {
  firstName: fname => nameValidation('First Name', fname),
  lastName: lname => nameValidation('Last Name', lname),
  email: emailValiation,
  age: ageValidation
}

const initValues = {
  age: 10, email: `no@email`, firstName: 'Mary', lastName: 'Jane'
}




function App() {

  return (
    <div className="App">
      <h1>Forms</h1>
      <ul>
        <li>
          <Link to="/form-vanilla">Form with manual validation</Link>
        </li>
        <li>
          <Link to="/form-formik">Form with Formik validation</Link>
        </li>
      </ul>

      <Route 
        path="/form-vanilla" 
        render={ 
          () => 
          <FormVanilla validate={validate} initValues={initValues} />
        }
      />
      

      <Route 
        path="/form-formik" 
        render={ 
          () => 
          <FormFormik validate={validate} initValues={initValues} />
        }
      />

    </div>
  );
}

export default App;
