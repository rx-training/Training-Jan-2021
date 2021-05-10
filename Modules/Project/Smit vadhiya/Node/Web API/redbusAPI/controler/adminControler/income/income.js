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
        res.send(`total income in year of ${year} : ${total}rs`);
    } 
    static async getByMonth(req,res){
        const year = req.params.year
        const month = req.params.month
        const data = await Income.getYearData(year)
        var total = data.filter((i) => i.farePrice == 955.2)
        data.push(total)
        res.send(data);
    } 

}

router.get('/:year',Income.getByYear)
router.get('/:year/:month',Income.getByMonth)

module.exports = router