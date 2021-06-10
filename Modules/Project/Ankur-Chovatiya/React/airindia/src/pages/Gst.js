import React from 'react'
import {IoArrowRedoCircleSharp} from 'react-icons/io5'
function Gst() {
    return (
        <>
        <div className="gst container">
            <h1>GST </h1><hr />
            <h4 className="text-danger">GST Registration</h4>
            <p>With effect from July 1, 2017, the Goods and Services Tax (GST) introduced in India replaces some of the existing indirect taxes. All passengers requiring GST invoice for their tickets are requested to complete the one-time registration on our website by entering the relevant details.</p>
            <p>Before commencing registration process, please keep the following details ready</p>
            <br />
            <p><IoArrowRedoCircleSharp></IoArrowRedoCircleSharp>Company PAN (including scanned copy)</p>
            <p><IoArrowRedoCircleSharp></IoArrowRedoCircleSharp>Company TAN details (including scanned copy)</p>
            <p><IoArrowRedoCircleSharp></IoArrowRedoCircleSharp>GST details (including scanned copy)</p>
            <p><IoArrowRedoCircleSharp></IoArrowRedoCircleSharp>ARN details (including scanned copy)</p>
            <p><IoArrowRedoCircleSharp></IoArrowRedoCircleSharp>Company address and contact details</p><br />
            <p>Once registered please provide details of travel on a weekly basis to ensure your Input Tax Credit.</p>
            <p className="text-danger">As per Section 34 of GST Act, Refund of K3 will not be allowed after 30th September 2020 for tickets issued during the period 1st April 2019 to 31st March 2020 and / or reissued up to 30th September 2020. The last date for submission of refunds is 30th September 2020.</p>
            <p>To Register / Login Click Here</p>

             <h4 className="text-danger"> FAQ</h4>
             <h5 className="text-danger underline">GST Invoicing FAQ</h5>  
             <p>For any technical errors faced while registering on the GST portal or while uploading the Ticket details please send your queries to<b className="text-danger">GSTsupport@airindia.in</b></p> 
             <p>Last date for uploading July '18 is up to 03rd August 2018.</p>
             <p>Last date for uploading August '18 is up to 03rd September 2018.</p>
        </div>
        </>
    )
}

export default Gst
