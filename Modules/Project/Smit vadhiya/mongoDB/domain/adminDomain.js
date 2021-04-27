
const Collections = require('../models/index')
const validate = require('../models/validate')
const logicalFunctions = require('./logicalFunctions')

class Admin{
    static async addNewCity(req,res,newCity){
        const city = validate.Cities.validate(newCity)
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
                
            } catch(ex){
                res.send(ex)
            }
            res.send(result)
        }
    }
}

module.exports = Admin