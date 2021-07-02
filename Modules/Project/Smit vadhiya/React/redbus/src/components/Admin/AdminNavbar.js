import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/redbus-logo.png'
import {RedbusContext} from '../../context/context'


export const AdminNavbar = () => {
   const value = useContext(RedbusContext)
   return (
      <div className="navbar bg-theme navbar-dark fixed-top navbar-expand-md ">

         <Link to='/admin' className="navbar-brand" >
            <img src={logo} alt="" />
         </Link>        
         
         {value.adminLogin ? 
         <button className="btn btn-light text-dark ml-auto" onClick={value.handleAdminLogin} >
            <Link to="admin/login" className="link" >
               logout
            </Link>
         </button>
         : null }  
      </div>
   )
}
