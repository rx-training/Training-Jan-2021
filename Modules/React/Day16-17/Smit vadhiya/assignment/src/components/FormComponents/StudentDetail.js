import React from 'react'
import {StateOption,DistrictOption } from './SelectOptions/Option'

export const StudentDetail = ({data,handleChange}) => {
   const {
            stdFirstName,stdLastName
            ,stdDob,stdState
            ,stdDist,stdAddress 
            ,pinCode,stdMiddleName,stdLanguage,errors
         } = data
   return (
      <>
         <div className="col-12 text-center">
            <h3>Student's Details</h3>
         </div>
         {/** FULL NAME */}
            <div className="col-12 col-md-2">
               <label htmlFor="">FullName</label>
            </div>
            <div className="col-12 col-md-10 d-flex gap-2">
               <div className="w-100">
                  <input 
                     type="text" 
                     id="name" 
                     className="form-control" 
                     placeholder="First Name"
                     required
                     name="stdFirstName"
                     value={stdFirstName}
                     onChange={handleChange}
                  />
                     {errors.stdFirstName.length > 0 && 
                        <span className="text-danger">{errors.stdFirstName}</span>  }
               </div>
               <div className="w-100">
               <input 
                  type="text" 
                  name="stdMiddleName"
                  className="form-control" 
                  placeholder="Middle Name"
                  required
                  value={stdMiddleName}
                  onChange={handleChange}
               />
                  {errors.stdMiddleName.length > 0 && 
                     <span className="text-danger">{errors.stdMiddleName}</span> }
            </div>   
            <div className="w-100">
               <input 
                  type="text" 
                  name="stdLastName"
                  className="form-control" 
                  placeholder="Last Name"
                  
                  value={stdLastName}
                  onChange={handleChange}
               />
                  {errors.stdLastName.length > 0 &&  
                     <span className="text-danger">{errors.stdLastName}</span>  }
            </div>
            </div>

         {/** STATE */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                        <label htmlFor="state">State</label>
                  </div>
                  <div className="col-8">
                     <select 
                        className="form-control"  
                        id="state" 
                        name="stdState"
                        value={stdState} 
                        onChange={handleChange}
                     >
                        <option value=""  disabled="disabled">-- select one --</option>
                        <StateOption />
                     </select>
                  </div>
               </div>
            </div>


         {/** district */} 
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                        <label htmlFor="district">District</label>
                  </div>
                  <div className="col-8">
                     <select 
                        className="form-control " 
                        id="district" 
                        name="stdDist" 
                        value={stdDist} 
                        onChange={handleChange}
                        
                     >
                        <option value="" disabled="disabled">-- select district --</option>
                        <DistrictOption  state={stdState}/>
                     </select>
                  </div>
               </div>
            </div>

         {/** Adderess */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="address">Address</label>
                  </div>
                  <div className="col-8">
                     <textarea 
                        type="text" 
                        id="address" 
                        name="stdAddress"
                        className="form-control" 
                        
                        placeholder="Address" 
                        value={stdAddress}
                        onChange={handleChange}
                     />
                  </div>
               </div>
            </div> 

         {/** pin code */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="pin">Pin code</label>
                  </div>
                  <div className="col-8">
                     <input 
                     type="text" 
                     id="pin" 
                     className="form-control" 
                     name="pinCode"
                     placeholder="pin code"
                     
                     value={pinCode}
                     onChange={handleChange}
                  />
                  {errors.pinCode.length > 0 && 
                     <span className="text-danger">{errors.pinCode}</span>  }
                  </div>
               </div>
            </div> 

         {/** DOB */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="dob">Date of birth</label>
                  </div>
                  <div className="col-8">
                     <input 
                     type="date" 
                     id="dob" 
                     className="form-control"
                     name="stdDob"
                     
                     value={stdDob}
                     onChange={handleChange}
                  />
                  { errors.stdDob.length > 0 && 
                     <span className="text-danger">{errors.stdDob}</span> }
                  </div>
               </div>
            </div>   

         {/** language */}
            <div className="col-12 col-md-6">
               <div className="row">
                  <div className="col-4">
                     <label htmlFor="language">Language</label>
                  </div>
                  <div className="col-8">
                     <input 
                     type="text" 
                     id="language" 
                     className="form-control" 
                     name="stdLanguage"
                     
                     value={stdLanguage}
                     onChange={handleChange}
                     placeholder="First Language"
                  />
                  </div>
               </div>
            </div> 
      </>
   )
}
