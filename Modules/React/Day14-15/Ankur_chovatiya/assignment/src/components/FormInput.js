import React from 'react'

export default function FormInput(props) {
    const {handleSubmit,handleChange,firstName,lastName,collegeName,collegeAddress} = props;
    return (
        <div className="container card card-body my-3 bg-light">
                <h2 className="mx-auto text-center">Student ID Card Form:</h2>
                <form className="row" onSubmit={handleSubmit} >
                    <div className="form-group col-8 mx-auto my-2">
                        <label className="">Student's FirstName:</label>
                        <input name="firstName" type="text" className=" form-control text-capitalize" placeholder="FirstName" value={firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mx-auto my-3">
                        <label className="">Student's LastName:</label>
                        <input name="lastName" type="text" className=" form-control text-capitalize" placeholder="LastName" value={lastName} onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mx-auto my-3">
                        <label className="">Student's CollegeName:</label>
                        <input name="collegeName" type="text" className=" form-control text-capitalize" placeholder="CollegeName" value={collegeName} onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mx-auto my-3">
                        <label className="">Student's CollegeAddress:</label>
                        <input name="collegeAddress" type="text" className=" form-control text-capitalize" placeholder="CollegeAddress" value={collegeAddress} onChange={handleChange} />
                    </div>
                    <div className="form-group col-8 mx-auto my-3">
                        <label className="">Student's Image:</label>
                        <input name="img" type="file" className=" form-control text-capitalize" placeholder="CollegeAddress" onChange={handleChange} />
                        
                    </div>
                    <div className="form-group col-8 mx-auto my-3">
                        <label className="">Student's Image:</label>
                        <input name="collegeLogo" type="file" className=" form-control text-capitalize" placeholder="CollegeAddress" onChange={handleChange} />
                    </div>
                    <button type="submit" className="col-5 mx-auto btn  btn-primary text-uppercase mt-3">Submit</button>
                </form>
            </div>
    )
}
