import React, { useState, useContext } from 'react'
import AdminServices from '../../services/AdminServices'
import { RedbusContext } from '../../context/context'

export const AdminLogin = (props) => {

   const [loginData, setLoginData] = useState({
      id : "",
      password : ""
   })

   const value = useContext(RedbusContext)

   const handleChange = (e) =>{
      setLoginData({...loginData,[e.target.name] : e.target.value})
   }

   const handleSubmit = (e) =>{
      e.preventDefault()
      AdminServices.adminLogin({
         userid : loginData.id,
         password : loginData.password
      }).then(res => {
         if(res.data === 'Login failed'){
            alert('Login failed')
         } else {
            localStorage.setItem('adminData',JSON.stringify(res.data))
            value.handleAdminLoginTrue()
            props.history.push('/admin')
         }
      })
   }

   return (
      <div className="adminLogin  bg-dark  align-items-center  mt-5 pt-3" >
         <div className="container pt-5 mt-5" >
            <div className="row">
               <div className="col-10 bg-dark col-sm-6 col-lg-4 mx-auto ">
                  <div className="card bg-theme">
                     <div className="card-header h3 text-center">
                        Login
                     </div>
                     <div className="card-body">
                        <form onSubmit={handleSubmit} >
                           <div className="form-group">
                              <input 
                                 type="text" 
                                 className="form-control" 
                                 placeholder="Id"
                                 name="id"
                                 required
                                 value={loginData.id}
                                 onChange={handleChange}
                              />
                           </div>
                           <div className="form-group">
                              <input 
                                 type="password" 
                                 className="form-control" 
                                 placeholder="password"
                                 required
                                 name="password"
                                 value={loginData.password}
                                 onChange={handleChange}
                              />
                           </div>
                           <div className="text-center">
                              <input 
                                 type="submit"
                                 className="btn btn-light"
                                 value='Login'
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
