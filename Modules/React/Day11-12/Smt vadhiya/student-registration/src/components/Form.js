import React, { Component } from 'react'
import { StateOption , DistrictOption } from './Option'

export default class Form extends Component {
   render() {
      const {
            stdFirstName,stdLastName
            ,stdDob,stdState
            ,stdDist,stdAddress 
            ,pinCode,stdMiddleName,stdLanguage

            ,fatherMiddleName,fatherFirstName
            ,fatherLastName
            ,fatherEmail,fatherPhone
            ,fatherEducation,fatherDesignation

            ,motherMiddleName,motherFirstName
            ,motherLastName
            ,motherEmail,motherPhone
            ,motherEducation,motherDesignation,

            relFirstName,relLastName,relMiddleName

         } = this.props.data
      const { handleChange } = this.props
      const {validAge} = this.props.valid
      return (
         <>
            <form action="">
               <div className="card">
               <div className="card-header bg-dark text-center">
                  <h1 className="display-4 text-white">Student Admission Form</h1>
               </div>
               <div className="card-body row gy-3 justify-content-between align-items-center">

               <div className="col-12 text-center">
                  <h3>Student's Details</h3>
               </div>
               {/** FULL NAME */}
                  <div className="col-12 col-md-2">
                     <label htmlFor="">FullName</label>
                  </div>
                  <div className="col-12 col-md-10 d-flex gap-2">
                     <input 
                        type="text" 
                        id="name" 
                        className="form-control" 
                        placeholder="First Name"
                        required="required"
                        name="stdFirstName"
                        value={stdFirstName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="stdMiddleName"
                        className="form-control" 
                        placeholder="Middle Name"
                        required="required"
                        value={stdMiddleName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="stdLastName"
                        className="form-control" 
                        placeholder="Last Name"
                        required="required"
                        value={stdLastName}
                        onChange={handleChange}
                     />
                  </div>

               {/** STATE */}
                  <div className="col-12 col-md-6">
                     <div className="row">
                        <div className="col-4">
                              <label htmlFor="state">State</label>
                        </div>
                        <div className="col-8">
                           <select className="form-control"  id="state" name="stdState" value={stdState} onChange={handleChange}>
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
                           <select className="form-control " id="district" name="stdDist" value={stdDist} onChange={handleChange}>
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
                           required="required"
                           value={pinCode}
                           onChange={handleChange}
                        />
                        
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
                           required="required"
                           value={stdDob}
                           onChange={(e) =>{ handleChange(e); validAge(e);  }}
                        />
                        </div>
                     </div>
                  </div>   

               {/** language */}
                  <div className="col-12 col-md-6">
                     <div className="row">
                        <div className="col-4">
                           <label htmlFor="language">First language</label>
                        </div>
                        <div className="col-8">
                           <input 
                           type="text" 
                           id="language" 
                           className="form-control" 
                           name="stdLanguage"
                           required="required"
                           value={stdLanguage}
                           onChange={(e) =>{handleChange(e)}}
                        />
                        </div>
                     </div>
                  </div>   


               {/*    <div className="col-12 col-md-6">
                        <div className="row">
                           <div className="col-4">
                              
                           </div>
                           <div className="col-8">
                              
                           </div>
                           </div>
                        </div>   
               */}
               <div className="col-12 text-center">
                  <h3>Father's Details</h3>
               </div>
               {/** FULL NAME */}
                  <div className="col-12 col-md-2">
                     <label htmlFor="fatherName">FullName</label>
                  </div>
                  <div className="col-12 col-md-10 d-flex gap-2">
                     <input 
                        type="text" 
                        id="fatherName" 
                        className="form-control" 
                        placeholder="First Name"
                        required="required"
                        name="fatherFirstName"
                        value={fatherFirstName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="fatherMiddleName"
                        className="form-control" 
                        placeholder="Middle Name"
                        required="required"
                        value={fatherMiddleName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="fatherLastName"
                        className="form-control" 
                        placeholder="Last Name"
                        required="required"
                        value={fatherLastName}
                        onChange={handleChange}
                     />
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
                           <select className="form-control " id="education" name="fatherEducation" value={fatherEducation} onChange={handleChange}>
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
                           <select className="form-control dropdown" id="designation" name="fatherDesignation" value={fatherDesignation} onChange={handleChange}>
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


               <div className="col-12 text-center">
                  <h3>Mother's Details</h3>
               </div>
               {/** FULL NAME */}
                  <div className="col-12 col-md-2">
                     <label htmlFor="motherName">FullName</label>
                  </div>
                  <div className="col-12 col-md-10 d-flex gap-2">
                     <input 
                        type="text" 
                        id="motherName" 
                        className="form-control" 
                        placeholder="First Name"
                        required="required"
                        name="motherFirstName"
                        value={motherFirstName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="motherMiddleName"
                        className="form-control" 
                        placeholder="Middle Name"
                        required="required"
                        value={motherMiddleName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="motherLastName"
                        className="form-control" 
                        placeholder="Last Name"
                        required="required"
                        value={motherLastName}
                        onChange={handleChange}
                     />
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
                           <select className="form-control " id="education" name="motherEducation" value={motherEducation} onChange={handleChange}>
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
                           <select className="form-control dropdown" id="designation" name="motherDesignation" value={motherDesignation} onChange={handleChange}>
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


               <div className="col-12 text-center">
                  <h3>Emergency Contact Details</h3>
               </div>
               {/** FULL NAME */}
                  <div className="col-12 col-md-2">
                     <label htmlFor="relName">FullName</label>
                  </div>
                  <div className="col-12 col-md-10 d-flex gap-2">
                     <input 
                        type="text" 
                        id="relName" 
                        className="form-control" 
                        placeholder="First Name"
                        required="required"
                        name="relFirstName"
                        value={relFirstName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="relMiddleName"
                        className="form-control" 
                        placeholder="Middle Name"
                        required="required"
                        value={relMiddleName}
                        onChange={handleChange}
                     />

                     <input 
                        type="text" 
                        name="relLastName"
                        className="form-control" 
                        placeholder="Last Name"
                        required="required"
                        value={relLastName}
                        onChange={handleChange}
                     />
                  </div>




               </div>
               </div>
            </form> 
         </>
      )
   }
}
