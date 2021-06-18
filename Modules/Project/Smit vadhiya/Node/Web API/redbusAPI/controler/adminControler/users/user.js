const express = require('express')
const router = express.Router()
const Collections = require("../../../models/index")


class Users{
    static async getAllUser(req,res){
        const users = await Collections.Users.find().select('-__v').populate('city','cityName -_id')
        if(users.length == 0)
            return res.status(404).send("there is no user is registered Yet")
        res.send(users)
    }
    static async getUseById(req,res){
        const id = parseInt(req.params.id)
        const users = await Collections.Users.findById(id).select('-__v')
        if(!users)
            return res.send([])
        res.send(users)
    }
}

router.get('/all',Users.getAllUser)//GET ALL OPERATOR'S DATA
router.get('/:id',Users.getUseById)//GET ALL OPERATOR'S DATA



module.exports = router