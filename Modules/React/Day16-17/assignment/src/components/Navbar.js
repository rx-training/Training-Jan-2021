import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
   return (
      <nav className="navbar navbar-dark bg-dark p-3 fixed-top navbar-expand-sm">

         <Link to="/" className="navbar-brand">
               <h2 >StudentRegistration</h2>
         </Link>

         <div className="navbar-collapse collapse">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <Link to='/' className="nav-link" >StudentList</Link>
               </li>

               <li className="nav-item">
                  <Link to='/add-student' className="nav-link" >Add Student</Link>
               </li>
               <li className="nav-item">
                  <Link to='/student-cards' className="nav-link" >Students Id</Link>
               </li>
            </ul>
         </div>
      </nav>
   )
}
