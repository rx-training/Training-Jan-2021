import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'

export const Buses = (props) => {

   const [filteredBus, setFilteredBus] = useState([])

   const [filter, setFilter] = useState({
      busNumber : "",
      name : ""
   })

   const handleChange = (e) => {
      const {name , value} = e.target
      setFilter({...filter,[name] : value})
   }

   const handleFilter = (allBus) => {
      var tempBus = allBus
      tempBus = tempBus.filter(bus => bus._id.includes(filter.busNumber))
      tempBus = tempBus.filter(bus => bus.busName.includes(filter.name))
      setFilteredBus(tempBus)
   }

   useEffect(() => {
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      console.log(adminData);
      if(adminData) {
         AdminServices.adminGetBuses(adminData).then(res => {
            console.log(res.data === 'Unauthorized Access');
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               handleFilter(res.data)
            }
         })
      } else {
         props.history.push('/admin/login')
      }
   }, [filter])

   return (
      <div className="mt-5 pt-5" >
         <div className="container">
            <Link to='/admin'><button className="btn btn-info mx-1">Back to Home</button></Link>
            <Link to='/admin/users'><button className="btn btn-dark mx-1">users</button></Link>
            <Link to='/admin/operators'><button className="btn btn-warning mx-1">operators</button></Link>
            <Link to='/admin/trips'><button className="btn btn-primary mx-1">trips</button></Link>
            <div className="text-center p-3 display-4">
               Buses
            </div>
            <div className="row my-3">
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="text" 
                     onChange={handleChange}
                     value={filter.busNumber}
                     name="busNumber"
                     className="form-control" 
                     placeholder="Search by bus-number....."
                  />
               </div>
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="text" 
                     name="name"
                     value={filter.name}
                     onChange={handleChange}
                     className="form-control" 
                     placeholder="Search by bus-name....."
                  />
               </div>
            </div>
            
            <table className="table-striped text-capitalize table w-100 mx-auto  ">
               <thead>
                  <tr>
                     <th>Number</th>
                     <th>Name</th>
                     <th>type</th>
                     <th>rating</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredBus.map(bus => {
                     return(
                        <tr key={bus._id}  >
                           <td>{bus._id} {}</td>
                           <td >{bus.busName}</td>
                           <td>{bus.busType}</td>
                           <td>{bus.rating}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
      </div>
   )
}
