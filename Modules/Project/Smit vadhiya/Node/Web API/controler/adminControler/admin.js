const express = require('express')
const router = express.Router()
const buses = require('./bus/Buses')
const users = require('./users/user')
const cities = require('./city/cities')
const operator = require('./operator/operator')
const mainRoute = require('./busRoute/route')

router.use('/user',users)
router.use('/city',cities)
router.use('/bus',buses)
router.use('/operator/',operator)
router.use('/route',mainRoute)

module.exports = router
