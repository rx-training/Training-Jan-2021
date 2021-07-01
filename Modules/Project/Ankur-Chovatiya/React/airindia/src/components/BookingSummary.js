import React from 'react'

function BookingSummary(props) {
    const {flight} = props
    console.log(flight);
//    const flight = JSON.parse(localStorage.getItem('selectedFlight'))
    // console.log(flight);
    // const returnFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    const handleClick= (e) =>{
        props.history.push(`./passengers-details`)
    }
    
    return (
        <>
            <div>
                    
                     <div className="row booking-summary container my-3">
                        <div className="col-4 summary-box ">
                            <p className="heading">APPLICABLE FARE ATTRIBUTES</p>
                            <p>Meals - Yes</p>
                            <p>Change Fee*    - INR {flight.AirFare ? flight.price : 0} </p>
                            <p>Cancellation Fee*   - INR {flight.AirFare ? flight.price + 500 : 0}</p>
                            <p>Baggage Allowance *  - 30Kg</p>
                            <p>Returns Points  -  *29% to 33% of base points</p>
                            <button className="btn btn-danger my-3">CONTINUE</button>
                        </div>
                        <div className="col-4 summary-box">
                            <p className="heading">UPGRADE TO FLEXI SAVER</p>
                            <p>GET ADDITIONAL BENEFITS FOR ONLY</p>
                            <p><span>INR</span> {flight.AirFare ? flight.AirFare.BFlexisaver : 0}</p>
                            <button className="btn btn-danger my-3">UPGRADE TO FLEXI SAVER</button>
                        </div>
                        <div className="col-4 summary-box">
                            <p className="heading">UPGRADE TO BUSINESS</p>
                            <p>FLY BUSINESS FOR ONLY</p>
                            <p><span>INR - </span>{flight.AirFare ? flight.AirFare.BFlexible : 0}</p>
                            <button className="btn btn-danger">UPGRADE TO BUSINESS</button>
                        </div>
                    </div>

                    
          
            </div>
            
        </>
    )
}

export default BookingSummary
