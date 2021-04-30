const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')
const validate = require('../../../models/validate')
const logicalFunctions = require('../../../domain/logicalFunctions')

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
                const result =await City.save()
                res.send(result)
            } catch(ex){
                res.send(ex)
            }
        } 
        
    }

    static async addManyCities(req,res){
        var allCities = req.body
        var addedCity = []
        for(var i of allCities){
            const city = validate.Cities.validate(i)
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
                    const result =await City.save()
                    addedCity.push(result)
                } catch(ex){
                    res.send(ex)
                }
            } 
        }
        res.send(addedCity)
    }
}

router.get('/all',Cities.getAllCities) 
//GET ALL CITIES
//  http://localhost:3000/redbus.in/admin/city/all

router.post('/add',Cities.addNewCity)
//ADD NEW CITY
// http://localhost:3000/redbus.in/admin/city/add

router.post('/addmany',Cities.addManyCities)
//ADD ARRAY OF CITY
// http://localhost:3000/redbus.in/admin/city/addmany

module.exports = router