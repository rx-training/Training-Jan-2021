const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')

class Buses{
    // RETRIVE ALL BUS
    static async getAllBuses(req,res){
        const users = await Collections.Buses.find().select('-__v').populate('operator','companyName -_id')
        if(users.length == 0)
            return res.status(404).send("there is no bus is registered Yet")
        res.send(users)
    }
  
    //RETRIVE BUS BY IT'S ID(NUMBER OF NUMBERPLATE)
    static async getBusById(req,res){
        const id = req.params.busid
        const bus = 
        await Collections.Buses
                        .findById(id)
                        .select('-__v')
                        .populate('operator','companyName -_id')
        if(!bus) return res.status(404).send("Bus not found") 
        res.send(bus)
    }
}

router.get('/all',Buses.getAllBuses) 
//GET ALL BUS'S DATA
// http://localhost:3000/redbus.in/admin/bus/all


router.get('/:busid',Buses.getBusById) 
//GET BUS BY IT'S BUSNUMBER
// http://localhost:3000/redbus.in/admin/bus/GJ01MH3737

module.exports = router