const express = require('express')
const router = express.Router()
const security = require('../../authenticater/user/secutity')
const user = require('./users') 
const userLogin = require('./../authentication/userLogin/authentication')

router.use('/',userLogin)

router.use(security)
router.use('/:id',user) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router