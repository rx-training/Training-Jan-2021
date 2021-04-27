const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')

class MainRoute {
    static async getAllRoute(req,res){
        const mainRoute = await Collections.MainRoute.find().select('-__v')
            .populate('busNumber','busName')
            .populate('fromCity','cityName -_id')
            .populate('toCity','cityName -_id')
            .populate('subCities','cityName -_id')
        if(mainRoute.length == 0)
            return res.status(404).send("Route is not available")
        res.send(mainRoute)
    }
}

router.get('/all',MainRoute.getAllRoute)

module.exports = router