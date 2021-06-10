const express = require('express')
const router = express.Router({mergeParams: true})
const UserDomain = require('../../../domain/userDomain')

class Trip{

    //GET ALL TRIP OF USER
    static async getMyTrip(req,res) {
        UserDomain.getMyTrip(req,res)
    }
    static async cancelMyTrip(req,res) {
        
    }

}

router.get('/',Trip.getMyTrip) //display all trip till no from database 
router.get('/id',Trip.cancelMyTrip) //display all trip till no from database 


module.exports = router
