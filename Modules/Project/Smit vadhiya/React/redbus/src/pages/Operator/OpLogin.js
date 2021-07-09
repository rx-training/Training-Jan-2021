import React, { useState } from 'react'
import styled from 'styled-components'
import OperatorServices from '../../services/OperatorServices'
export const OpLogin = (props) => {

   const [loginData, setloginData] = useState({
      email : "",
      password : ""
   })

   const handleChange = (e) =>{
      const {name, value} = e.target
      setloginData({...loginData,[name] : value})
   }

   const handleSubmit = (e) =>{
      e.preventDefault()
      OperatorServices.operatorLogin(loginData).then(res => {
         if(res.data === 'emailId not found'){
            alert('EmailId not found')
         } else if(res.data === 'Login faild!! Wrong Password'){
            alert('Wrong Password')
         } else {
            localStorage.setItem('operatorToken',JSON.stringify(res.data))
            alert('login sucesfull')
            props.history.push('/operator')
            setloginData({
               email : "",
               password : ""
            })
         }
      })
   }

   return (
      <div className="mt-5 pt-3" >
         <div className="container">
         <div className="row">
            <div className="col-11 mx-auto col-sm-8 col-md-5">

               <Login>
                  <form onSubmit={handleSubmit} className="form">
                     <input 
                        type="text" 
                        className="form-control my-2" 
                        placeholder="Email"
                        name="email"
                        required
                        value={loginData.email}
                        onChange={handleChange}
                     />
                     <input 
                        type="password" 
                        className="form-control my-2" 
                        placeholder="Password"
                        name="password"
                        required
                        value={loginData.password}
                        onChange={handleChange}
                     />
                     <div className="text-center">
                        <button className="btn btn-light my-2">
                           Login
                        </button>
                     </div>
                  </form>
               </Login>
            </div>

         </div>
         </div>
      </div>
   )
}


const Login = styled.div`
   padding: 70px 0px 0px 0px;
   .form{
      padding: 20px;
      background-color: rgb(230,78,81);
   }
`