const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')

class Income {
    static async getYearData(year){
        const data = await Collections.Trip.find({ $and : 
                [{tripDate : {$gte : new Date(year)}},
                {tripDate : {$lt : new Date((parseInt(year) + 1).toString()) }}]
            }).select('tripDate farePrice -_id')
        return data
    }
    static async getByYear(req,res){
        const year = req.params.year
        const data = await Income.getYearData(year)
        var total = 0
        for(var i of data) total += i.farePrice 
        res.send(`${total}`);
    } 
    static async getByMonth(req,res){
        const year = req.params.year
        const month = parseInt(req.params.month)
        const data = await Income.getYearData(year)

        var years = 0
        for(var j of data) years += j.farePrice 

        var filterData = data.filter((i) => i.tripDate.getMonth() == (month-1))
        var total = 0
        for(var i of filterData) total += i.farePrice 

        res.send({
            year : years,
            month : total
        });
        
    } 
}

router.get('/:year',Income.getByYear)
router.get('/:year/:month',Income.getByMonth)

module.exports = router