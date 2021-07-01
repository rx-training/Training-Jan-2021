import React, { useRef } from 'react'
import Ticket from './Ticket'
import ReactToPrint from 'react-to-print';
import Tiket from './Tiket';

function TicketConfirm(props) {


    const search = JSON.parse(localStorage.getItem('searchData'))
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight'))
    const returnSelectedFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    const passengerDetails = JSON.parse(localStorage.getItem('passengerDetails'))

    let name = passengerDetails.FirstName + " " + passengerDetails.LastName;
    let guests = passengerDetails.Guests ? passengerDetails.Guests : [] 
    // console.log(guests);

    const flight = JSON.parse(localStorage.getItem('selectedFlight'))
    // console.log(flight);
    const returnFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    
    // const search = JSON.parse(localStorage.getItem('searchData'))
    const totalTicket = parseInt(search.Adults) + parseInt(search.Children) + parseInt(search.Infants)
    const totalFare = parseInt(flight?.price + returnFlight.price)
    const  totalCharge = (flight.AirFare ? flight.AirFare.ChargesAndfees : 0 ) + (returnFlight.AirFare ? returnFlight.AirFare.ChargesAndfees : 0 )
    const totalExtras = (flight.AirFare ?  flight.AirFare.ExtraFare : 0 ) + (returnFlight.AirFare ?  returnFlight.AirFare.ExtraFare : 0 )

    const grandTotal = totalFare + totalCharge + totalExtras + totalFare*0.18 

    const data = {selectedFlight , returnSelectedFlight , passengerDetails , name , guests , flight , returnFlight , totalTicket , totalFare , totalCharge , totalExtras ,grandTotal  }

    const handleClick = (e) =>{
        props.history.push('/Airindia')
    }
    const componentRef = useRef();
    return (
        <div className="container">
            <h1 className="bg-success">Your Ticket Is Successfully Booked</h1>
          
                
            <Tiket data={data} ref={componentRef}></Tiket>
               
           
           <div className="row my-5">
               <div className="col">
               <button className="btn btn-danger btn-block" onClick={handleClick}>Go To Home</button>
               </div>
               <div className="col">
               <ReactToPrint
        trigger={() => <button className="btn btn-danger btn-block">Download Ticket</button>}
        content={() => componentRef.current}
      />
      
      {/* <Tiket data={data} ref={componentRef}></Tiket> */}
               {/* <a href="http://localhost:3000/ticket.txt" className="btn btn-danger btn-block" download>Download Ticket</a> */}
               </div>
           </div>
        </div>
    )
}

export default TicketConfirm
