import React, { useState }  from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { GiModernCity } from 'react-icons/gi'
import { MdDateRange } from 'react-icons/md'
import { withRouter } from 'react-router';
import { RedbusContext } from '../../../context/context'
import AdminServices from '../../../services/AdminServices';


const SearchForm = () => { 

   const [cities, setCities] = useState(['rajkot','ahmedabad','bhavnagar'])
   const [tempFromCities, settempFromCities] = useState([])
   const {fromCity,toCity,date,handleChange,handleSearch} = useContext(RedbusContext)
   const [tempToCity, settempToCity] = useState([])

   const handleSuggetions = (e) =>{
      const {value} = e.target
      settempFromCities(cities.filter((city) => city.toLowerCase().indexOf(value.toLowerCase()) > -1))
   }

   const handleSuggetionToCIty = (e) =>{
      const {value} = e.target
      settempToCity(cities.filter((city) => city.toLowerCase().indexOf(value.toLowerCase()) > -1))
   }

   useEffect(() => {
      AdminServices.getAllCity().then(res => {
         const myCities = res.data.map(city => {
            return city.cityName
         })
         setCities(myCities);
      })
   }, [])

   const selectCity = (e) =>{
      let data = {
         target : JSON.parse(e.target.value)
      }
      const {name, value} = data.target
      handleChange(data)
      console.log(name, value);
      settempFromCities([])
      settempToCity([])
   }

      return(
         <div className="">
            <form action="" onSubmit={(e) => handleSearch(e)} >
               <div className="container">
                  <div className="row no-gutters mx-auto">
                     <div className="col-12 col-sm-6 col-md-3 mx-auto">
                        <div className="input-group border">
                           <div className="input-group-prepend">
                              <span className="input-group-text "><GiModernCity /></span>
                           </div>
                           <input
                              type="text" 
                              className="form-control" 
                              name="fromCity"
                              placeholder="FROM"
                              value={fromCity}
                              onChange={(e) => {handleChange(e); handleSuggetions(e) ;}}
                              required
                           />
                        </div>
                        {fromCity.length>0 ? <div className="suggetion" >
                           <ul name="fromCity" className="list-unstyled bg-white"  >
                              {tempFromCities.map(city => 
                              <option name="fromCity" value={JSON.stringify({name:"fromCity",value : city})} onClick={(e) => selectCity(e)} >
                                 {city}
                              </option>)}
                           </ul>
                        </div>: null}
                     </div>
                     <div className="col-12 col-sm-6 col-md-3 mx-auto">
                        <div className="input-group border">
                           <div className="input-group-prepend">
                              <span className="input-group-text ">
                                 <GiModernCity />
                              </span>
                           </div>                           
                           <input 
                              type="text" 
                              className="form-control" 
                              name="toCity"
                              placeholder="TO"
                              value={toCity}
                              onChange={(e) => {handleChange(e); handleSuggetionToCIty(e) ;}}
                              required
                           />
                        </div>
                        {toCity.length>0 ? <div className="suggetion" >
                           <ul className="list-unstyled bg-white"  >
                              {tempToCity.map(city => 
                              <option   value={JSON.stringify({name:"toCity",value : city})} onClick={(e) => selectCity(e)} >
                                 {city}
                              </option>)}
                           </ul>
                        </div>: null}
                     </div> 
                     <div className="col-12 col-sm-6 col-md-3 mx-auto">
                        <div className="input-group border">
                           <div className="input-group-prepend">
                              <span className="input-group-text "><MdDateRange /></span>
                           </div>
                           <input 
                              type="date"
                              className="form-control" 
                              min={new Date().toISOString().split('T')[0]}
                              name="date"
                              value={date}
                              onChange={handleChange}
                              required
                           /> 
                        </div>
                     </div>
                     <div className="col-12 col-sm-6   col-md-3 mx-auto">
                        <input 
                           type="submit" 
                           className="btn btn-theme  w-100" 
                           value="search buses" 
                        />
                     </div>
                  </div>
               </div>
            </form>
         </div>
      )
}

export default withRouter(SearchForm)