const express = require('express')
const router = express.Router()
const Collections = require("../../../models/index")


class Trips{
   static async getAllTrips(req,res){
      const trips = await Collections.Trip.find().select('-__v').populate('userId')
      
      res.send(trips)
   }
   static async getTripById(req,res){
      const id  = req.params.id
      const trips = await Collections.Trip.findById(id).select('-__v').populate('userId').populate({
         path : 'routeId',
            select : 'busNumber',
            populate : {
               path :'busNumber -_id',
               select : 'busName'
               
            }
      })
      if(!trips) return res.send('not found')
      res.send(trips)
   }
}

router.get('/all',Trips.getAllTrips)//GET ALL OPERATOR'S DATA
router.get('/:id',Trips.getTripById)//GET ALL OPERATOR'S DATA


module.exports = router