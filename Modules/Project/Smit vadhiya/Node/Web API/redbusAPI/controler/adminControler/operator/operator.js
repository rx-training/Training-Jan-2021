const express = require('express')
const router = express.Router()
const Collections = require('../../../models/index')

class Operators {
    static async getAllOperator(req,res){
        const users = await Collections.Operators.find().select('-__v').populate('city','cityName -_id')
        if(users.length == 0)
            return res.status(404).send("there is no Operatores is registered Yet")
        res.send(users)
    }
}

router.get('/all',Operators.getAllOperator)

module.exports = router