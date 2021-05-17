const express = require('express')
const router = express.Router()

const {
  getPatientReport,
  getPatientDoctorReport,
  getPatientMedicineReport
} = require('../controllers/report.controller')

router.get('/patient/:pid', getPatientReport)
router.get('/doctor/:pid', getPatientDoctorReport)
router.get('/medicine/:pid', getPatientMedicineReport)



module.exports = router

/*
Find a report of patient assigned to a particular doctor

Find a report of medicine list for a particular patient

Display summary report of Report and patient (use Include method)
*/