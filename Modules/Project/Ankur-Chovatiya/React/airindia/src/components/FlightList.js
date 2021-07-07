import React from 'react'
import { useState , useEffect } from 'react';
import FlightSearch from '../services/FlightSearch'
import { FaPlane } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BookingSummary from './BookingSummary';
import BookingTotal from './BookingTotal';
import {FaPen} from 'react-icons/fa'

function FlightList(props) {


    const [flightList , setFlightList] = useState([])
    const [returnFlightList , setReturnFlightList] = useState([])
    const [showSummary , setShowSummary] = useState(false)
    const [showSummaryR , setShowSummaryR] = useState(false)
    const [id , setId] = useState(0)
    const [returnId , setReturnId] = useState(0)
    const [selectedFlight , setSelectedFlight] = useState({})
    const [returnSelectedFlight , setReturnSelectedFlight] = useState({})
    const [RoundTrip , setRoundTrip] = useState(true)
    const data = localStorage.getItem('searchData')
    const [price , setprice] = useState('')
    const [Rprice , setRprice] = useState('')
    
    const serchObj = JSON.parse(data)
    // if(serchObj.TripType === 'One Way'){
    //     setRoundTrip(false);
    // }
    // console.log(serchObj);
    const {LandingPoint , TakeoffPoint , DepartingDate , ReturningDate , Economy} = serchObj

var searchQuery = {}
var returnSearchQuery = {}
        // if(serchObj.LandingDate == '' ){
            searchQuery = {TakeoffPoint , LandingPoint , TackoffDate:DepartingDate , Economy}
        // }
        // console.log(searchQuery);

        returnSearchQuery = {LandingPoint : TakeoffPoint , TakeoffPoint :LandingPoint ,Economy ,TackoffDate : ReturningDate }
        

    const [selectedClass , setSelectedClass] = useState(0)
    const handleClick = (e , id) =>{
        // console.log(id);
        const p = e.target.innerText.split('- ')
        setprice(parseInt(p[1]))
        setSelectedClass(id)
        // e.target.style.backgroundColor = 'darkred';   
        // console.log(price);

        setId(id)
        setSelectedFlight(flightList.find(flight => flight.FlightId === id))
        setShowSummary(true)
        
    }
    // console.log(selectedClass);
    const RhandleClick = (e , id) =>{
        const p = e.target.innerText.split('- ')
        setRprice(parseInt(p[1]))
        // console.log(price);
        // console.log(id);
        // console.log(returnFlightList.find(fl => fl.FlightId === id));
        setReturnId(id)
        setReturnSelectedFlight(returnFlightList.find(flight => flight.FlightId === id))
        setShowSummaryR(true)
    }

        const selectedflight = JSON.stringify({...selectedFlight , price })
        localStorage.setItem ('selectedFlight' , selectedflight);

        const returnSelectedflight = JSON.stringify({...returnSelectedFlight , price:Rprice})
        localStorage.setItem('returnSelectedflight' , returnSelectedflight);
    // console.log();
    useEffect(()=>{
        FlightSearch.getFlight(searchQuery).then(res =>{            
           setFlightList(res.data)
        //    console.log(new Date(res.data[0].TackoffDate));
        }).catch(err =>{
            console.log(err);
        })
        // for return flight
        FlightSearch.getFlight(returnSearchQuery).then(res=>{
            setReturnFlightList(res.data)
        }).catch(err =>{
            console.log(err);
        })
        
    } ,[])
    const flight = JSON.parse(localStorage.getItem('selectedFlight'))
    // console.log(flight);
    const returnFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    // console.log(returnFlightList);
    const handleFinalClick= (e) =>{
        props.history.push(`./passengers-details`)
    }
    return (
        <div>
         
          <div className="container">
            <h1 className="flight-heading">{serchObj.TakeoffPoint} ---- <FaPlane></FaPlane> ----- {serchObj.LandingPoint}<a className="ml-5 " href="/AirIndia" style={{color:"blue" , fontSize:"20px"}}><FaPen></FaPen>Modify Your Search</a> </h1>
            <div className=" row container">
                <div className="col-4">
           
                </div>
             { flightList.length !== 0 ?  <div className="col-8">
                    <div className="row">
                        <div className="col-3 border p-2 service-type">
                            Web Special
                            {/* {(new Date(serchObj.TackoffDate).toLocaleDateString())} */}
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Super Value
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Flexi Saver
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Flexible
                        </div>
                    </div>
                </div> : null }
            </div>
            { flightList.length !== 0 ?
                flightList.map(flight => {
                    return (
                    
                            
                            <div className="row flight-row mb-3">
                                <div className="col-4 flight-time">
                                    <div>{flight.Aircraft.AircraftNumber}</div>
                                <h4>{(new Date(flight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ---- <FaPlane></FaPlane> ----  {(new Date(flight.LandingDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
                                <p>{parseInt((new Date(flight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) - parseInt((new Date(flight.LandingDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}h 00m</p>
                                
                                <p>{flight.Route.RouteNumber}</p>   
                                </div>
                                <div className="col-8 border ">
                                    <div className="row ">
                                    <div className = {`col-3 price-box ${price === 5000 ? 'bg-danger' : null}`} name="divweb" onClick={(e ,id) => handleClick(e , flight.FlightId )}>  
                                       INR  -  { flight.AirFare.WebSpecialFareAmount}
                                    </div>
                                    <div className={`col-3 price-box ${price === 7000 ? 'bg-danger' : null}`} onClick={(e ,id) => handleClick(e , flight.FlightId )}>
                                    INR - {flight.AirFare.SupervalueFareAmount }
                                    </div>
                                    <div className={`col-3 price-box ${price === 15000 ? 'bg-danger' : null}`} onClick={(e ,id) => handleClick(e , flight.FlightId )}>
                                    INR - {flight.AirFare.BFlexisaver}
                                    </div>
                                    <div className={`col-3 price-box ${price === 17000 ? 'bg-danger' : null}`} onClick={(e ,id) => handleClick(e , flight.FlightId )}>
                                    INR- {flight.AirFare.BFlexible}
                                    </div>
                            </div>
                                </div>
                            </div>

                        
                    )
                }) : <h1 className="my-5">No Flights Available</h1>}
            </div>
            <div className="container">
           { showSummary && <BookingSummary {...props} flight={flight}></BookingSummary>} 
           </div>
 
          { serchObj.TripType === 'Round Trip' && <><div className="container">
            <h1 className="flight-heading">{serchObj.TakeoffPoint} ----- <FaPlane id="flightIcon"></FaPlane> ----- {serchObj.LandingPoint} </h1>
            <div className=" row container">
                <div className="col-4">
                   
                </div>
             { returnFlightList.length !== 0 ?  <div className="col-8">
                    <div className="row">
                        <div className="col-3 border p-2 service-type">
                            Web Special
                            {/* {(new Date(serchObj.TackoffDate).toLocaleDateString())} */}
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Super Value
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Flexi Saver
                        </div>
                        <div className="col-3 border p-2 service-type">
                            Flexible
                        </div>
                    </div>
                </div>  : null}
            </div>
            { returnFlightList.length !== 0 ?
                returnFlightList.map(flight => {
                    return (
                    
                            
                            <div className="row flight-row mb-3">
                                <div className="col-4 flight-time">
                                <div>{flight.Aircraft.AircraftNumber}</div>
                                <h4>{(new Date(flight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ---- <FaPlane></FaPlane> ----  {(new Date(flight.LandingDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
                                <p>{parseInt((new Date(flight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) - parseInt((new Date(flight.LandingDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}h 00m</p>
                                
                                <p>{flight.Route.RouteNumber}</p>
                                </div>
                                <div className="col-8 border ">
                                    <div className="row ">
                                    <div className = {`col-3 price-box ${Rprice === 5000 ? 'bg-danger' : null}`} name="divweb" onClick={(e ,id) => RhandleClick(e , flight.FlightId )}>  
                                       INR  -  { flight.AirFare.WebSpecialFareAmount}
                                    </div>
                                    <div className={`col-3 price-box ${Rprice === 7000 ? 'bg-danger' : null}`} onClick={(e ,id) => RhandleClick(e , flight.FlightId )}>
                                    INR - {flight.AirFare.SupervalueFareAmount }
                                    </div>
                                    <div className={`col-3 price-box ${Rprice === 15000 ? 'bg-danger' : null}`} onClick={(e ,id) => RhandleClick(e , flight.FlightId )}>
                                    INR - {flight.AirFare.BFlexisaver}
                                    </div>
                                    <div className={`col-3 price-box ${Rprice === 17000 ? 'bg-danger' : null}`} onClick={(e ,id) => RhandleClick(e , flight.FlightId )}>
                                    INR- {flight.AirFare.BFlexible}
                                    </div>
                            </div>
                                </div>
                            </div>

                        
                    )
                }) : <h1 className="my-5">No Flights Available</h1>}
            </div>
            <div className="container">
           { showSummaryR &&<BookingSummary {...props} flight={returnFlight}></BookingSummary>} 
           </div></>}
           
            <BookingTotal {...props} showBtnR={showSummaryR} showBtn={showSummary} handleFinalClick={handleFinalClick}></BookingTotal>
        </div>
    )
}

export default FlightList
