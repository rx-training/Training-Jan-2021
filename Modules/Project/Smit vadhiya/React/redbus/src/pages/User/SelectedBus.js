import React, { useEffect,useState } from 'react'
import UserService from '../../services/UserService'
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
export const SelectedBus = (props) => {


   const [inputs, setInputs] = useState({})
   //const [travelerList, setTravelerList] = useState([])
   
   
   const [busData, setbusData] = useState({
      busNumber : [],
      fromCity : "",
      toCity : "",
      timeAtEndpoint:"",
      timeAtStartpoint : "",
      selectedSeat : [],
      ticketPrise : "",
   })


   useEffect(() => {
      const data = JSON.parse(localStorage.getItem('selectedBusData'))
      setbusData({...data})
   
   },[props.match.params.roteid])

   const handleChange =(e,)=>{
      const {name,value} = e.target
      if(name.slice(0,4) === 'name'){
         const key = name.slice(4)
         setInputs({...inputs,[key] : {...inputs[name],name : value}})
      } else if(name.slice(0,3) === 'age'){
         const key = name.slice(3)
         setInputs({...inputs,[key] : {...inputs[key],age : value}})   
      } else {
         setInputs({...inputs,[name.slice(6)] : {...inputs[name.slice(6)], gender : value}})   
      }
      
   }

   const tripDate = JSON.parse(localStorage.getItem('searchData'))

   const  handleSubmit=  (e) =>{
      e.preventDefault()
      const {id,token} = JSON.parse(localStorage.getItem('tokenData'))
      var travelerList = []
      for(var key in inputs){
         travelerList.push(inputs[key])
      }
         console.log(busData);
      const body = {
         fromCity : busData.fromCity,
         toCity : busData.toCity,
         routeId : busData.routeId,
         userId : parseInt(id),
         tripDate : tripDate.date,
         seatNo : busData.selectedSeat,
         travelerList : travelerList,
         departureTime : busData.timeAtStartpoint,
         destinationTime : busData.timeAtEndpoint,
         ticketPrise : busData.ticketPrise,
      }
      console.log("body",body);

      UserService.userAddNewTrip(body,id,token).then(res => {
         console.log(res.data);
         props.history.push('/')
      })

   }

   return (
      <div className="pt-5 mt-5"> 
         <div className="container">
            <div className="row text-capitalize">
               <div className="col-12 col-md-10 border text-center p-3 bg-dark text-light mx-auto">
                  <h1 className="d-block text-theme" style={{borderBottom : "2px solid "}}  >details</h1>

                  <div>
                     <h3>{busData.busNumber.busName}</h3>
                     <h3>{busData.busNumber.busType}</h3>
                     <h3> {busData.fromCity} <IoArrowForwardCircleOutline />   {busData.toCity}</h3>
                     <h3>pickup time : {busData.timeAtStartpoint.slice(0,5)}</h3>
                     <h3 className="ml-auto">destination time : {busData.timeAtEndpoint.slice(0,5)}</h3>
                     <h3>seat numbers : {JSON.stringify(busData.selectedSeat)}</h3>
                     <h3 className="ml-auto">Ticket price : {busData.ticketPrise * busData.selectedSeat.length}</h3>
                  </div>

                  
                  <div className="d-flex" >

                  </div>
                  <div className="d-flex" >
                  </div>
               </div>


               <div className="col-12 col-md-12 my-4 p-2  mx-auto border">
                  <h4 className="text-center py-2">passenger Details</h4>
                  <form action="" onSubmit={handleSubmit}  >
                     <div className="justify-content-around row">
                        {busData.selectedSeat.map((item) => { 
                           return <div className="form-group border p-3 col-12 col-md-5  " key={item}>
                              <label htmlFor=""className="text-center d-block">Seat no : {item}</label>
                                 <input 
                                    type="text"  
                                    name={`name${item}`} 
                                    onChange={handleChange} 
                                    required 
                                    className="form-control my-2" 
                                    placeholder="full name" 
                                 />

                                 <input 
                                    type="number" 
                                    min={0} max={100}  
                                    name={`age${item}`} 
                                    onChange={handleChange} 
                                    required 
                                    className="form-control " 
                                    placeholder="age" 
                                 />
                           {/* GENDER */}
                        <div className="col-12">
                           <label htmlFor="dob">Gender<sup className="text-danger">*</sup></label>
                           <div className="d-inline mx-2" >
                              <div className="form-check form-check-inline">
                                 <input 
                                    className="form-check-input" 
                                    type="radio"
                                    name={`gender${item}`} 
                                    id={`male${item}`} 
                                    required 
                                    onChange={handleChange} 
                                    value="male"
                                 />
                                 <label className="form-check-label" htmlFor={`male${item}`} >Male</label>
                              </div>
                              <div className="form-check form-check-inline ">
                                 <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name={`gender${item}`} 
                                    id={`female${item}`}  
                                    required
                                    onChange={handleChange} 
                                    value="female"
                                 />
                                 <label className="form-check-label" htmlFor={`female${item}`} >Female</label>
                              </div>
                           </div>
                        </div>


                              </div>
                        })}
                     </div>
                     <div className="text-center">
                        <input type="submit" className="btn btn-theme" value="payment" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}
