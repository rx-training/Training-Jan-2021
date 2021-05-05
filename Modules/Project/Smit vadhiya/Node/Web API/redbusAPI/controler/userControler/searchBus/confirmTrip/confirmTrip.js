const express = require('express')
const router = express.Router({mergeParams: true})
const UserDomain = require('../../../../domain/userDomain')

class ConfirmTrip{

    //AFTER COMPLITION OF PAYMENT TRIP WILL ADDED TO TRIP COLLECTION
   static async postNewTrip(req,res){
        UserDomain.postAddNewTrip(req,res)
    } 
}

router.post('/',ConfirmTrip.postNewTrip) // /user/:id/search/newtrip/
/**
    AFTER SEARCHING ALL BUSES BY(/user/:id/search) 
    SELECT ONE BUS FROM DISPLAY AND COPY THAT DATA IN TO BODY
    AND ADD SELECTED SEAT FIELD INTO JSON LIKE
    ALSO CHANGE FROM CITY AND TO CITY FROM IT'S NAME TO IT'S ID TO SEE RESULT
    {
        ...
        "selectedSeat": [1,4,7] 
    } 

    this will add your trip into database
 */

module.exports = router

