import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'

export const Operators = (props) => {
   const [operators, setOperators] = useState([])
   const [filteredOperator, setFilteredOperator] = useState([])

   const [filter, setFilter] = useState({
      name : "",
      phone : ""
   })

   const handleFilter = (allOperators) => {
      var tempOperator = allOperators
      tempOperator = tempOperator.filter(operator => (operator.firstName+" "+operator.lastName).includes(filter.name))
      tempOperator = tempOperator.filter(operator => operator.phoneNumber.includes(filter.phone))
      setFilteredOperator(tempOperator)
   }

   const handleChange = (e) => {
      const {name , value} = e.target
      setFilter({...filter,[name] : value})
   }

   useEffect(() => {
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if(adminData) {
         AdminServices.adminGetOperators(adminData).then(res => {
            console.log(res.data === 'Unauthorized Access');
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               setOperators(res.data)
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
            <Link to='/admin/buses'><button className="btn btn-warning mx-1">buses</button></Link>
            <Link to='/admin/trips'><button className="btn btn-primary mx-1">trips</button></Link>
            <div className="row my-3 ">
               <div className="col-12 display-4 p-2 text-center">
                  Operators
               </div>
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="text" 
                     onChange={handleChange}
                     name="name"
                     value={filter.name}
                     className="form-control" 
                     placeholder="Search by Name....."
                  />
               </div>
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="text" 
                     name="phone"
                     onChange={handleChange}
                     className="form-control" 
                     placeholder="Search by phone....."
                  />
               </div>
            </div>
            <table className="table-striped text-capitalize table w-100 mx-auto  ">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Birth-date</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredOperator.map(user => {
                     return(
                        <tr key={user._id}  >
                           <td>{user.firstName } {user.lastName}</td>
                           <td className="text-lowercase" >{user.email}</td>
                           <td>{user.phoneNumber}</td>
                           <td>{user.DOB.slice(0,10)}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
      </div>
   )
}
