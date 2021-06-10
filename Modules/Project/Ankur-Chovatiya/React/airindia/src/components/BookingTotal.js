import React from 'react'

function BookingTotal(props) {
    const flight = JSON.parse(localStorage.getItem('selectedFlight'))
    // console.log(flight);
    const returnFlight = JSON.parse(localStorage.getItem('returnSelectedflight'))
    
    const search = JSON.parse(localStorage.getItem('searchData'))
    const totalTicket = parseInt(search.Adults) + parseInt(search.Children) + parseInt(search.Infants)
    const totalFare = parseInt(flight.price + returnFlight.price)
    const  totalCharge = (flight.AirFare ? flight.AirFare.ChargesAndfees : 0 )
    const totalExtras = (flight.AirFare ?  flight.AirFare.ExtraFare : 0 )

    const grandTotal = totalFare + totalCharge + totalExtras + totalFare*0.18 

    // const {handleFinalClick} = props

    return (
        <div  className="container">  
                  <div className="row my-5 " >
                    
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
                        <p>Fares  - {totalFare * totalTicket}</p>
                        <p>Charges & fees - {totalCharge * totalTicket}</p>
                        <p>Taxes - {totalFare *0.18 * totalTicket}</p>
                        <p>Extras - {totalExtras * totalTicket}</p><hr />
                        <h4>Booking Total - { grandTotal * totalTicket }</h4>
                        <button className="btn btn-danger btn-block" onClick={props.handleFinalClick}>Book</button>
                    </div>
                </div>
            
        </div>
    )
}

export default BookingTotal
