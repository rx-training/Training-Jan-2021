const express = require('express')
const router = express.Router()


const customerApis = require('./customer/customers')
const authenticationApi = require('./authentication/authentication')

const security = require('../authenticater/secutity')

router.use('/authenticate',authenticationApi)

router.use(security)
router.use('/customers', customerApis)

module.exports = router