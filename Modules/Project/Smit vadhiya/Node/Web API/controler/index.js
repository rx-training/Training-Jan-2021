const express = require('express')
const router = express.Router()

const admin = require('./adminControler/index')
const operator = require('./operatorControler/index')
const user = require('./userControler/index')
const userLogin = require('./authentication/userLogin/authentication')

router.use('/user',userLogin)

router.use('/admin',admin)
router.use('/operator',operator)
router.use('/user',user)

module.exports = router
