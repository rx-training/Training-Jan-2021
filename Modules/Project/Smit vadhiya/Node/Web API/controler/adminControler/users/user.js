const express = require('express')
const router = express.Router()
const AdminDomain = require('../../../domain/adminDomain')
const Collections = require("../../../models/index")


class Users{
    static async getAllUser(req,res){
        const users = await Collections.Users.find().select('-__v').populate('city','cityName -_id')
        if(users.length == 0)
            return res.status(404).send("there is no user is registered Yet")
        res.send(users)
    }
}

router.get('/all',Users.getAllUser)//GET ALL OPERATOR'S DATA

module.exports = router