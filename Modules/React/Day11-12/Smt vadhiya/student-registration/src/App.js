import './App.css';
import React, { Component } from 'react'
import Form from './components/Form';

export default class App extends Component {
  state = {
    stdFirstName: "",stdLastName: "",
    stdDob : "",stdMiddleName : "",
    stdEmail: "",stdState : "",
    stdDist : "",stdBirthPlace : "",
    stdAddress : "",age : 0,
    pinCode : "",
    
    fatherFirstName :"",
    fatherMiddleName :"",fatherLastName :"",
    fatherEmail :"",fatherPhone :"",
    fatherEducation :"",fatherDesignation :"",

    motherFirstName :"",
    motherMiddleName :"",motherLastName :"",
    motherEmail :"",motherPhone :"",
    motherEducation :"",motherDesignation :"",

    relFirstName :"", relLastName:"", relMiddleName:"",
    errors : {

    }
  }

  validate = {
    validAge : (e)=>{
      const date = new Date() - new Date(e.target.value) 
      var age_dt = new Date(date);  
      this.setState({
        age : Math.abs(age_dt.getUTCFullYear() - 1970)
      })
    }
  }



  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  } 

  render() {
    return (
    <div className="container">
      <div className="row">
        <Form data={this.state} valid = {this.validate} handleChange = {this.handleChange}/>
      </div>
    </div>
    )
  }
}
