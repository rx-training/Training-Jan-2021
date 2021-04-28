const express = require('express')
const router = express.Router({mergeParams: true})
const UserDomain = require('../../../domain/userDomain') //COMPLEX LOGIC FROM  userDomain
const chieldNewTrip = require('./confirmTrip/confirmTrip')
class myRoute{
    static async findMyRoute(req,res){
        UserDomain.getMyRoute(req,res)
    }
}

router.get('/',myRoute.findMyRoute) //  /user/:id/search/
//enter both cityId and date(YYYY-MM-DD) in body 
//ex { "id1" : 1 , "id2" : 2 , "date" : "2021-05-31"}

//after search all buses select one and and add new trip to database
router.use('/newtrip',chieldNewTrip)
module.exports = router



