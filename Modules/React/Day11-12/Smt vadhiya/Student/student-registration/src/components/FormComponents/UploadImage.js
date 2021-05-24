import React from 'react'

export const UploadImage = ({stdImg, handleChange}) => {
   return (
      <div className="row gy-2 align-items-center">
         <div className="col-3">
            <label htmlFor="state">Student Photo</label>
         </div>
         <div className="col-6">
            <input type="file" className="form-control" name="stdImg" onChange={handleChange}/>
         </div>
         <div className="col-3">
            <img src={stdImg} alt="" width="100px" className="img-fluid rounded-circle " />
         </div>
         
      </div>
   )
}
