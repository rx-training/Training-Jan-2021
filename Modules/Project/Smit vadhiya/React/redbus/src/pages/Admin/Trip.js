import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'

export const Trip = (props) => {
   const [trips, setTrips] = useState([])
   const [filterTrip, setFilterTrip] = useState([])

   const [offset, setOffset] = useState(1)
   const [totalPage, setTotalPage] = useState("")
   const [pageLength, setpageLength] = useState(3)

   const handleClick1 = (number) =>{
      setOffset(number)
   }
   const handleBack = () =>{
      if(offset != 1)
         setOffset(offset-1)
      console.log(totalPage);
   }
   const handleForward = () =>{
      if(offset < totalPage)
      setOffset(offset+1)
   }

   useEffect(() => {
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if(adminData) {
         AdminServices.adminGetAllTrip(adminData).then(res => {
            console.log(res.data === 'Unauthorized Access');
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               setTrips(res.data)
               setFilterTrip(res.data)
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
   }, [])

   const handleFilter = (e) =>{
      const {name, value} = e.target
      var temp = trips
      if(name === 'year'){
         temp = temp.filter(item =>{
            return item.tripDate.slice(0,4).includes(value)
         })
      }
      if(name === 'month'){
         temp = temp.filter(item =>{
            return item.tripDate.slice(5,7).includes(value)
         })
      }
      setFilterTrip(temp)
   }

   const handleClick = (id) =>{
      AdminServices.adminGetTripById(id,JSON.parse(localStorage.getItem('adminData'))).then(res =>{
         console.log(res.data);
      })
      props.history.push(`/admin/trip/${id}`)
   }

   return (
      <div className="mt-5 pt-5" >
         <div className="container">
            <Link to='/admin'><button className="btn btn-info mx-1">Back to Home</button></Link>
            <Link to='/admin/buses'><button className="btn btn-dark mx-1">buses</button></Link>
            <Link to='/admin/operators'><button className="btn btn-warning mx-1">operators</button></Link>
            <Link to='/admin/users'><button className="btn btn-primary mx-1">users</button></Link>
            <div className="row my-3 ">
               <div className="col-12 display-4 p-2 text-center">
                  Trips
               </div>
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="number" 
                     name="year"
                     onChange={handleFilter}
                     className="form-control" 
                     placeholder="Search by year....."
                  />
               </div>
               
               <div className="col-12 col-md-6 my-1">
                  <input 
                     type="number" 
                     min='1'
                     max='12'
                     onChange={handleFilter}
                     name="month"
                     className="form-control" 
                     placeholder="Search by month....."
                  />
               </div>
            </div>
            <table className="table-striped text-capitalize table w-100 mx-auto  ">
               <thead>
                  <tr>
                     <th>from </th>
                     <th>to</th>
                     <th>date</th>
                     <th>Passengers</th>
                     <th>Details</th>
                  </tr>
               </thead>
               <tbody>
                  {filterTrip.slice(pageLength*(offset-1),(pageLength*(offset-1))+pageLength).map(trip => {
                     return(
                        <tr key={trip._id} >
                           <td>{trip.fromCity}</td>
                           <td  >{trip.toCity}</td>
                           <td>{trip.tripDate.slice(0,10)}</td>
                           <td>{trip.travelerList.map((passenger,index) => <>{(index+1 +') ') + passenger.name}<br/></>)}</td>
                           <td><button className="btn btn-info" onClick={() => handleClick(trip._id)} >more info</button></td>
                        </tr>
                     )
                  })}
               </tbody>
            </table>
            <div className=" text-center  my-1">
               {<>
                  <button className="btn btn-light mx-2" onClick={handleBack} >back</button>
                  <button className={`btn btn-primary`} onClick={() => handleClick1(offset)} >{offset}</button>
                  {offset+1 <= totalPage && <button className="btn " onClick={() => handleClick1(offset+1)} >{offset+1}</button>}
                  {offset+2 <= totalPage && <button className="btn " onClick={() => handleClick1(offset+2)} >{offset+2}</button>}
                  <button className="btn btn-light mx-2" onClick={handleForward} >next</button>
               </>}
            </div>
         </div>
      </div>
   )
}
