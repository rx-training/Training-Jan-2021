const express = require('express')
const router = express.Router()
const fs = require('fs')

const { v4: uuidv4 } = require('uuid')

const employees = require('../data/e.json')
const handleError = require('../utils/error_handling.js')
const { getData, createData, updateData, deleteData } = require('../utils/crud')
const assignments = require('./assignments.js')

// child routes
router.use('/:id/child/assignments', assignments)


// get all employees : () -> data
// GET 		http://localhost:3000/emps
router.get('/', (req, res) => {
	res.json(employees)
})



// get employee by id - (id, data) -> body
// GET 		http://localhost:3000/emps/1
router.get('/:id', (req, res) => {
	var employee = getData('id', req.params.id, employees)
	
	if(!employee) {
        console.log(`id ${req.params.id} not found`)
        res.json({ error : `id ${req.params.id} not found`})
    } else {
		res.json(employee)
	}	
})



// create employee - (body, data) -> data 
// POST 	http://localhost:3000/emps
router.post('/', (req, res) => {

	msg = handleError.errorLog(req.body, employees)									// check errors

	// creating employee in json file
	if(msg.length == 0) {
		employee = createData(req.body, employees, './data/e.json')

		console.log('Employee Created', employee)
		res.json({ msg: 'Employee Created', emp: employee })
	} else {
		console.log(msg)
		res.json({ Errors : msg})
	}

})



// update employee : (id, body,data) -> data
// PUT	http://localhost:3000/emps/1
router.put('/:id', (req, res) => {
	msg = handleError.errorLog(req.body, employees)									// returns all errors
	
	var employee = updateData('id', req.params.id, req.body, employees, './data/e.json')
	
	if(!employee) {
        console.log(`id ${req.params.id} not found`)
        msg.push({ error : `id ${req.params.id} not found`})
    }

	// send response
	if(msg.length == 0) {
		console.log('Employee updated', employee)
		res.json({ msg: 'Employee updated', emp: employee })
	} else {
		console.log(msg)
		res.json({ Errors: msg })
	}

})



// delete employee : (id) -> data
// DELETE	http://localhost:3000/emps/1
router.delete('/:id', (req, res) => {
	employee = deleteData('id', req.params.id, employees, './data/e.json')

	if(employee) {
		console.log('Employee Deleted ', employee)
		res.json({ msg: 'Employee Deleted', emp : employee})

	}
	else {
		console.log(`Employee Not found`)
		res.json({ msg: [{IdError: `${req.params.id} id Not found`}] })
	}
})


module.exports = router
