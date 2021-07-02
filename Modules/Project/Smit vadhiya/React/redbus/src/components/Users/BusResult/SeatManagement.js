import React, { useState } from 'react'

export const SeatManagement = ({allSeat,routeId,totalSeat,handleSelect}) => {

   const [seats, setSeats] = useState([...allSeat])
   const [selectedSeats, setSelectedSeat] = useState([])

   var data = [...Array(totalSeat +1).keys(3)]
   data.splice(0,1)

   var mainArr = []
   var temp = 0

   while(temp < totalSeat){
      mainArr.push(data.slice(temp,temp+3))
      temp += 3
   }

   const handleClick = (e) =>{
      var tempArr = seats
      var tempSelected = selectedSeats
      const seatNo = parseInt(e.target.value)
      if(!tempArr.includes(seatNo) ){
         tempArr.push(seatNo)
         setSeats([...tempArr])

         tempSelected.splice(tempSelected.indexOf(seatNo),1)
         setSelectedSeat([...tempSelected])
      } else {

         tempArr.splice(tempArr.indexOf(seatNo),1)
         setSeats([...tempArr])

         tempSelected.push(seatNo)
         setSelectedSeat([...tempSelected])
      }
   }

   return (
      <> 
         <div className=" seatManage  justify-content-between align-items-end  d-flex" >
            <div className="d-flex " >
               {mainArr.map((subArr,index) => {
                  return (
                     <div key={index}  className="d-block">
                        {subArr.map(seatNo =>
                           <span key={seatNo + 1} > 
                              <button 
                                 style={
                                    {
                                       background: !seats.includes(seatNo)  ? (selectedSeats.includes(seatNo) ? "black" : "grey") : "white",
                                       color: !seats.includes(seatNo)  && (selectedSeats.includes(seatNo) ? "white" : "black") 
                                    }
                                 }  
                                 className="mySeat m-1" 
                                 value={seatNo} 
                                 onClick={handleClick} 
                                 disabled={
                                    !allSeat.includes(seatNo) || 
                                    selectedSeats.length >=4 
                                       ? (selectedSeats.includes(seatNo) ? false : true ) 
                                       : false 
                                 }
                              > 
                                 {seatNo} |
                              </button>
                              <br/>
                              { seatNo%3===2? <br/> : null}
                           </span>)}
                           
                     </div>
                  )
               })}

            </div>
            
            {selectedSeats.length === 0 
            ? <button className="btn btn-success h-50" disabled onClick={() => {handleSelect(selectedSeats,routeId)}} >select</button> 
            : <button className="btn btn-success h-50" onClick={() => {handleSelect(selectedSeats,routeId)}} >select</button>}
            
            
         </div>
         {selectedSeats.length >=4 
            ? <span className="text-danger d-block text-center"> maximun 4 seat can be booked at a time </span>
            : null}
      </>
   )
}
