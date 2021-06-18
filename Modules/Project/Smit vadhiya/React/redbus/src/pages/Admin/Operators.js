import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'

export const Operators = (props) => {
   const [filteredOperator, setFilteredOperator] = useState([])

   const [filter, setFilter] = useState({
      name : "",
      phone : ""
   })

   const [offset, setOffset] = useState(1)
   const [totalPage, setTotalPage] = useState("")
   const [pageLength, setpageLength] = useState(5)

   const handleBack = () =>{
      if(offset != 1)
         setOffset(offset-1)
      console.log(totalPage);
   }

   const handleForward = () =>{
      if(offset < totalPage)
      setOffset(offset+1)
   }
   const handleClick = (number) =>{
      setOffset(number)
   }

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
               handleFilter(res.data)
               if(res.data.length%pageLength === 0){
                  setTotalPage(res.data.length / pageLength)
               } else {
                  setTotalPage(parseInt(res.data.length / pageLength) + 1)
               }
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
                  {filteredOperator.slice(pageLength*(offset-1),(pageLength*(offset-1))+pageLength).map(user => {
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
            <div className=" text-center  my-1">
               {<>
                  <button className="btn btn-light mx-2" onClick={handleBack} >back</button>
                  <button className={`btn btn-primary`} onClick={() => handleClick(offset)} >{offset}</button>
                  {offset+1 <= totalPage && <button className="btn " onClick={() => handleClick(offset+1)} >{offset+1}</button>}
                  {offset+2 <= totalPage && <button className="btn " onClick={() => handleClick(offset+2)} >{offset+2}</button>}
                  
                  <button className="btn btn-light mx-2" onClick={handleForward} >next</button>
               </>}
               </div>
         </div>
      </div>
   )
}
