const express = require('express')
const router = express.Router()

const { getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
} = require('../controllers/patient.controller')

router.get('/', getPatients)					
router.get('/:id', getPatient)					
router.post('/', createPatient)
router.put('/:id', updatePatient)
router.delete('/:id', deletePatient)



module.exports = router