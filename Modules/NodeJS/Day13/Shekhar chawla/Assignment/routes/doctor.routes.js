const express = require('express')
const router = express.Router()

const { getDoctors,
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
} = require('../controllers/doctor.controller')

router.get('/', getDoctors)					
router.get('/:id', getDoctor)					
router.post('/', createDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)



module.exports = router