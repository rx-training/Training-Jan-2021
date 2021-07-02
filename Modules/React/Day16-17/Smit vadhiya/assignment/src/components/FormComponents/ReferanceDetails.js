import React from 'react'

export const ReferanceDetails = ({data, handleChange}) => {
   const {refAddress,refFirstName,refLastName,refPhone,errors} = data
   
   return (
      <>
         <div className="col-12 text-center">
            <h3>Reference Details</h3>
         </div>
      {/** FULL NAME */}
         <div className="col-12 col-md-2">
            <label htmlFor="refName">FullName</label>
         </div>
         <div className="col-12 col-md-10 d-flex gap-2">
            <div className="w-100">
               <input 
                  type="text" 
                  id="refName" 
                  className="form-control" 
                  placeholder="First Name"
                  
                  name="refFirstName"
                  value={refFirstName}
                  onChange={handleChange}
               />
               {errors.refFirstName.length > 0 && 
                  <span className="text-danger">{errors.refFirstName}</span>  }
            </div>
            <div className="w-100">
               <input 
                  type="text" 
                  name="refLastName"
                  className="form-control" 
                  placeholder="Last Name"
                  
                  value={refLastName}
                  onChange={handleChange}
               />
               {errors.refLastName.length > 0 && 
                  <span className="text-danger">{errors.refLastName}</span>  }
            </div>
         </div>

      {/* REF ADDRESS */}
         <div className="col-12 col-md-6">
            <div className="row">
               <div className="col-4">
                  <label htmlFor="refAddress">Address</label>
               </div>
               <div className="col-8">
                  <textarea 
                     type="text" 
                     id="refAddress" 
                     name="refAddress"
                     
                     className="form-control"
                     placeholder="Address" 
                     value={refAddress}
                     onChange={handleChange}
                  />
               </div>
            </div>
         </div> 


      
         {/* REF PHONE NUMBER */}
         <div className="col-12 col-md-6">
            <div className="row">
               <div className="col-4">
                  <label htmlFor="refPhone">Phone</label>
               </div>
               <div className="col-8">
                  <input 
                     type="text" 
                     id="refPhone" 
                     name="refPhone"
                     placeholder="PhoneNumber"
                     
                     className="form-control"
                     value={refPhone} 
                     onChange={handleChange}
                  />
                  {errors.refPhone.length > 0 && 
                     <span className="text-danger">{errors.refPhone}</span>  }
               </div>
            </div>
         </div>
      </>
   )
}
