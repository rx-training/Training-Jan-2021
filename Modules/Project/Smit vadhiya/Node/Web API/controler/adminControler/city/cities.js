const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')

class Cities {
    static async getAllCities(req,res){
        const cities = await Collections.Cities.find().select('-__v')
        if(cities.length == 0)
            return res.status(404).send("city is not available")
        res.send(cities)
    }


    static async addNewCity(req,res){
        const city = validate.Cities.validate(req.body)
        if(city.error){
            res.send(city.error.message)
        } else {
            const count = await logicalFunctions.incId('Cities')
            try{
                const City = new Collections.Cities({
                    _id : count,
                    cityName: city.value.cityName,
                    state: city.value.state,
                    latitude: city.value.latitude,
                    longitude: city.value.longitude
                })
                const result = City.save()
                res.send(result)
            } catch(ex){
                res.send(ex)
            }
        }
    }
}

router.get('/all',Cities.getAllCities)

router.post('/add',Cities.addNewCity)


module.exports = router