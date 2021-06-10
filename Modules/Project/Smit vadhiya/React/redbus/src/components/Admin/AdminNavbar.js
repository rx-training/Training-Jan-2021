import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/redbus-logo.png'
import {RedbusContext} from '../../context/context'


export const AdminNavbar = () => {
   const [context, setContext] = useState(useContext(RedbusContext))

   const handleLogin = () =>{

   }

   return (
      <div className="navbar bg-theme navbar-dark fixed-top navbar-expand-md ">

         <Link to='/admin' className="navbar-brand" >
            <img src={logo} alt="" />
         </Link>        
         
         {context.adminLogin ? 
         <button className="btn btn-light ml-auto">
            <Link to="admin/login">
               logout
            </Link>
         </button>
         : null }  
      </div>
   )
}
