import './App.css';
import React, { Component } from 'react'
import Form from './components/Form';

export default class App extends Component {
  state = {
    students : [],

    stdFirstName: "",stdLastName: "",
    stdDob : "",stdMiddleName : "",
    stdState : "",pinCode : "",
    stdDist : "",
    stdLanguage : "",
    stdAddress : "",age : 0,
    
    
    fatherFirstName :"",
    fatherMiddleName :"",fatherLastName :"",
    fatherEmail :"",fatherPhone :"",
    fatherEducation :"",fatherDesignation :"",

    motherFirstName :"",
    motherMiddleName :"",motherLastName :"",
    motherEmail :"",motherPhone :"",
    motherEducation :"",motherDesignation :"",

    relFirstName :"", relLastName:"", relMiddleName:"",
    relPhone : "",relation : "",
    
    refFirstName :"",refLastName:"" ,
    refPhone:"", refAddress:"",

    errors : {
      stdFirstName: "",stdLastName: "",
      stdDob : "",stdMiddleName : "",
      stdBirthPlace : "",pinCode : "",

      fatherFirstName :"",
      fatherMiddleName :"",fatherLastName :"",
      fatherEmail :"",fatherPhone :"",

      motherFirstName :"",
      motherMiddleName :"",motherLastName :"",
      motherEmail :"",motherPhone :"",

      relFirstName :"", relLastName:"", relMiddleName:"",
      relPhone : "",

      refFirstName :"",refLastName:"" ,
      refPhone:"",
    }
  }

  calculateAge = (birthday) =>{
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.state.errors
    var data = {}

    for(var j in this.state) {
      if(j !== 'students' && j !== 'errors'){
        data[j] = this.state[j]
      }
    }

    var flag = 0
    for(var i in errors){
      if(errors[i].length > 1){
        flag = 1
        break;
      }
    }
    if(flag === 0){
      this.setState({students : [...this.state.students,data]})

      for(var k in this.state) {
        if(k !== 'students' && k !== 'errors'){
          this.setState({
            [k]  : ""
          })
        }
      }
    }
  }

  handleChange=(e)=>{
    const {name, value} = e.target
    const errors = this.state.errors
    this.setState({
      [name] : value
    })

    if(name === 'stdState'){
      this.setState({stdDist : ""})
    }

    switch(name){

      /* STUDENT CASE */
      case 'stdFirstName' :  
      case 'stdMiddleName' :  
      case 'stdLastName' :  
      case 'fatherFirstName' :  
      case 'fatherMiddleName' :  
      case 'fatherLastName' :  
      case 'motherFirstName' :
      case 'motherMiddleName' :  
      case 'motherLastName' :  
      case 'relFirstName' :   
      case 'relMiddleName' :  
      case 'relLastName' : 
      case 'refFirstName' :
      case 'refLastName' :   
        errors[name] = value.length < 3 && value.length !== 0 ? "minimum length shoud be 3" : ""
        break;

      case 'pinCode' : 
        errors[name] = value.length !== 6 ? "pincode must be of 6 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
        break;
      case "stdDob" : 
        var age = this.calculateAge(this.state.stdDob)
        errors[name] =  (age < 5 || age > 20 || isNaN(age)) ? "Age must be between 5 to 20" : ""
        break;

      case 'fatherPhone' :  
      case 'motherPhone' :
      case 'refPhone' :
      case 'relPhone' :  
        errors[name] = value.length !== 10 && value.length !== 0 ? "Phone number must be of 10 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
        break;

      case 'fatherEmail' : 
      case 'motherEmail' : 
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/; 
        errors[name] =  value.match(pattern) || value.length === 0 ? "" : "Please enter valid Email"
        break;
      default :
    }
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <Form data={this.state} handleChange = {this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    </div>
    )
  }
}
