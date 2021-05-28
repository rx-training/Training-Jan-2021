import React, { Component } from 'react'
import StudentServices from '../services/StudentServices';

import { EmergencyContact } from '../components/FormComponents/EmergencyContact';
import { FatherDetails } from '../components/FormComponents/FatherDetails';
import { MotherDetails } from '../components/FormComponents/MotherDetails';
import { StudentDetail } from '../components/FormComponents/StudentDetail';
import { ReferanceDetails } from '../components/FormComponents/ReferanceDetails';
import { UploadImage } from '../components/FormComponents/UploadImage';

export default class Form extends Component {
   state = {
      stdFirstName: "",stdLastName: "",
      stdDob : "",stdMiddleName : "",
      stdState : "",pinCode : "",
      stdDist : "",
      stdLanguage : "",
      stdAddress : "",
      stdImg : "",
      
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

   componentDidMount(){
      const id = parseInt(this.props.match.params.id)
      if(id){
         StudentServices.getStudentById(id).then(res =>{
            this.setState({
               ...res.data
            })
         })
      } 
   }

   calculateAge = (birthday) =>{
      var ageDifMs = Date.now() - new Date(birthday).getTime();
      var ageDate = new Date(ageDifMs); 
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }

   handleChange=(e)=>{
      const {name, value} = e.target
      const errors = this.state.errors
      if(name === 'stdImg'){
         this.setState({
            [name] : '/img/'+ e.target.files[0].name
         })
      } else {
         this.setState({
            [name] : value
         })
      }

      if(name === 'stdState'){
         this.setState({stdDist : ""})
      }

      switch(name){
         case (name.match(/Name$/) || {}).input :  
            errors[name] = value.length < 3 && value.length !== 0 ? "minimum length shoud be 3" : ""
            break;
         case 'pinCode' : 
            errors[name] = value.length !== 6 ? "pincode must be of 6 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
            break;
         case "stdDob" : 
         var age = this.calculateAge(this.state.stdDob)
            errors[name] =  (age < 5 || age > 20 || isNaN(age)) ? "Age must be between 5 to 20" : ""
            break;
         case (name.match(/Phone$/) || {}).input :  
            errors[name] = value.length !== 10 && value.length !== 0 ? "Phone number must be of 10 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
            break;
         case (name.match(/Email$/) || {}).input : 
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/; 
            errors[name] =  value.match(pattern) || value.length === 0 ? "" : "Please enter valid Email"
            break;
         default :
      }
   } 

   handleSubmit = (e) => {
      e.preventDefault()
      const errors = this.state.errors
      var data = {}
      const id = parseInt(this.props.match.params.id)

      for(var j in this.state) {
         if(j !== '_id' && j !== 'errors' ){
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
         if(id){
            StudentServices.updateStudent(id,data).then(res =>{
               this.props.history.push(`/`);
            })
         } else {
            StudentServices.addStudent(data).then((res)=> {
               console.log(this.state.stdImg);
               this.props.history.push(`/`);
            })
         }
         for(var k in this.state) {
            if(k !== '_id' && k !== 'errors'){
               this.setState({
                  [k]  : ""
               })
            }
         }
      }
   }

   render() {
      return (
         <>
            <form action="" onSubmit={this.handleSubmit}>
               <div className="card">
               <div className="card-header bg-dark text-center">
                  <h1 className="display-4 text-white">Student Admission Form</h1>
               </div>
               <div className="card-body row gy-3 justify-content-between align-items-center">

               <StudentDetail data={this.state} handleChange={this.handleChange}/>  

               <FatherDetails data={this.state} handleChange={this.handleChange}/>

               <MotherDetails data={this.state} handleChange={this.handleChange}/>

               <EmergencyContact data={this.state} handleChange={this.handleChange}/>
               
               <ReferanceDetails data={this.state} handleChange={this.handleChange}/>

               <UploadImage stdImg={this.state.stdImg} handleChange={this.handleChange}/>
               </div>
               <div className="card-footer text-center">
                  {
                     this.state._id 
                        ? <button className="btn btn-info" type="submit">Update</button> 
                        : <button className="btn btn-success" type="submit">Submit</button>
                  }
               </div>
               </div>
            </form> 
         </>
      )
   }
}
