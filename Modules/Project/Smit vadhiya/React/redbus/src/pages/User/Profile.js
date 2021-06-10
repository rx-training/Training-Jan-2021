import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {BsGear} from 'react-icons/bs'
import {FaTicketAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Profile = () => {

   const [id, setid] = useState("")
   const [userData, setuserData] = useState({
      DOB:"",
      gander : "male"
   })

   const [MyTrips, setMyTrips] = useState([])

   const [isEnable, setIsEnable] = useState(true)

   const [errors, setErrors] = useState({
      DOB : "",
      email : "",
      phoneNumber : ""
   })

   const [isProfile, setisProfile] = useState(true)

   const handleProfile=()=>{
      setisProfile(true)
   }

   const handleTrip=()=>{
      setisProfile(false)
   }

   const handleCancel = () => {
      setIsEnable(true)
      const {id,token} = JSON.parse(localStorage.getItem('tokenData'))
      UserService.userGetById(id,token).then(res => {
         setuserData({...res.data})
      })
   }

   const handleEdited = () => {

      var temp = 0
      for(var i in errors){
         if(errors[i].length > 0){
            temp = 1 
            break;
         }
      }

      if(temp === 0){
         setIsEnable(true)       
         const {id,token} = JSON.parse(localStorage.getItem('tokenData'))
         UserService.userUpdateById(id,userData,token).then(res =>{
            console.log(res.data);
         })
      }
   }

   useEffect(() => {
      const {id,token} = JSON.parse(localStorage.getItem('tokenData'))
      setid(id)
      UserService.userGetById(id,token).then(res => {
         setuserData({...res.data})
      })

      UserService.userGetMyTrip(id,token).then(res => {
         setMyTrips(res.data);
         console.log(res.data);
      })

   }, [])

   const handleCancelTicket = (id) =>{
      console.log(id);
   }

   const handleChange = (e) =>{
      const {name, value} = e.target
      setuserData({...userData,[name] : value})

      switch(name){
         case (name.match(/Number$/) || {}).input :  
            errors[name] = value.length !== 10 && value.length !== 0 ? "Phone number must be of 10 digit" : ( isNaN(value)  ? "Only Numbers are valid" : "")
            break;

         case (name.match(/email$/) || {}).input : 
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/; 
            errors[name] =  value.match(pattern) || value.length === 0 ? "" : "Please enter valid Email"
            break; 

         case ('DOB') : 
            pattern = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/; 
            errors[name] =  value.match(pattern) || value.length === 0 ? "" : "Date Should be in  YYYY-MM--DD "
            break;

         default :
      }
   }

   return (
      <div className="bg-light profile h-100 mt-5 py-5">
         <div className="row justify-content-between">
            <div className="col-12 profile-nav text-capitalize d-flex flex-row text-center  flex-md-column justify-content-center h-100  col-md-3 p-0 ">
               <div className="p-2 item" onClick={handleProfile}>
                  <HiOutlineUserCircle className="icon" /> {userData.firstName}  {userData.lastName} 
               </div>
            
               <div className="p-2  item" onClick={handleProfile}>
                  <BsGear className="icon" /> Profile
               </div>

               <div className="p-2  item" onClick={handleTrip} >
                  <FaTicketAlt className="icon" />  My Trip
               </div>
            </div>
            <div className="col-12 col-md-9  p-5">

               {isProfile
               ?<div className="bg-white my-profile text-capitalize p-5">

                  <div className="text-right">
                     {isEnable 
                     ? <button className="btn btn-success" onClick={() => {setIsEnable(false)}} >Edit</button>
                     :  <> 
                           <button className="btn btn-danger" onClick={handleCancel} >Cancel</button> 
                           <button className="btn btn-success" onClick={handleEdited} >Change</button>
                        </>
                     }
                  </div>
                  <div className="" >
                  <form action="">
                     <div className="d-flex  flex-column flex-md-row justify-content-between">
                        <div>
                           <span className="lead">first Name</span>
                              <input 
                                 type="text" 
                                 className="value text-uppercase " 
                                 value={userData.firstName} 
                                 disabled={isEnable}
                                 required
                                 name='firstName'
                                 onChange={handleChange}
                              />
                        </div>

                        <div>
                           <span className="lead">last Name</span>   
                              <input 
                                 type="text" 
                                 className="value text-uppercase" 
                                 value={userData.lastName} 
                                 required 
                                 disabled={isEnable}
                                 name='lastName'
                                 onChange={handleChange}
                              />
                        </div>
                        

                        <div>
                           <span className="lead">date of birth</span>
                           <div>
                              <input 
                                 type="text" 
                                 name="DOB"
                                 onChange={handleChange}
                                 /* onFocus={(e) => {e.target.type = 'date'; e.target.value = userData.date}} */
                                 onBlur={(e) => e.target.type = 'text'} 
                                 disabled={isEnable}
                                 value={userData.DOB.slice(0,10)}
                              />
                           </div>
                           <span className="text-danger" >
                              {errors.DOB.length > 0? `${errors.DOB}` : null }
                           </span>
                        </div>
                     </div>

                     {/* GENDER */}
                     <div className=" my-3">
                        <span className="lead">Gander</span>
                        <div className="" >
                           <div className="form-check form-check-inline">
                              <input 
                                 className="form-check-input" 
                                 type="radio" 
                                 disabled={isEnable}
                                 name="gander" 
                                 id="male"
                                 required
                                 checked={userData.gander === 'male'}
                                 onChange={handleChange}
                                 value='male'
                              />
                              <label className="form-check-label" htmlFor="male">Male</label>
                           </div>
                           <div className="form-check form-check-inline ml-5">
                              <input 
                                 className="form-check-input" 
                                 type="radio" 
                                 name="gander" 
                                 id="female" 
                                 required 
                                 disabled={isEnable}
                                 checked={userData.gander === 'female'}
                                 onChange={handleChange} 
                                 value="female"
                              />
                              <label className="form-check-label" htmlFor="female">Female</label>
                           </div>
                        </div>
                     </div>
                     <hr />
                     <div className="text-center lead">
                        CONTACT DETAILS
                     </div>
                     <hr />
                  
                     <div className="row p-0 justify-content-between">
                           <div className="col-12 col-lg-6">
                              <span className="lead p-0 col-12">email</span><br />
                              <input 
                                 type="email" 
                                 className="value text-lowercase w-100" 
                                 value={userData.email} 
                                 required 
                                 disabled
                                 name='email'
                                 onChange={handleChange}
                              />
                              <span className="text-danger" >
                              {errors.email.length > 0? `${errors.email}` : null }
                           </span>     
                           </div>
                           <div  className="col-12  col-lg-6">
                              <span className="lead p-0 col-12">Phone</span><br />
                              <input 
                                 type="text" 
                                 className="value" 
                                 value={userData.phoneNumber} 
                                 required 
                                 disabled={isEnable}
                                 name='phoneNumber'
                                 onChange={handleChange}
                              /><br />
                              <span className="text-danger" >
                                 {errors.phoneNumber.length > 0? `${errors.phoneNumber}` : null }
                              </span>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               : 
               <div className="myTrip container p-3">
                  
                        {MyTrips.length === 0 
                           ?  <div className="text-center text-danger p-4 h4">
                                 No trips found
                              </div>
                           :  
                           <>
                              {MyTrips.map(trip => {

                                 const flag = new Date(trip.tripDate) > new Date()
                                 return (
                                    <div key={trip._id} className="row border border-success m-2 p-3 text-capitalize justify-content-between">
                                       <div className="col-12 text-center">
                                          <h3>
                                             {trip.routeId.busNumber.busName}
                                          </h3>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             From : {trip.fromCity}
                                          </h4>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             To : {trip.toCity}
                                          </h4>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             Departure Time : {trip.departureTime}
                                          </h4>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             arrival Time : {trip.destinationTime}
                                          </h4>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             journy date : {trip.tripDate.slice(0,10)}
                                             
                                          </h4>
                                       </div>
                                       <div className="col-12 col-md-5">
                                          <h4>
                                             seat no : {JSON.stringify(trip.seatNo)}
                                          </h4>
                                       </div>
                                       {flag ? 
                                       <div className="col-12 text-center">
                                          <button className="btn btn-danger" onClick={()=> handleCancelTicket(trip._id)} >cancel</button>
                                       </div> : null }
                                    </div>
                                 )
                              })}
                              </>

                        }

               </div>
            }

            </div>
         </div> 
      </div>
   )
}
