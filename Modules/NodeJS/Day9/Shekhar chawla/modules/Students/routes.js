const express = require('express')
const router = express.Router()

const { getStudents, getStudent, createStudent, updateStudent, deleteStudent } = require('./controller')
const fees = require('./Fees/routes')
const result = require('./Result/routes')

router.get('/', getStudents)					// http://localhost:3000/students
router.get('/:id', getStudent)					// http://localhost:3000/students/1
router.post('/', createStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)

// child routes
router.use('/:id/fees', fees)
router.use('/:id/results', result)

module.exports = router