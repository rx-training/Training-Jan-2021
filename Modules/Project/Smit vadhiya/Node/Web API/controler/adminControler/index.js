const express = require('express')
const router = express.Router()

const admin = require('./admin')

router.use('/',admin) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router