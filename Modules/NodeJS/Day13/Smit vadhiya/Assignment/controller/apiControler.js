const express = require('express')
const router = express.Router()
const Doctors = require('./doctor/doctorApis')
const Patient = require('./patient/patientApis')

router.use('/doctors',Doctors)
router.use('/patients',Patient)

module.exports = router