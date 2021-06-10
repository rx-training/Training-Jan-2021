import React from 'react'

export const MotherDetails = ({data, handleChange}) => {
   const {motherMiddleName,motherFirstName
            ,motherLastName
            ,motherEmail,motherPhone
            ,motherEducation,motherDesignation,errors} = data
   return (
      <>
         <div className="col-12 text-center">
            <h3>Mother's Details</h3>
         </div>
         {/** FULL NAME */}
            <div className="col-12 col-md-2">
               <label htmlFor="motherName">FullName</label>
            </div>
            <div className="col-12 col-md-10 d-flex gap-2">

               <div className="w-100">
                  <input 
                     type="text" 
                     id="motherName" 
                     className="form-control" 
                     placeholder="First Name"
                     
                     name="motherFirstName"
                     value={motherFirstName}
                     onChange={handleChange}
                  />
                  {errors.motherFirstName.length > 0 && 
                     <span className="text-danger">{errors.motherFirstName}</span>  }
               </div>
               <div className="w-100">
                  <input 
                     type="text" 
                     name="motherMiddleName"
                     className="form-control" 
                     placeholder="Middle Name"
                     
                     value={motherMiddleName}
                     onChange={handleChange}
                  />
                  {errors.motherMiddleName.length > 0 && 
                     <span className="text-danger">{errors.motherMiddleName}</span>  }
               </div>
               <div className="w-100">
                  <input 
                     type="text" 
                     name="motherLastName"
                     className="form-control" 
                     placeholder="Last Name"
                     
                     value={motherLastName}
                     onChange={handleChange}
                  />
                  {errors.motherLastName.length > 0 && 
                     <span className="text-danger">{errors.motherLastName}</span>  }
               </div>
            </div>

         {/** EMAIL */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="email">Email</label>
                  </div>
                  <div className="col-8">
                     <input 
                        type="email" 
                        id="email" 
                        name="motherEmail"
                        placeholder="Email id"
                        
                        className="form-control"
                        value={motherEmail} 
                        onChange={handleChange}
                     />
                     {errors.motherEmail.length > 0 && 
                        <span className="text-danger">{errors.motherEmail}</span>  }
                  </div>
               </div>
            </div>   

         {/** PHONE NUMBER */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="phone">Phone </label>
                  </div>
                  <div className="col-8">
                     <input 
                        type="text" 
                        id="phone" 
                        className="form-control" 
                        
                        name="motherPhone"
                        value={motherPhone}
                        onChange={handleChange}
                        placeholder="Phone number"
                     />
                     {errors.motherPhone.length > 0 && 
                        <span className="text-danger">{errors.motherPhone}</span>  }
                  </div>
               </div>
            </div>   

         {/** Education Qualification */}
            <div className="col-12 col-md-6">
               <div className="row align-items-center">
                  <div className="col-4">
                     <label htmlFor="education">Education Qualification </label>
                  </div>
                  <div className="col-8">
                     <select 
                        className="form-control " 
                        id="education" 
                        name="motherEducation" 
                        value={motherEducation} 
                        onChange={handleChange}
                        
                     >
                        <option value=""  disabled="disabled">-- select one --</option>
                        <option value="No formal education">No formal education</option>
                        <option value="Primary education">Primary education</option>
                        <option value="Secondary education">Secondary education or high school</option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">Doctorate or higher</option>
                     </select>
                  </div>
               </div>
            </div>   

         {/* designation */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="designation">Designation</label>
                  </div>
                  <div className="col-8">
                     <select 
                        className="form-control dropdown" 
                        id="designation" 
                        name="motherDesignation" 
                        value={motherDesignation} 
                        onChange={handleChange}
                        
                     >
                        <option value=""  disabled="disabled">-- select one --</option>
                        <option value="Employed">Employed</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Out of work">Out of work</option>
                        <option value="Homemaker">Homemaker</option>
                        <option value="Student">Student</option>
                        <option value="Retired">Retired</option>
                        <option value="Unable to work">Unable to work</option>
                     </select>
                  </div>
               </div>
            </div>   
      </>
   )
}
