import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'

export const SingleTrip = (props) => {

   const [myTrip, setMyTrip] = useState({})
   const [busDetails, setBUsDetails] = useState({})
   const [userDetail, setUserDetail] = useState({})

   useEffect(() => {
      const id = props.match.params.id
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if(adminData) {
         AdminServices.adminGetTripById(id,adminData).then(res => {
            if(res.data === 'Unauthorized Access'){
               props.history.push('/admin/login')
            } else {
               setMyTrip(res.data)
               setBUsDetails(res.data.routeId.busNumber)
               setUserDetail(res.data.userId)
               console.log(res.data,res.data.routeId.busNumber);
            }
         })
      } else {
         props.history.push('/admin/login')
      }
   }, [])

   return (
      <div className="p-5 m-5">
         <div className="container ">
            <div className="row">
               
               <div className="table text-uppercase  table-center ">
                  <div className="col-auto col-md-6  mx-auto">

                  <tbody>
                     <tr>
                        <th>From</th>
                        <td>{myTrip.fromCity}</td>
                     </tr>
                     <tr>
                        <th>To</th>
                        <td>{myTrip.toCity}</td>
                     </tr>
                     <tr>
                        <th>Trip date</th>
                        <td>{myTrip.tripDate}</td>
                     </tr>
                     <tr>
                        <th>bus number</th>
                        <td>{busDetails._id}</td>
                     </tr>
                     <tr>
                        <th>bus number</th>
                        <td>{busDetails.busName}</td>
                     </tr>
                     <tr>
                        <th>strat time</th>
                        <td>{myTrip.departureTime}</td>
                     </tr>
                     <tr>
                        <th>end time</th>
                        <td>{myTrip.destinationTime}</td>
                     </tr>
                     <tr>
                        <th>seat no</th>
                        <td>{JSON.stringify(myTrip.seatNo)}</td>
                     </tr>
                     <tr>
                        <th>total fare Price</th>
                        <td>{myTrip.farePrice}</td>
                     </tr>
                     <tr>
                        <th>user's email</th>
                        <td className="text-lowercase" >
                           {userDetail.email} 
                           <Link to={`../user/${userDetail._id}`}>
                              <button className="btn btn-info mx-2">more</button>
                           </Link>
                        </td>
                     </tr>
                  
                  </tbody>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
