import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

export const NewBusForm = (props) => {

   const {data,handleChange, handleSubmit} = props

   return (
      <div className="p-0 text-capitalize">
         <form onSubmit={handleSubmit}>
            <div className="row my-2">
               <h4 className="col-12 col-md-4 ">
                  Busnumber
               </h4>
               <div className="col-12 col-md-6">
                  <input 
                     type="text" 
                     className="form-control" 
                     name='_id'
                     placeholder="Eg : GJ01MD1987"
                     onChange={handleChange}
                     value={data._id}
                     pattern="^[A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9][0-9]$"
                     title="Busnumber shouyld be in this formmat GJ01MD1987"
                     required
                     disabled={data.isUpdate}
                  />
               </div>
            </div>

            <div className="row  my-2">
               <h4 className="col-12 col-md-4 ">
                  Bus Name
               </h4>
               <div className="col-12 col-md-6">
                  <input 
                     type="text" 
                     className="form-control" 
                     name='busName'
                     placeholder='Enter name of bus'
                     onChange={handleChange}
                     required
                     value={data.busName}
                  />
               </div>
            </div>

            <div className="row my-2">
               <h4 className="col-12 col-md-4 ">
                  type
               </h4>
               <div className="col-12 col-md-6">
                  <select 
                     type="text" 
                     className="form-control" 
                     name='busType'
                     onChange={handleChange}
                     required
                     value={data.busType}

                  >
                     <option value="">--select bus type-- </option>
                     <option value="non ac sleeper(2x1)">non ac sleeper(2x1)</option>
                     <option value="ac sleeper(2x1)">ac sleeper(2x1)</option>
                     <option value="non ac seater(3x2)">non ac seater(3x2)</option>
                     <option value="ac seater(2x1)">ac seater(2x1)</option>

                  </select>
               </div>
            </div>
            <input type="submit" className={`btn btn-${data.isUpdate ? "secondary" :"success"} d-flex mt-3 mx-auto`} value={data.isUpdate ? "Update" :"Add"} />
         </form>
      </div>
   )
}
