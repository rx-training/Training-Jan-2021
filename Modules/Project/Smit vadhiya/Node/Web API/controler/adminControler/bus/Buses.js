const express = require('express')
const router = express.Router()
const AdminDomain = require('../../../domain/adminDomain')
const Collections = require('../../../models/index')

class Buses{
    static async getAllBuses(req,res){
        const users = await Collections.Buses.find().select('-__v').populate('operator','companyName -_id')
        if(users.length == 0)
            return res.status(404).send("there is no bus is registered Yet")
        res.send(users)
    }
    static async deleteBus(req,res){

    }
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

router.get('/all',Buses.getAllBuses)//GET ALL OPERATOR'S DATA
router.get('/:busid',Buses.getBusById)
//router.delete('/:busid',Buses.getBusById)

module.exports = router