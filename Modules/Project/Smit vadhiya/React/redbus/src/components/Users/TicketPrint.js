import React from 'react'
import logo from '../../img/redbus-logo.png'

export const TicketPrint = (props) => {
   const {fromCity,toCity,departureTime,destinationTime,tripDate,seatNo,travelerList,farePrice} = props.trip
   console.log(props.trip.routeId.busNumber.busName);
   return (
      <div className="border p-2">
         <div className="d-flex flex-column flex-md-row print-main p-3 text-white justify-content-between align-items-center">
            <div>
               <img src={logo} alt="" />
            </div>
            <h3>E-Reservation Ticket</h3>
            <div>
               <h2 className="display-4 " >REDBUS</h2>
            </div>
         </div>
         <h4 className="text-center p-2" >Traveling details</h4>
         <table className="table my-2 table-bordered  text-capitalize">
            <tr>
               <th>Bus name</th>
               <td>{props.trip.routeId.busNumber.busName}</td>
               <th>Boarding Date  </th>
               <td>{tripDate.slice(0,10)}</td>
            </tr>
            <tr>
               <th>Journey From </th>
               <td>{fromCity}</td>
               <th>Journey to </th>
               <td>{toCity}</td>
            </tr>
            <tr>
               <th>Departure Time </th>
               <td>{departureTime}</td>
               <th>Destination Time </th>
               <td>{destinationTime}</td>
            </tr>
            <tr>
               <th>No. of Seats </th>
               <td>{seatNo.length}</td>
               <th>Seats No/s  </th>
               <td>{seatNo.toString()}</td>
            </tr>
         </table>

         <h4 className="text-center p-2" >Passenger Details</h4>
         <table className="table my-2 table-bordered  text-capitalize">
            <tr>
               <th>name</th>
               <th>age</th>
               <th>gender</th>
            </tr>
            {travelerList.map((user)=> 
            <tr>
               <td>{user.name}</td>
               <td>{user.age}</td>
               <td>{user.gender}</td>
            </tr> )}
         </table>

         <h4 className="text-center p-2" >Total Fare Details</h4>
         <table className="table my-2 table-bordered  text-capitalize">
            <tr>
               <th className="w-50">Total Chargeable Amount </th>
               <td>{farePrice}</td>
            </tr>
         </table>

         <h4 className=" p-2" >Important </h4>
         <ul>
            <li>The seat(s) booked under this e-ticket is/are not transferable.</li>
            <li>This e-ticket is valid only for the seat number and bus service specified herein.</li>
            <li>This e-ticket has to be carried by the passenger during the journey along with Original.</li>
            <li>Photo ID Card of the passenger whose name appears above.</li>
            <li>Please keep the e-ticket safely till the end of the journey</li>
            <li>Please show the e-ticket at the time of checking.</li>
            <li>Cancellation policy differs for each STU. Please refer to the terms and conditions of the respective STUs.</li>
            <li>For any general queries, please contact following numbers 1800-419-4287(4BUS) and</li>
            <li>Passengers will have to pay the difference amount at boarding time in case of fare/levies/taxes revision as and when applicable.The difference amount will be calculated on charged fare and new fare / new levy / revised tax.</li>
         </ul>
               
            <h5 className="text-center" >Wish You A Happy Journey</h5>
      </div>
   )
}
