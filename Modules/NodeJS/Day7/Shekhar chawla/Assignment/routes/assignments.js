const express = require('express')
const router = express.Router({mergeParams: true})
const fs = require('fs')

const employees = require('../data/e.json')
const handleError = require('../utils/error_handling.js')
const { getData, createData, updateData, deleteData } = require('../utils/crud')


// get all assignment with eId 
// GET	 http://localhost:3000/emps/1/child/assignments
router.get('/', (req, res) => {
	var employee = getData('id', req.params.id, employees)
	
	if (!employee) {
        console.log(`id ${req.params.id} not found`)
        res.json({ error : `id ${req.params.id} not found`})
    } else if (!employee['assignments']) {
		console.log(`Assignments with id ${req.params.id} not found`)
        res.json({ error : `Assignments with id ${req.params.id} not found`})
	} else {
		res.json(employee['assignments'])
	}
})



// get assignment by aID of employee eid 
// GET	 http://localhost:3000/emps/1/child/assignments/2
router.get('/:assignmentId', (req, res) => {
	var employee = getData('id', req.params.id, employees)

	if (!employee) {
        console.log(`id ${req.params.id} not found`)
        res.json({ error : `id ${req.params.id} not found`})
    } 
	else{
		if( employee['assignments'] ) {
			var eAssingment = getData('AssignmentId', req.params.assignmentId, employee['assignments'])
			if( eAssingment ){
				console.log(eAssingment)
				res.json(eAssingment)
			} else {
				console.log(`Assignments id ${req.params.assignmentId} not found`)
				res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
			}
		} else {
			console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
			res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
		}	

	}
	
})



// create assingments of employee with eId
// POST 	http://localhost:3000/emps/child/assignments
router.post('/', (req, res) => {
	var employee = getData('id', req.params.id, employees)
	
	msg = handleError.errorLog(req.body, employees[0]['assignments'], unique=0)			// check all errors except uniquekeyConstraint

	// creating employee in json file
	if(msg.length == 0) {
		index = employees.indexOf(employee)
 
		if( ! employees[index]['assignments'] ) {
			employees[index]['assignments'] = []
		}

		assignment = createData(req.body, employees[index]['assignments'],null, assignId=0)
		
		fs.writeFile('./data/e.json', JSON.stringify(employees), (err) => {
			if( err ) throw err
		})

		console.log('Assignment Created', assignment)
		res.json({ msg: 'Assignment Created', assign: assignment, emp: employee })
	} else {
		console.log(msg)
		res.json({ Errors : msg}) 
	}

})



// update assignment aId of employee eId
// PUT	http://localhost:3000/emps/1/child/assignments/2
router.put('/:assignmentId', (req, res) => {
	msg = handleError.errorLog(req.body, employees[0]['assignments'], unique=0)			// check all errors except uniquekeyConstraint
	
	var employee = getData('id', req.params.id, employees)

	if (!employee) {
        console.log(`id ${req.params.id} not found`)
        res.json({ error : `id ${req.params.id} not found`})
    } 
	else {
		if( employee['assignments'] && msg.length == 0) {
			var assignment = updateData('AssignmentId', req.params.assignmentId, req.body, employee['assignments'])
			// if updated
			if( assignment ){
				fs.writeFile('x.json', JSON.stringify(employees), (err) => {
					if( err ) throw err
				})
	
				console.log('Assignment updated', assignment)
				res.json({ msg: 'Assignment updated', assign: assignment, emp: employee })
			} else {
				console.log(`Assignments id ${req.params.assignmentId} not found`)
				res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
			}
		} else {
			console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
			res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
		}

	}
	
})



// delete assignment aId of employee eId
// DELETE	http://localhost:3000/emps/1/child/assignments/2
router.delete('/:assignmentId', (req, res) => {
	
	var employee = getData('id', req.params.id, employees)

	if (!employee) {
        console.log(`id ${req.params.id} not found`)
        res.json({ error : `id ${req.params.id} not found`})
    } 
	else {

		if( employee['assignments'] ) {
			var assignment = deleteData('AssignmentId', req.params.assignmentId, employee['assignments'])

			// if deleted
			if( assignment ){
				fs.writeFile('./data/e.json', JSON.stringify(employees), (err) => {
					if( err ) throw err
				})
	
				console.log('Assignment deleted', assignment)
				res.json({ msg: 'Assignment deleted', assign: assignment, emp: employee })
			} else {
				console.log(`Assignments id ${req.params.assignmentId} not found`)
				res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
			}
		} else {
			console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
			res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
		}

	}
})


module.exports = router







/*
Create an Assignments API

http://localhost:3000/emps/{empID}/child/assignments

Get All Assignments

http://localhost:3000/emps/{empID}/child/assignmentsignments

Get an Assignment

http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID}

Update an assignment

http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID}

Do above task with Routing middleware, custom middleware which will log which API is invoked at what time. Implement error handling middleware as well.
*/

