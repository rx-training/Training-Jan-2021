const express = require('express')
const router = express.Router()
const Hospital = require('../../logicalClasses/hospital')


router.get('/',Hospital.getAllPatients)

router.get('/:id',Hospital.getPatientById)

router.post('/',Hospital.postNewPatient)

router.get('/:id/meditions',Hospital.getMedicines)


module.exports = router