import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/redbus-logo.png'


export const OperatorNavbar = () => {
   return (
      <div className="navbar bg-theme navbar-dark fixed-top navbar-expand-md">
         <Link to='/operator' className="navbar-brand" >
            <img src={logo} alt="" />
         </Link>

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse ml-auto navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
               <li >
                  <Link to="/operator/buses" className="nav-link" >Buses</Link>
               </li>
               <li >
                  <Link to="/operator/routes" className="nav-link" >Routes</Link>
               </li>
            </ul>
         </div>

      </div>
   )
}
