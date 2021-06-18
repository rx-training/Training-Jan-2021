import React, { useContext, useEffect, useState } from 'react'
import AdminServices from '../../services/AdminServices'
import { FaBus ,FaUserCircle} from 'react-icons/fa'
import {MdCardTravel} from 'react-icons/md'
import {GoOrganization} from 'react-icons/go'
import { Link } from 'react-router-dom'
import { RedbusContext } from '../../context/context'

export const AdminHome = (props) => {
   const value = useContext(RedbusContext)
   const [users, setUsers] = useState([])
   const [operators, setOperators] = useState([])
   const [buses, setBuses] = useState([])
   const [trips, setTrips] = useState([])
   const [income, setIncome] = useState({
      year : "",
      month : ""
   })

   const [yearMonth, setYearMonth] = useState({
      year : "2021",
      month : "12"
   })

   const handleChange = (e) => {
      const {name, value} = e.target
      setYearMonth({...yearMonth,[name] : value})
   }

   useEffect(() => {
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if(adminData) {
         AdminServices.adminGetAllUser(adminData).then(res => {
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               value.handleAdminLoginTrue()
               setUsers(res.data)
               AdminServices.adminGetOperators(adminData).then(res => {
                  setOperators(res.data)
               })
               AdminServices.adminGetBuses(adminData).then(res => {
                  setBuses(res.data)
               })
               AdminServices.adminGetAllTrip(adminData).then(res =>{
                  setTrips(res.data)
               })
               AdminServices.adminMontholyIncome(yearMonth.year,yearMonth.month,adminData).then(res => {
                  setIncome({year : res.data.year , month : res.data.month},)
               })
               
            }
         })
      } else {
         props.history.push('/admin/login')
      }
   }, [yearMonth])

   return (
      <div className="mt-5 adminHome  bg-light pt-5">
         <div className="container mt-3">
            <div className="row justify-content-around">
               <div className="col-12 bg-primary text-white text-center">
                  <h1>Income</h1>
                  <div className="d-flex justify-content-between">
                     <span className="h2"> 
                     Year : 
                        <input 
                           type="text" 
                           className="col-2 m-2 form-control d-inline" 
                           name="year"
                           value={yearMonth.year}
                           onChange={handleChange}
                        /> {income.year}
                     </span>
                     <span className="h2">
                     Month :  
                        <input 
                           type="text" 
                           className="col-2 form-control d-inline" 
                           name="month"
                           value={yearMonth.month}
                           onChange={handleChange}
                        />  {income.month}
                     </span>
                  </div>
               </div>
               <div className="col-10 p-0 my-2 col-md-5">
                  <div className="card text-white bg-success">
                     <div className="card-header h3">
                        Users
                     </div>
                     <div className="card-body">
                        <div>
                           {users.length}
                        </div>
                        <div>
                           <FaUserCircle />
                        </div>
                     </div>
                     <div className="card-footer p-0">
                        <Link to='/admin/users' className="link" >
                           <button className="btn btn-block btn-success ">
                                 More info
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-10 p-0 my-2 col-md-5">
                  <div className="card text-white bg-dark">
                     <div className="card-header h3">
                        Operators
                     </div>
                     <div className="card-body">
                        <div>
                           {operators.length}
                        </div>
                        <div>
                           <GoOrganization />
                        </div>
                     </div>
                     <div className="card-footer p-0">
                        <Link to='/admin/operators' className="link" >
                           <button className="btn btn-block btn-dark ">
                                 More info
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="col-10 my-2 p-0 col-md-5">
                  <div className="card text-white bg-theme">
                     <div className="card-header h3">
                        Buses
                     </div>
                     <div className="card-body">
                        <div>
                           {buses.length}
                        </div>
                        <div>
                           <FaBus />
                        </div>
                     </div>
                     <div className="card-footer p-0">
                        <Link to='/admin/buses' className="link">
                           <button className="btn btn-block btn-theme">
                                 More info
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="col-10 my-2 p-0 col-md-5">
                  <div className="card text-white bg-info">
                     <div className="card-header h3">
                        Trip
                     </div>
                     <div className="card-body">
                        <div>
                           {trips.length}
                        </div>
                        <div>
                           <MdCardTravel />
                        </div>
                     </div>
                     <div className="card-footer p-0">
                        <Link to='/admin/trips' className="link">
                           <button className="btn btn-block btn-info">
                                 More info
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
