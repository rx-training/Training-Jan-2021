import React from 'react'

export const EmergencyContact = ({data,handleChange}) => {
   const {relFirstName,relLastName,
            relMiddleName,relPhone,
            relation,errors} = data 
   
   return (
      <>
         <div className="col-12 text-center">
            <h3>Emergency Contact Details</h3>
         </div>
         {/** FULL NAME */}
            <div className="col-12 col-md-2">
               <label htmlFor="relName">FullName</label>
            </div>
            <div className="col-12 col-md-10 d-flex gap-2">
               <div className="w-100">
                  <input 
                     type="text" 
                     id="relName" 
                     className="form-control" 
                     placeholder="First Name"
                     
                     name="relFirstName"
                     value={relFirstName}
                     onChange={handleChange}
                  />
                  {errors.relFirstName.length > 0 && 
                     <span className="text-danger">{errors.relFirstName}</span>  }
               </div>
               <div className="w-100">
                  <input   
                     type="text" 
                     name="relMiddleName"
                     className="form-control" 
                     placeholder="Middle Name"
                     
                     value={relMiddleName}
                     onChange={handleChange}
                  />
                  {errors.relMiddleName.length > 0 && 
                     <span className="text-danger">{errors.relMiddleName}</span>  }
               </div>
               <div className="w-100">
                  <input 
                     type="text" 
                     name="relLastName"
                     className="form-control" 
                     placeholder="Last Name"
                     
                     value={relLastName}
                     onChange={handleChange}
                  />
                  {errors.relLastName.length > 0 && 
                     <span className="text-danger">{errors.relLastName}</span>  }
               </div>
            </div>

         {/** RELATION NAME */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="relation">Relation</label>
                  </div>
                  <div className="col-8">
                     <input 
                        type="text" 
                        id="relation" 
                        name="relation"
                        
                        placeholder="Relation"
                        className="form-control"
                        value={relation} 
                        onChange={handleChange}
                     />
                  </div>
               </div>
            </div>

         {/* RELATION PHONE NUMBER */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="relPhone">Phone</label>
                  </div>
                  <div className="col-8">
                     <input 
                        type="text" 
                        id="relPhone" 
                        name="relPhone"
                        
                        placeholder="PhoneNumber"
                        className="form-control"
                        value={relPhone} 
                        onChange={handleChange}
                     />
                     {errors.relPhone.length > 0 && 
                        <span className="text-danger">{errors.relPhone}</span>  }
                  </div>
               </div>
            </div>
      </>
   )
}
