const express = require('express')
const Collections = require('../../../models/index')
const router = express.Router({mergeParams: true})
const UserDomain = require('../../../domain/userDomain')

class Trip{

    //GET ALL TRIP OF USER
    static async getMyTrip(req,res) {
        UserDomain.getMyTrip(req,res)
    }
    static async cancelMyTrip(req,res) {
        const id = req.params.id
        const trip = await Collections.Trip.findByIdAndDelete({_id : id})
        const seats = await Collections.OccupiedSeats.findOne({Date : trip.tripDate, routeId : trip.routeId})
        for(var i of trip.seatNo){
            seats.occupiedSeats.splice(seats.occupiedSeats.indexOf(i),1)
        } 
        console.log(trip.seatNo);
        console.log(seats.occupiedSeats);
        
        trip.save()
        seats.save()
        res.send(seats)
    }

}

router.get('/',Trip.getMyTrip) //display all trip till no from database 
router.get('/:id',Trip.cancelMyTrip) //display all trip till no from database 


module.exports = router
