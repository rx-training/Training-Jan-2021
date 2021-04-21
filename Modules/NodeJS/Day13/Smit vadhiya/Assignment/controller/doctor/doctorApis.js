const express = require('express')
const router = express.Router()
const Hospital = require('../../logicalClasses/hospital')


router.get('/',Hospital.getAllDoctors)

router.get('/:id',Hospital.getDoctorById)

router.put('/:id',Hospital.putDoctorById)

router.post('/',Hospital.postNewDoctor)

router.get('/:id/patients',Hospital.getPatientsOfDoctor)

router.delete('/:id',Hospital.deleteDoctor)

module.exports = router