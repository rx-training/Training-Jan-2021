import React, { useEffect, useState } from 'react'
import {IoAirplane} from 'react-icons/io5'

function Seat(props) {

    const search = JSON.parse(localStorage.getItem('searchData'))
    // const data = JSON.parse(search)

    const {person , persons , Seats , TakeoffPoint ,LandingPoint , handleLinkClick , selectedSeat , handleClick , btnCount} = props
    // console.log(TripType);
    // useEffect(() => {
        
    // } , [handleLinkClick])
    // localStorage.btnCount = 0;
    // let btnCount = parseInt(localStorage.btnCount)
    // console.log(typeof(btnCount));
    return (
        <div>
            <div id="passengerList" >
                    <ul>
                        {persons.map(persono => <li onClick={(e) => handleLinkClick(e , persono)}>{persono}</li>)
                        }
                    </ul>
            </div>
            <div className="row">
               
               <div className="col" id="seatPart">
                   <h1>{TakeoffPoint}  ------ <IoAirplane></IoAirplane> -------  {LandingPoint}</h1>
                   <h5>Select Seat for {person} </h5>
                   <div className="row">
                       
                          {
                              Seats.map((seat ,i) => <><div className={`m-2 ${(i+1)%3 == 0 ? 'mr-5' : 'm-2'} seat ${selectedSeat.includes(seat) ? 'bg-danger' : ' '}`}   onClick={(e) => {handleClick(e ,seat) ; handleLinkClick(e , seat) }}>{seat}</div> {(i+1)% 9 == 0 ? <br /> : null}</>)      
                          }
                       
                      
                   </div>
                   
               </div>
               {/* <div className="col" id="seatPart">
                   
               </div> */}
           </div> 
        </div>
    )
}

export default Seat
