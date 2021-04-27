const express = require('express')
const router = express.Router()

const admin = require('./admin')
const adminLogin = require('../authentication/admin/authentication')
const security = require('../../authenticater/admin/secutity')
router.use('/',adminLogin)


router.use(security)
router.use('/',admin) //API USER (DISPLAY AND UPDATE USER'S DATA)

module.exports = router