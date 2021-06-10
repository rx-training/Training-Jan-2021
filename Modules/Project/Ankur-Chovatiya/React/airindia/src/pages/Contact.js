import React from 'react'

function Contact() {
    return (
        <>
        <div className="contact container">
            <h1>Customer Support</h1>
             <hr />
            <div className="support-img my-3">
                <img src="./img/contact-banner.jpg" />
            </div>

            <div className="my-3">
                <h5>Air India contact numbers for callers in India</h5>
                <p>Call 24x7 Customer Care numbers 0124-2641407 / 020-26231407 / 1860 233 1407 from MTNL / BSNL lines and Mobile / landlines of most private telecom operators in India only.</p>

            </div>

            <div className="my-3 contact-list">
                <h5>Air India contact numbers for callers outside India</h5>
                <table className="table bg-light" width="35%" >
                    <tr>
                        <td>USA & Canada:</td>
                        <td>1888 634 1407 (Toll Free)</td>
                    </tr>
                    <tr>
                        <td>UK</td>
                        <td>0800 048 9254 (Toll Free)</td>
                    </tr>
                    <tr>
                        <td>Australia</td>
                        <td>613 701 98270 (Toll Number) #</td>
                    </tr>
                    <tr>
                        <td>France</td>
                        <td>331 874 06644 (Toll Number) #</td>
                    </tr>
                    <tr>
                        <td>Germany</td>
                        <td>496925511337 (Toll Number) #</td>
                    </tr>
                    <tr>
                        <td>Singapore</td>
                        <td>800 101 4016 (Toll Free)</td>
                    </tr>
                </table>
                <small># Calls charged to callers as per applicable network call rates.</small>
            </div>


            <div>
                <h5 className="text-danger">Callers from all foreign locations can also call on</h5>
                <p>+ 91 124 2641407 (International call rates applicable)</p>
                <p>+ 91 20 2623 1407 (International call rates applicable)</p>
                <h5 className="text-danger">Call Centre Email IDs</h5>
                <table className="table bg-light" width="35%">
                    <tr>
                        <td rowSpan="3">E mail ID :</td>
                        <td>traveldocs@airindia.com</td>
                        </tr>
                    <tr>
                        <td>contactus@Airindia.com</td>
                    </tr>
                    <tr>
                        <td>(For forwarding scanned copies of travel documents / Updating FFP mileage)</td>
                    </tr>
                </table>
                
                <h5 className="text-danger">Helpdesk for online E tickets booked on Air India Website & Mobile App</h5>
                <p>Contact Number : 011 24667473 (Monday to Friday ,0930 hrs - 1730 hrs IST)</p>
                <p>Click here for queries related to E-tickets booked on Air India Website and Mobile App</p>

                <h5 className="text-danger">Frequent Flyer</h5>
                <small>Call 24x7 Customer Care numbers 0124-2641407 / 020-26231407 / 1860 233 1407 from MTNL / BSNL lines and Mobile / landlines of most private telecom operators in India only</small>

                <h6>Email Addresses for FFP members</h6>
                <table className="table bg-light" width="35%" >
                    <tr>
                        <td>General Queries</td>
                        <td>flyingreturn.base@airindia.in</td>
                    </tr>
                    <tr>
                        <td>Missing Miles / Retro Credit on AI:</td>
                        <td>airindia.retros@airindia.in</td>
                    </tr>
                    <tr>
                        <td>Missing Miles / Retro credit on Star Partners:</td>
                        <td>star.retros@airindia.in</td>
                    </tr>
                    <tr>
                        <td>Silver Edge Members</td>
                        <td>silver.edge@airindia.in</td>
                    </tr>
                    <tr>
                        <td>Golden Edge Members</td>
                        <td>golden.edge@airindia.in</td>
                    </tr>
                    <tr>
                        <td>The Maharajah Club Members</td>
                        <td>maharajah.club@airindia.in</td>
                    </tr>
                </table>
                
            </div>

        </div>
        </>
    )
}

export default Contact
