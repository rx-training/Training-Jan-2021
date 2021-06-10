import React from 'react'

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
    const totalFare = parseInt(flight.price + returnFlight.price)
    const  totalCharge = (flight.AirFare ? flight.AirFare.ChargesAndfees : 0 ) + (returnFlight.AirFare ? returnFlight.AirFare.ChargesAndfees : 0 )
    const totalExtras = (flight.AirFare ?  flight.AirFare.ExtraFare : 0 ) + (returnFlight.AirFare ?  returnFlight.AirFare.ExtraFare : 0 )

    const grandTotal = totalFare + totalCharge + totalExtras + totalFare*0.18 



    const handleClick = (e) =>{
        props.history.push('/Airindia')
    }

    return (
        <div className="container">
            <h1 className="bg-success">Your Ticket Is Successfully Booked</h1>
          
                
                <div className="ticket">
                <p className="details-heading">Passengers Details</p>
                    <div className="row details-h">
                        <div className="col">Passenegr Type</div>
                        <div className="col">Name</div>
                        <div className="col">Friquent Flyer No.</div>
                        <div className="col">Meal Request</div>
                        <div className="col">SPL. Request</div>
                        <div className="col">TicketNo.(S)</div>
                    </div><hr />
                    <div className="row details-a">
                        <div className="col">{passengerDetails.Title  ? 'ADLT' : 'Child' }</div>
                        <div className="col">{name}</div>
                        <div className="col">{passengerDetails.FrequentFlyerNumber}</div>
                        <div className="col">{passengerDetails.MealSelection}</div>
                        <div className="col">{passengerDetails.SpecialAssistanceRequest}</div>
                        <div className="col">{'864532105412'}</div>
                    </div>

                    {
                        guests.map((gst , i) => {
                            return(
                                <div className="row details-a my-2">
                        <div className="col">{gst.Title  ?  'ADLT' : 'CHLD' }</div>
                        <div className="col">{gst.FirstName +' ' + gst.LastName}</div>
                        <div className="col">{gst.FrequentFlyerNumber ? gst.FrequentFlyerNumber : 'None' }</div>
                        <div className="col">{gst.MealSelection ? gst.MealSelection : 'None'}</div>
                        <div className="col">{gst.SpecialAssistanceRequest ? gst.SpecialAssistanceRequest : 'None'}</div>
                        <div className="col">{875213097845}</div>
                    </div>
                            )
                        })
                    }
                        {/* travel info */}

                    <p className="details-heading">Travel Information</p>    
                    <div className="row details-h">
                        <div className="col">DATE</div>
                        <div className="col">Flight</div>
                        <div className="col">Departure</div>
                        <div className="col">Time</div>
                        <div className="col">Arrival</div>
                        <div className="col">Time</div>
                        <div className="col">Class</div>
                        <div className="col">fare bases</div>
                        <div className="col">Naggage Allowance</div>
                    </div><hr />

                    <div className="row details-a my-3">
                        <div className="col">{(new Date(selectedFlight.TackoffDate).toDateString())}</div>
                        <div className="col">{selectedFlight.FlightName}</div>
                        <div className="col">{selectedFlight.TakeoffPoint}</div>
                        <div className="col">{(new Date(selectedFlight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        <div className="col">{selectedFlight.LandingPoint}</div>
                        <div className="col">{(new Date(selectedFlight.LandingDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        <div className="col">{selectedFlight.Economy}</div>
                        <div className="col">{selectedFlight.AirFareId ? selectedFlight.AirFareId : 'General' }</div>
                        <div className="col">{30}</div>
                    </div>
                        {/* Boking Details */}


                    <p className="details-heading">Booking Details</p>

                    <div className="row my-3">
                        <div className="col">
                            <p><b>Booking Reference No.(PNR)</b> : {'FGHT'}</p>
                            <p><b>Mobile reference No.</b> : {8765}</p>
                            <p><b>Issuing AirLines</b> : {'Air India Ltd.'}</p>
                            <p><b>Issued Date</b> : {'12 , Nov 2021'} </p>
                            <p><b>Endorsement</b> : {'Valid on AI Flight only'}</p>
                        </div>
                        <div className="col">
                            <p><b>Place of issue</b> :{'AirIndia Mobile App'} </p>
                            <p><b>Contact No </b> : {'+919727546402'}</p>
                            <p><b>Email</b> : {'ankur.chovatiya1856@gmail.com'}</p>
                        </div>
                        
                    </div>

                    {/* fare details */}

                    <p className="details-heading">Fare Details</p>

                    <div className="row">
                        <div className="col">
                            <p><b>Base Fare :</b></p>
                            <p><b>SURCHARGE :</b></p>
                            <p><b>Charge & Fees :</b></p>
                            <p><b>Tax :</b></p>
                            <p><b>Extras</b></p>
                            <hr />
                            <p><b>Grand Total :</b></p>
                        </div>
                        <div className="col">
                            <p><b>{totalFare * totalTicket}</b></p>
                            <p><b>{'None'}</b></p>
                            <p><b>{totalCharge * totalTicket}</b></p>
                            <p><b>{totalFare * .18 * totalTicket}</b></p>
                            <p><b>{totalExtras * totalTicket}</b></p>
                            
                            <hr />
                            <p><b>{grandTotal * totalTicket}</b></p>
                        </div>
                    </div>

                </div>
               
           
           <div className="row my-5">
               <div className="col">
               <button className="btn btn-danger btn-block" onClick={handleClick}>Go To Home</button>
               </div>
               <div className="col">
               <a href="http://localhost:3000/ticket.txt"className="btn btn-danger btn-block" download>Download Ticket</a>
               </div>
           </div>
        </div>
    )
}

export default TicketConfirm
