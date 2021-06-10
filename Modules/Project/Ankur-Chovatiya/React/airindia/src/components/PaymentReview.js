import React, { useEffect, useState } from 'react'
import BookingSummary from './BookingSummary'
import dg from '../img/dg-1.png'
import {BsExclamationCircle} from 'react-icons/bs'
import {FaPlane} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import BookingTotal from './BookingTotal'

function PaymentReview(props) {

    const search = JSON.parse(localStorage.getItem('searchData'))
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight'))
    const returnSelectedFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    const passengerDetails = JSON.parse(localStorage.getItem('passengerDetails'))

    const returnFlight = search.TripType
    // console.log(returnFlight);

    let route = selectedFlight.Route ?  selectedFlight.Route.RouteNumber : '' 
    let Rroute = returnSelectedFlight.Route ? returnSelectedFlight.Route.RouteNumber : 'ANDBA-SA-DDAS'
    let name = passengerDetails.FirstName + " " + passengerDetails.LastName;
    let guests = passengerDetails.Guests 
    // console.log(guests);

    const handleFinalClick = () =>{
        props.history.push('./success')
    }

    return (
        <div className="container">
            <h1 className="heading">PAYMENT REVIEW </h1>

            <div className="row flight-name my-3">
                <div className="col-8">
                    <div className="row flight-confirmed">
                        <div className="col-3 date">
                            <div className="mr-2">{(new Date(selectedFlight.TackoffDate).toDateString())}</div>
                            <div className="ml-2">{(new Date(selectedFlight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        </div>
                        <div className="col-6 flight">
                           <div> 
                               <p><FaPlane></FaPlane> ------------<FaPlane></FaPlane></p>
                                <p>{route}</p>
                            </div>
                        </div>
                        <div className="col-3 confirmed" >
                           <p> Confirmed</p>
                        </div>
                    </div> 
                    {/* for return  */}
                    
                    {returnFlight == 'Round Trip' && <div className="row flight-confirmed">
                        <div className="col-3 date">
                        <div className="mr-2">{(new Date(returnSelectedFlight.TackoffDate).toDateString())}</div>
                            <div className="ml-2"> {(new Date(returnSelectedFlight.TackoffDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        </div>
                        <div className="col-6 flight">
                           <div> 
                               <p><FaPlane></FaPlane> ------------<FaPlane></FaPlane></p>
                                <p>{Rroute}</p>
                            </div>
                        </div>
                        <div className="col-3 confirmed" >
                           <p> Confirmed</p>
                        </div>
                    </div>} 
                   
                </div>


                <div className="col-4 ">
                    <div className=" row name"> 
                        <div className="col-3 user-icon"><FaUserAlt></FaUserAlt></div>
                        <div className="col-9 user-name">{name}</div>
                    </div>
                   
                    {
                        guests.map((gst , i) => {
                            return(
                                <div key={i} className=" row name"> 
                        <div className="col-3 user-icon"><FaUserAlt></FaUserAlt></div>
                        <div className="col-9 user-name">{gst.FirstName + ' ' + gst.LastName}</div>
                    </div>
                            )
                        })
                    }

                    
                </div>

            </div>
            <div className="row my-3">
                <div className="col danger">
                <div className="row notice">
                <h3><BsExclamationCircle></BsExclamationCircle> DANGEROUS GOODS</h3>
                    <p>Dangerous Goods are FORBIDDEN for Carriage on Person, in Hand baggage or Check-in baggage on board an aircraft, for safety reasons. The following are mere representative examples of Prohibited Dangerous Goods.</p>
                </div>
                <div className="row my-3 danger-icons">
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                </div>
                <div className="row my-3 danger-icons">
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                    <div className="col"><img src={dg} alt="danger" /></div>
                </div>
            </div>
            </div>

                    <BookingTotal {...props} handleFinalClick={handleFinalClick}></BookingTotal>

            {/* <div className="row my-5" >
                    
                        <div className="col ">
                        <h3 className="heading">Change and Cancel Policy</h3>
                            <div  id="policy">16. PENALTIES-CHANGES/CANCEL
changes
before departure
per coupon charge inr 2500 for reissue/revalidation.
note -
first change free for tickets issued for travel
on or before 30 jun 2021 till existing ticket
validity for ai operated flts only
reissuance for first free change only
permitted by ai ato/cto/gds and ai call centre.
in case of change to higher rbd for travel
re-issuance fee will not be  applicable. only
difference in total fare is to be  collected.
downselling is not allowed
--------------------------------------------------
text below not validated for autopricing.
permitted till 02 hr before scheduled departure of
the flight against a change fee of inr 2500 per
coupon or basic fare which ever is lower.
--------------------------------------------------
the change/reissue charge is non - refundable
--------------------------------------------------
no re-validation or cancellation  fee would be
applicable on infant tickets.
--------------------------------------------------
in case of change to higher rbd for travel on the
same day/same flight/re-issuance fee will not be
applicable.only difference in total fare is to be
collected.
--------------------------------------------------
cancellation fee of partly used ticket
deduct oneway fare and levies for the travelled
sector plus cancellation fee
--------------------------------------------------
for waiver of penalty on account of death of
passenger or immediate family member pls refer
last page
--------------------------------------------------
cancellation fee of partly used ticket
deduct oneway fare and levies for the travelled
sector plus cancellation fee
--------------------------------------------------
for waiver of penalty on account of death of
passenger or immediate family member pls refer
last page
--------------------------------------------------
reservations booked more than 7 days prior to
commencement of travel may be cancelled or
amended within 24 hours of booking ticket without
penalty.reservations booked within 7 days of
commencement of travel are subject to the
applicable cancellation penalty.
cancellations
before departure
per coupon charge inr 3000 for cancel.
note -
text below not validated for autopricing.
permitted till 02 hr before scheduled departure of
the flight against a change fee of inr 3000 per
coupon or basic fare which ever is lower.
--------------------------------------------------
the change/reissue charge is non - refundable
--------------------------------------------------
no re-validation or cancellation fee would be
applicable on infant tickets.
--------------------------------------------------
in case of change to higher rbd for travel on the
same day/same flight/re-issuance fee will not be
applicable.only difference in total fare is to be
collected.
--------------------------------------------------
cancellation fee of partly used ticket
deduct oneway fare and levies for the travelled
sector plus cancellation fee
--------------------------------------------------
for waiver of penalty on account of death of
passenger or immediate family member pls refer
last page
--------------------------------------------------
reservations booked more than 7 days prior to
commencement of travel may be cancelled or
amended within 24 hours of booking ticket without
penalty.reservations booked within 7 days of
commencement of travel are subject to the
applicable cancellation penalty.
changes/cancellations
changes/cancellations permitted for no-show.
note -
text below not validated for autopricing.
changes / cancellation fee if cancelled
less than two hour before departure - 100 percent
of basic fare will be forfeited.
--------------------------------------------------
the change/reissue charge is non - refundable
--------------------------------------------------
charges are non-commisisonable.  applicable gst
will be additional.
--------------------------------------------------
air india no-show waiver at airport - for rbds -
h/k/q/v/w/g/l/u/t/s/e in case the passenger has
reported at the airport after closure of counter
but before departure of flight would be permitted
to roll over on no-show at a charge of inr 3500.
--------------------------------------------------
this will be authorised at the airport at the
time of flight only and cannot be levied/ waived
at cbo.
--------------------------------------------------
the waiver of no-show in such cases to be
authorised by the duty manager.
--------------------------------------------------
further fare difference if any as per the rbd/
fare basis available/ applicable on the next
available flight will have to be charged from the
passenger in addition to the no-show penalty.
--------------------------------------------------
for waiver of penalty on account of death of
passenger or immediate family member pls refer
last page
note -
in case of death of a passenger or immediate
family member before commencement of travel
penalty charges stand waived off. the above is
applicable only when ticket is purchased before
death of passenger or immediate family member is
occurred.
-------------------------------------------------
immediate family shall be limited to spouse
children including adopted children parents
brothers sisters grand-parents grandchildren fa
father in law mother in law sister in law brother
in law son in law and daughter in law
-----------------------------------------------
in case of death of a passenger or immediate
family member occurred after commencement of
travel penalty charges stand waived off.
-------------------------------------------------
in case of death of passenger occurred after
commencement of travel accompanying passenger may
terminate travel or interrupt travel until
completion of formalities and religious customs
if any but in no event later than forty five 45
days after travel is interrupted. the ticket of
returning passengers will be endorsed return
account death name  and such endorsement shall be
authenticated by validation or other duty manager
official stamp. refund may be arranged. re-
routing may be permitted applicable penalty if
any may be waived. difference of fare needs to be
collected.
----------------------------------------------</div>
                        </div>
                        <div className="col">
                            <h3 className="heading">FARES & FEES</h3>
                            <p>Fares  - {}</p>
                            <p>Charges & fess - {}</p>
                            <p>Taxes - {}</p>
                            <p>Extras - {}</p><hr />
                            <h4>Booking Total - {}</h4>
                            <button className="btn btn-danger btn-block" onClick={handleClick} >Book</button>
                        </div>
                    </div>
            </div>
         */}
         </div>
    )
}

export default PaymentReview
