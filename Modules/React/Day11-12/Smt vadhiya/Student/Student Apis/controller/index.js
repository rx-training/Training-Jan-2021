const express = require('express')
const router = express.Router()
const studentApis = require('./student/student')

router.use('/student',studentApis)

module.exports = router