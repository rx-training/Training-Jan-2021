import React from 'react'

function Footer() {
    return (
        <>
           <footer className="footer p-3">
               <div className="container">
               <div className="row ">
                    <div className="col footer-links">
                        <ul>
                            <li>About Air India</li>
                            <li>Engineering Services</li>
                            <li>Air India Airport Services</li>
                            <li>Conditions of Carriage</li>
                            <li>US DOT Regulations</li>
                            <li>Instrument of Delegation <br />of Financial Powers </li>
                            <li>New Initiatives/Systematic Improvements</li>
                        </ul>
                    </div>
                    <div className="col footer-links">
                        <ul>
                            <li>Media Center</li>
                            <li>Citizen's Charter</li>
                            <li>Forms and Downloads</li>
                            <li>Canada Regulations</li>
                            <li>Corporate Environment Policy</li>
                            <li>Instrument of Delegation<br/> of Administrative Powers</li>

                        </ul>
                    </div>
                    <div className="col footer-links">
                        <ul>
                            <li>Right to Information</li>
                            <li>Vigilance</li>
                            <li>Tenders</li>
                            <li>Feedback</li>
                            <li>Feedback Status</li>
                            <li>Contact Details</li>
                            <li>Air India Express</li>
                        </ul>
                    </div>
                    <div className="col footer-links">
                        <ul>
                            <li>Sitemap</li>
                            <li>Careers</li>
                            <li>Travel Agents</li>
                            <li>FAQs</li>
                            <li>Customer Support</li>
                            <li>Alliance Air</li>
                        </ul>
                    </div>
               </div>
                <div className="row copyright mt-5">
                    <p>All donations towards the Prime Minister's National Relief Fund (PMNRF) are notified for 100% deduction from taxable income under Section 80G of the Income Tax Act, 1961.</p>
                    <p>Copyright © 2018 Air India Ltd. All rights reserved.<span className="visitors">  Visitors: 267363336</span></p>
                </div>
                </div>
           </footer> 
        </>
    )
}

export default Footer
