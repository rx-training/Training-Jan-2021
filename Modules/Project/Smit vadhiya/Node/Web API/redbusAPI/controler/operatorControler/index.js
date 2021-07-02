const express = require('express')
const router = express.Router()
const operatore = require('./operatores') 
const operatorDomain = require('../../domain/operatorDomain')
const operatorLogin = require('../authentication/operator/authentication')
const security = require('../../authenticater/operator/secutity')
router.post('/signup',operatorDomain.postNewOperator)
router.post('/signup/verify/:otp',operatorDomain.addData)

router.use('/',operatorLogin)


//router.use(security)
router.use('/:id',operatore) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router