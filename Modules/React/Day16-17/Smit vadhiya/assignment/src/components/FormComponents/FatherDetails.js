import React from 'react'

export const FatherDetails = ({data,handleChange}) => {
   const {fatherMiddleName,fatherFirstName
            ,fatherLastName
            ,fatherEmail,fatherPhone 
            ,fatherEducation,fatherDesignation,errors} = data
   return (
      <>
         <div className="col-12 text-center">
            <h3>Father's Details</h3>
         </div>
         {/** FULL NAME */}
            <div className="col-12 col-md-2">
               <label htmlFor="fatherName">FullName</label>
            </div>
            <div className="col-12 col-md-10 d-flex gap-2">
               <div className="w-100">
                  <input 
                     type="text" 
                     id="fatherName" 
                     className="form-control" 
                     placeholder="First Name"
                     
                     name="fatherFirstName"
                     value={fatherFirstName}
                     onChange={handleChange}
                  />
                     {errors.fatherFirstName.length > 0 && 
                        <span className="text-danger">{errors.fatherFirstName}</span>  }
               </div>
               <div className="w-100">
                  <input 
                     type="text" 
                     name="fatherMiddleName"
                     className="form-control" 
                     placeholder="Middle Name"
                     
                     value={fatherMiddleName}
                     onChange={handleChange}
                  />
                     {errors.fatherMiddleName.length > 0 && 
                        <span className="text-danger">{errors.fatherMiddleName}</span>  }
               </div>
               <div className="w-100">
                  <input 
                     type="text" 
                     name="fatherLastName"
                     className="form-control" 
                     placeholder="Last Name"
                     
                     value={fatherLastName}
                     onChange={handleChange}
                  />
                     {errors.fatherLastName.length > 0 && 
                        <span className="text-danger">{errors.fatherLastName}</span>  }
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
                        name="fatherEmail"
                        placeholder="Email id"
                        
                        className="form-control"
                        value={fatherEmail} 
                        onChange={handleChange}
                     />
                     {errors.fatherEmail.length > 0 && 
                        <span className="text-danger">{errors.fatherEmail}</span>  }
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
                        name="fatherPhone"
                        
                        value={fatherPhone}
                        onChange={handleChange}
                        placeholder="Phone number"
                     />
                     { errors.fatherPhone.length > 0 && 
                        <span className="text-danger">{errors.fatherPhone}</span>  }
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
                        name="fatherEducation" 
                        value={fatherEducation} 
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
                        name="fatherDesignation" 
                        value={fatherDesignation} 
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
