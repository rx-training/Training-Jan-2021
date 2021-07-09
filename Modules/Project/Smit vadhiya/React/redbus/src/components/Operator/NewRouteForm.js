import React from 'react'

export const NewRouteForm = (props) => {

   const {data,handleChange, handleSubmit} = props

   return (
      <div className="p-0 text-capitalize">
         <form onSubmit={handleSubmit}>
            <div className="row my-2">
               <h4 className="col-12 col-md-4 ">
                  Busnumber
               </h4>
               <div className="col-12 col-md-6">
                  <select 
                     name="busNumber" 
                     className="form-control" 
                     onChange={handleChange}
                     value={data.busNumber}
                     required
                  > 
                     <option value="">--select bus--</option>
                     {data.buses.map(bus => {
                        return (
                           <option key={bus._id} value={bus._id}>{bus._id}</option>
                        )
                     })}
                  </select>
               </div>
            </div>

            <div className="row  my-2">
               <h4 className="col-12 col-md-4 ">
                  from
               </h4>
               <div className="col-12 col-md-6">
                  <select 
                     name="fromCity" 
                     className="form-control" 
                     onChange={handleChange}
                     value={data.fromCity}
                     required
                  >
                     <option value="">--select strat city--</option>
                     {data.cities.map(city => {
                        return (
                           <option key={city._id} value={city.cityName}>{city.cityName}</option>
                        )
                     })}
                  </select>
               </div>
            </div>

            <div className="row my-2">
               <h4 className="col-12 col-md-4 ">
                  To
               </h4>
               <div className="col-12 col-md-6">
                  <select 
                     name="toCity" 
                     className="form-control" 
                     onChange={handleChange}
                     value={data.toCity}
                     required
                  >
                     <option value="">--select end city--</option>
                     {data.cities.map(city => {
                        return (
                           <option key={city._id} value={city.cityName}>{city.cityName}</option>
                        )
                     })}
                  </select>
               </div>
            </div>
            <input type="submit" className={`btn btn-${data.isUpdate ? "secondary" :"success"} d-flex mt-3 mx-auto`} value={data.isUpdate ? "Update" :"Add"} />
         </form>
      </div>
   )
}
