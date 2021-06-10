import React, { useEffect, useState } from 'react'

function Seat(props) {
    

    const {person , persons , Seats , handleLinkClick , selectedSeat , handleClick} = props
    console.log(person);
    // useEffect(() => {
        
    // } , [handleLinkClick])
    localStorage.btnCount = 0;
    let btnCount = parseInt(localStorage.btnCount)
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
                   <h1>{person}</h1>
                   <div className="row">
                       
                          {
                              Seats.map((seat ,i) => <><div className={`m-2 ${(i+1)%3 == 0 ? 'mr-5' : 'm-2'} seat ${selectedSeat.includes(seat) ? 'bg-danger' : ' '}`}   onClick={(e) => {handleClick(e ,seat) ; handleLinkClick(e ,persons[btnCount +1] , seat) ; localStorage.btnCount = btnCount + 1 }}>{seat}</div> {(i+1)% 9 == 0 ? <br /> : null}</>)      
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
