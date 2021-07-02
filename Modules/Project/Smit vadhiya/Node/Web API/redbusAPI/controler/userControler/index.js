const express = require('express')
const router = express.Router()
const security = require('../../authenticater/user/secutity')
const user = require('./users') 
const userLogin = require('./../authentication/userLogin/authentication')
const userDomain = require('../../domain/userDomain')


router.get('/getAllMail',userDomain.getAllMailId)
router.post('/signup',userDomain.postNewUser)
router.post('/signup/verify/:otp',userDomain.addData)
router.use('/',userLogin)

router.use(security) //USE FOR AUTHENTICATION MIDDLEWARE
router.use('/:id',user) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router