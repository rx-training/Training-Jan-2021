const express = require('express')
const router = express.Router()
const buses = require('./bus/Buses')
const users = require('./users/user')
const cities = require('./city/cities')
const operator = require('./operator/operator')
const mainRoute = require('./busRoute/route')
const income = require('./income/income')

router.use('/user',users)
router.use('/city',cities)
router.use('/bus',buses)
router.use('/operator/',operator)
router.use('/route',mainRoute)
router.use('/income',income)

module.exports = router
