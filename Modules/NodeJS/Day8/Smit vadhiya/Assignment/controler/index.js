const express = require('express')
const router = express.Router()


//JSON import
global.students =  require('../jsonFiles/students.json')

//contrler imports
const studentApi = require('./students/students')
const authenticationApi = require('./authentication/authentication')

//authenticatore which verify the token before  response
const security = require('../authenticater/secutity')

//login first
router.use('/authenticate',authenticationApi)

//authenticatore(middleware)
router.use(security)

router.use('/students',studentApi);

module.exports = router