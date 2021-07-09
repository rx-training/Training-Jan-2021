const express = require('express')
const router = express.Router()
const Collections = require('../../models/index')

const admin = require('./admin')
const adminLogin = require('../authentication/admin/authentication')
const security = require('../../authenticater/admin/secutity')

router.use('/',adminLogin)

router.get('/allCity',async (req,res) =>{
   const cities = await Collections.Cities.find().select('-__v')
      if(cities.length == 0)
         return res.status(404).send("city is not available")
      res.send(cities)
})

router.use(security)

router.use('/',admin) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router