const express = require('express')
const router = express.Router({mergeParams: true})
const {Users} = require('../../models/index') //USER MODEL 
const chieldTrip = require('./trip/trip') //TRIP CHILD OF USER 
const chieldSearchBus = require('./searchBus/searchBus.js')
class User{
    //FETCH USER DETAIL FROM USER'S ID
    static async getUsersById(req,res){
        const id = parseInt(req.params.id)
        const user = await Users.findById(id).select('-__v') //find from monoDb user collection
        if(!user) return res.status(404).send("User not found") //error if user is not available
        res.send(user) 
    }
    
    //UPDATE DATA OF USER
    static async putUserById(req,res){
        const user = await Users.findById(parseInt(req.params.id)) //find user
        if(!user) return res.status(404).send("User not found")
        for( var i in req.body){ user[i] = req.body[i] } //update new data from body
        try {
            const result =await user.save() //save data to database
            res.send(result);
        } catch(ex) { 
            res.status(422).send(ex.message) 
        }
    }
}

//USER'S MAIN API
    router.get('/',User.getUsersById) //GET USER'S DATA FROM ID  /user/:id/ 

    router.put('/update',User.putUserById) //UPDATE USER DATA  /user/:id/update
    //enter field to be change in body. ex :  { "firstName" :"smit", "lastName": "shah" }


//CHIELD APIS
    router.use('/mytrip',chieldTrip)
    router.use('/search',chieldSearchBus)
module.exports = router






//router.get('/all',Users.getAllUsers)//GET ALL USER'S DATA (ADMIN SIDE)


//router.post('/signup',Users.postNewUser)//ADD NEW USER

//const security = require('../../authenticater/secutity')

//router.use(security)
//