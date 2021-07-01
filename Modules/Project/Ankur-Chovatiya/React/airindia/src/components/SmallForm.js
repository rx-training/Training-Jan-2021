import React, { useEffect, useState } from 'react'

function SmallForm(props) {

    // const [current , setCurrent] = useState(true)
    // const [extra , setExtra] = useState(false)

    const { firstName , lastName ,FFprogram , FFnumber , meal , speReq , cntcode , homeNumber , mobileNumber , primaryEmail , secondaryEmail } = props.data
    const {handleChange , person , data} = props

    

    return (
        <>
        { <div>
            <h1> {person} - Details</h1>
                <div className="row my-3">
                    <div className="col form-inline">
                    <select className="form-control" name={`${person}title`} value={data[`${person}title`]} onChange={(e) =>handleChange(e)} required>
                        <option selected>Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                    </select>
                    <input type="text" className="form-control" name={`${person}firstName`} value={data[`${person}firstName`]} onChange={(e) => handleChange(e)} placeholder="First name"  required/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" name={`${person}lastName`} value={data[`${person}lastName`]} onChange={(e) => handleChange(e)} placeholder="Last name" required/>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col">
                        <label>FREQUENT FLYER PROGRAM</label>
                        <select className="form-control" name={`${person}FFprogram`} value={data[`${person}FFprogram`]} onChange={(e) => handleChange(e)}>
                            <option selected>NONE</option>
                            <option value="air canada - aeroplan">Air Canada - Aeroplan</option>
                            <option value="air china - phoenix Miles">Air China - phoenix Miles</option>
                            <option value="air india - flying returns">Air India - Flying Returns</option>
                            <option value="copa airlines - connect Miles">copa Airlines - connectMiles</option>
                            <option value="united airlines milages plus">United Airlines milages Plus</option>
                            <option value="thia airways - royal orchaid plus">Thai Airways - Royal orchid plus</option>
                        </select>
                    </div>
                    <div className="col">
                        <label>FREQUENT FLYER NUMBER</label>
                        <input className="form-control" placeholder="FF Number" name={`${person}FFnumber`} value={data[`${person}FFnumber`]} onChange={(e) =>handleChange(e)}></input>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col">
                    <label className="text-left">MEAL SELECTION</label>
                    <select className="form-control" name={`${person}meal`} value={data[`${person}meal`]} onChange={(e) =>handleChange(e)}>
                        <option selected>No meal preference</option>
                        <option value="asian vag meal">Asian Vagetarian Meal </option>
                    </select>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col">
                        <label>SPECIAL ASSISTANCE REQUEST</label>
                        <select className="form-control" name={`${person}speReq`} value={data/[`${person}speReq`]} onChange={(e) => handleChange(e)}>
                            <option value="" selected>No sepecial Assistance Required</option>
                            <option value="wheelchair user , can manage steps">Wheelchair User , can manage steps</option>
                            <option value="deaf/hard of hearing">Deaf/Hard of Hearing</option>
                            <option value="blind/bad vision">Blind/Bad vision</option>
                            <option value="wheelchair/deaf">Wheelchair/Deaf</option>
                            <option value="wheelchair/blind">Wheelchair/Blind</option>
                            <option value="deaf/blind">Deaf/Blind</option>
                        </select>
                    </div>
                </div>



            </div>}
            </>
    )
}

export default SmallForm
