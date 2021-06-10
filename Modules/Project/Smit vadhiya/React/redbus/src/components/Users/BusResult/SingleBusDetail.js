import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { SeatManagement } from './SeatManagement'

const SingleBusDetail = (props) => {

   const [show, setShow] = useState(false)

   const {busNumber,
      routeId,
      availableSeat,
            fromCity,
            ticketPrise,
            timeAtEndpoint,
            timeAtStartpoint,
            toCity,
            totalAvailableSeat} = props
   const handleSelect=(selectedSeat,id2)=>{
      
      localStorage.setItem('selectedBusData',JSON.stringify({
            busNumber,
            routeId,
            availableSeat,
            fromCity,
            ticketPrise,
            timeAtEndpoint,
            timeAtStartpoint,
            toCity,
            totalAvailableSeat,
            selectedSeat
      }))

      const tokenData = JSON.parse(localStorage.getItem('tokenData'))
      props.history.push('/user/'+tokenData.id+'/selected-bus/'+id2)
   }
   return (
      <div className="p-2 my-2 border border-dark">
         <div className="row justify-content-around">
               <div className="col-5 col-md-3">
                  <h5 className="text-capitalize" > <i className="fa fa-bus"></i> {busNumber.busName}</h5>
                  <p className="text-muted"> {busNumber.busType}</p>
               </div>
               <div className="col-2 col-md-1 text-center"> 
                  <h5>{timeAtStartpoint.slice(0,5)}</h5>
                  <p className="text-muted text-capitalize"> {fromCity} </p>
               </div>
               <div className="col-3 col-md-2 text-center"> 
                  <p className="lead text-muted">2 hr 15 min</p>
               </div>
               <div className="col-2 col-md-1 text-center"> 
                  <h5>{timeAtEndpoint.slice(0,5)}</h5>
                  <p className="text-muted text-capitalize">{toCity}</p>
               </div>
               <div className="col-4 col-md-1" > 
                  <div className="p-2 badge bg-warning"><i className="fa fa-star"></i> {busNumber.rating}</div>
                  <p className="text-muted"> <i className="fa fa-group"> 45</i></p>
               </div>
               <div className="col-4 col-md-2 "> 
                  <p className="text-muted d-inline"> INR</p>
                  <h4 className="d-inline" > {ticketPrise}</h4>
               </div>
               <div className="col-4 col-md-2"> 
                  <p className="text-muted d-inline"><b>{totalAvailableSeat}</b> Seats Available</p>
               </div>
         </div>
         <div className="d-flex flex-row-reverse">
               <div>
                  <button className="btn bg-theme" id="seat"
                     onClick={() => {setShow(!show)}}>{show ? "hide seat" : "view seat"}  </button>
               </div>
         </div>
         {show ? <div className="py-2" >
            <SeatManagement allSeat={availableSeat} routeId = {routeId} totalSeat={busNumber.totalSleeperseat} handleSelect={handleSelect} />
         </div> : null}
      </div>   
   )
}

export default withRouter(SingleBusDetail)
