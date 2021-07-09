import React, { useEffect, useState } from 'react'
import OperatorServices from '../../services/OperatorServices'

export const OperatorHome = (props) => {

   const [operatorData, setOperatorData] = useState({})
   const [route, setroute] = useState([])
   const [busData, setbusData] = useState([])

   useEffect(() => {
      const tokenData = JSON.parse(localStorage.getItem('operatorToken'))
      if(tokenData){
         OperatorServices.getById(tokenData.id,tokenData.token).then(res => {
            if(res.data._id){
               setOperatorData(res.data)
               console.log(operatorData);
               OperatorServices.getRouteById(tokenData.id,tokenData.token).then(res => {
                  setroute(res.data)
                  setbusData(res.data.busNumber)
                  console.log(res.data);

               }).catch((error)=>props.history.push('/operator/login'))
            } else {
            props.history.push('/operator/login') 
         }})
      } else {
         props.history.push('/operator/login') 
      }
   }, []) 

   return (
      <div className="mt-5 pt-4">
         <div className="text-center text-capitalize h1 p-2 text-white bg-primary">{operatorData.companyName}</div>
         <div className="container">
            <table className="table text-capitalize">
               <thead>
                  <tr>
                     <th>From</th>
                     <th>to</th>
                     <th>fromtime</th>
                     <th>to time</th>
                     <th>busName</th>
                  </tr> 
               </thead>
               <tbody>
                  {route.map((item,index) => {
                     return (
                        <tr key={index} >
                           <td>{item.fromCity.cityName}</td> 
                           <td>{item.toCity.cityName}</td> 
                           <td>{item.fromTime}</td> 
                           <td>{item.toTime}</td> 
                           <td>{item.busNumber.busName}</td> 
                        </tr>
                     )
                  })}
               </tbody>
            </table>
         </div>
         {}
      </div>
   )
}
