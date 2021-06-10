import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import { RedbusConsumer } from "../../context/context";
import UserService from "../../services/UserService";


const UserLoginModel = (props) => {

   const {isOpen,closeModal,openOther} = props

   const [loginData, setloginData] = useState({
      email : "",
      password : ""
   })

   const handleLoginChange = (e) => {
      const {name, value} = e.target
      setloginData({...loginData,[name] : value})
   }

   return (
      <>
      <RedbusConsumer>
         {value => {
            const {handleLogin} = value

            const handleLoginSubmit = (e) =>{
            e.preventDefault()
            UserService.userLogin(loginData).then(res => {

               if(res.data === 'emailId not found'){
                  alert('EmailId not found')
               } else if(res.data === 'Login faild!! Wrong Password'){
                  alert('Wrong Password')
               } else {
                  console.log(res.data);
                  localStorage.setItem('tokenData',JSON.stringify(res.data))
                  closeModal()
                  handleLogin()
                  alert('login sucesfull')
                  setloginData({
                     email : "",
                     password : ""
                  })
               }
            })
         }     

            return (
               <Modal show={isOpen} onHide={closeModal}>
                  <Modal.Header className="bg-theme text-white" closeButton>
                     <Modal.Title >Log in</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <form  onSubmit={handleLoginSubmit} >
                        <div className="form-group">
                              <label htmlFor="loginMail">Email Name<sup className="text-danger">*</sup></label>
                              <input 
                                 type="email" 
                                 className="form-control" 
                                 required
                                 name="email"
                                 value={loginData.email} 
                                 onChange={handleLoginChange}
                                 placeholder="Enter email id"
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="loginPassword">Password<sup className="text-danger">*</sup></label>
                              <input 
                                 type="password" 
                                 className="form-control" 
                                 id="loginPassword" 
                                 required 
                                 name="password"
                                 value={loginData.password} 
                                 onChange={handleLoginChange}
                                 placeholder="Enter Password"
                              />
                        </div>
                        <input 
                           type="submit" 
                           className="btn btn-theme"  
                           id="login"  
                           value="Login"
                        />
                     </form>
                     <div className="text-center">
                        <span style={{cursor: "pointer"}} className="text-primary" onClick={() => {closeModal();openOther();}}>Signup</span>
                     </div>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={closeModal}>
                     Close
                     </Button>
                  </Modal.Footer>
               </Modal>
            )
         }}
      </RedbusConsumer>
      </>
   )
}


const UserSignUpModel = ({isOpen,closeModal,openOther,openOtp}) => {

   const initialSatae = {
      firstName : "",
      lastName : "",
      email : "",
      phoneNumber : "",
      password : "",
      DOB : "",
      gander : "",
      password : "",
      confirmPassword : ""
   }

   const [signupData, setsignupData] = useState({
      ...initialSatae
   })

   const [errors, setErrors] = useState({
      firstName : "",
      lastName : "",
      email : "",
      phoneNumber : "",
      password : "",
      DOB : "",
      gander : "",
      password : "",
      confirmPassword : ""
   })

   const handleSignupChange = (e) => {
      const {name, value} = e.target
      if(name === 'password'){
         setsignupData({...signupData,['confirmPassword'] : "",[name] : value})
         console.log("true");
      } else { 

         setsignupData({...signupData,[name] : value})
      }

      switch(name){
         case (name.match(/Name$/) || {}).input :  
            errors[name] = value.length < 3 && value.length !== 0 ? "minimum length shoud be 3" : ""
            break;

         case (name.match(/Number$/) || {}).input :  
            errors[name] = value.length !== 10 && value.length !== 0 ? "Phone number must be of 10 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
            break;

         case (name.match(/email$/) || {}).input : 
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/; 
            errors[name] =  value.match(pattern) || value.length === 0 ? "" : "Please enter valid Email"
            break;
         case 'password' : 
            errors[name] = value.length < 6 && value.length !== 0 ? "weak password,length should be 6" : ""
            
            break
         case 'confirmPassword' : 
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/; 
            errors[name] =  value === signupData.password ? "" : "password did't match"
            break;

         default :
      }

   }

   const handleSignupSubmit = (e) =>{
      e.preventDefault()
      const data = {
         firstName : signupData.firstName,
         lastName : signupData.lastName,
         email : signupData.email,
         phoneNumber : signupData.phoneNumber,
         password : signupData.password,
         DOB : signupData.DOB,
         gander : signupData.gander,
      }
      var flag = 0
      for(var i in errors){
         if(errors[i].length >0){
            flag = 1
            break
         }
      }

      if(flag === 0){
         setsignupData({...initialSatae})
         UserService.userSignup(data).then(res=>{
            if(res.data === 'varification email is sent to your mail id'){
               localStorage.setItem('userData',JSON.stringify(data))
               closeModal()
               openOtp()
            }
         })
      }
   }

   return (
      <>
         <Modal show={isOpen} onHide={closeModal}  dialogClassName="myModel" >
            <Modal.Header className="bg-theme text-white" closeButton>
               <Modal.Title >Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form  id="sign-up-form" onSubmit={handleSignupSubmit} >
                  <div className="row">
                  {/* FIRSTNAME */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="fname">First Name<sup className="text-danger">*</sup></label>
                           <input 
                              type="text" 
                              className="form-control" 
                              id="fname" 
                              required 
                              name="firstName"
                              value={signupData.firstName} 
                              onChange={handleSignupChange}
                              placeholder="Enter first name"
                           />
                           {errors.firstName.length > 0 && 
                              <span className="text-danger">{errors.firstName}</span>  }
                        </div>
                     </div>

                  {/* LASTNAME */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="lname">Last Name<sup className="text-danger">*</sup></label>
                           <input 
                              type="text" 
                              className="form-control" 
                              id="lname" 
                              required 
                              name="lastName"
                              value={signupData.lastName} 
                              onChange={handleSignupChange}
                              placeholder="Enter last name"
                           />
                           {errors.lastName.length > 0 && 
                              <span className="text-danger">{errors.lastName}</span>  }
                        </div>
                     </div>

                  {/* GENDER */}
                     <div className="col-12 col-md-6">
                        <label htmlFor="dob">Gender<sup className="text-danger">*</sup></label><br/>
                        <div className="" >
                           <div className="form-check form-check-inline">
                              <input 
                                 className="form-check-input" 
                                 type="radio"
                                 name="gander" 
                                 id="male" 
                                 required 
                                 onChange={handleSignupChange} 
                                 value="male"
                              />
                              <label className="form-check-label" htmlFor="male">Male</label>
                           </div>
                           <div className="form-check form-check-inline ml-5">
                              <input 
                                 className="form-check-input" 
                                 type="radio" 
                                 name="gander" 
                                 id="female" 
                                 required
                                 onChange={handleSignupChange} 
                                 value="female"
                              />
                              <label className="form-check-label" htmlFor="female">Female</label>
                           </div>
                        </div>
                     </div>

                  {/* DOB */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="dob">Date of birth<sup className="text-danger">*</sup></label>
                           <input 
                              type="date" 
                              className="form-control" 
                              id="dob" 
                              required 
                              name="DOB"
                              value={signupData.DOB} 
                              onChange={handleSignupChange}
                              max={new Date().toISOString().split('T')[0]} 
                           />
                        </div>
                     </div>

                  {/* EMAIL */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="email">Email Name<sup className="text-danger">*</sup></label>
                           <input 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              required 
                              name="email"
                              value={signupData.email} 
                              onChange={handleSignupChange}
                              placeholder="Enter email id"
                           />
                           {errors.email.length > 0 && 
                              <span className="text-danger">{errors.email}</span>  }
                        </div>
                     </div>

                  {/* PHONE NUMBER */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="number">Phone number<sup className="text-danger">*</sup></label>
                           <input 
                              type="text" 
                              className="form-control" 
                              id="number" 
                              required 
                              name="phoneNumber"
                              value={signupData.phoneNumber} 
                              onChange={handleSignupChange}
                              placeholder="phone number"
                           />
                           {errors.phoneNumber.length > 0 && 
                              <span className="text-danger">{errors.phoneNumber}</span>  }
                        </div>
                     </div>

                  

                  {/* PASSWORD */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="password">Password<sup className="text-danger">*</sup></label>
                           <input 
                              type="password" 
                              className="form-control" 
                              id="password" 
                              required 
                              name="password"
                              value={signupData.password} 
                              onChange={handleSignupChange}
                              placeholder="Enter Password"
                           />
                           {errors.password.length > 0 && 
                              <span className="text-danger">{errors.password}</span>  }
                        </div>
                     </div>

                  {/* CONFIRM PASSWORD */}
                     <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label htmlFor="cpassword">Confirm password<sup className="text-danger">*</sup></label>
                           <input 
                              type="password" 
                              className="form-control" 
                              id="cpassword" 
                              required 
                              name="confirmPassword"
                              value={signupData.confirmPassword} 
                              onChange={handleSignupChange}
                              placeholder="Confirm password"
                           />
                           {errors.confirmPassword.length > 0 && 
                              <span className="text-danger">{errors.confirmPassword}</span>  }
                        </div>
                     </div>

                  </div>
                  
                  <input 
                     type="submit" 
                     className="btn btn-theme" 
                     id="sign-up" 
                     value="Sign up"
                  />
               </form>
               <div className="text-center">
                  <span style={{cursor: "pointer"}} className="text-primary" onClick={() => {closeModal();openOther();}} >Account exist? Click to Login</span>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={closeModal}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>

      </>
   )
}


export const UserOtpModel = (props) => {

   const {isOpen,closeModal} = props

   const [otp, setOtp] = useState("")

   const handleOtp = (e) => {
      setOtp(e.target.value)
   }

   const handleOptSubmit = (e) => {
      e.preventDefault()
      UserService.userOtpVerification(otp).then(res => {
         console.log(res.data);
         if(res.data !== 'wrong otp'){
            const data = localStorage.getItem('userData')
            UserService.userLogin({

               email : data.email,
               password : data.password
            }).then(res => {
               localStorage.setItem('tokenData',JSON.stringify(res.data))
               props.history.push('/')
               closeModal()
            })
         }
      })
   }

   return (
      <>
         <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header className="bg-theme text-white" closeButton>
               <Modal.Title >
                  Log in
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form  onSubmit={handleOptSubmit} >
                  <div className="form-group">
                        <label htmlFor="loginMail">OTP<sup className="text-danger">*</sup></label>
                        <input 
                           type="number" 
                           className="form-control" 
                           required
                           name="otp"
                           value={otp} 
                           onChange={handleOtp}
                           placeholder="Enter OTP"
                        />
                  </div>

                  <input 
                     type="submit" 
                     className="btn btn-theme"  
                     id="login"  
                     value="Login"
                  />
               </form>
               <div className="text-center">
                  <span style={{cursor: "pointer"}} className="text-primary" onClick={() => {closeModal()}}>Signup</span>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={closeModal}>
               Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>   )
}


const OtpModel = withRouter(UserOtpModel)
const LoginModel = withRouter(UserLoginModel)
const SignUpModel = withRouter(UserSignUpModel)

export {SignUpModel , LoginModel, OtpModel}