const express = require('express')
const router = express.Router({mergeParams: true})



const controller = require('./controller')
const AssignmentController = new controller

class Routes {
	static async getAll(req, res) {
		AssignmentController.getAll(req, res)
	}
	static async get(req, res) {
		AssignmentController.get(req, res)
	}
	static async create(req, res) {
		AssignmentController.create(req, res)
	}
	static async update(req, res) {
		AssignmentController.update(req, res)
	}
	static async delete(req, res) {
		AssignmentController.delete(req, res)
	}
}

// get all employees : () -> data
// GET 		http://localhost:3000/emps
router.get('/', Routes.getAll)

// get employee by id - (id, data) -> body
// GET 		http://localhost:3000/emps/1
router.get('/:assignmentId', Routes.get)


// create employee - (body, data) -> data 
// POST 	http://localhost:3000/emps
router.post('/', Routes.create)


// update employee : (id, body,data) -> data
// PUT	http://localhost:3000/emps/1
router.put('/:assignmentId', Routes.update)


// delete employee : (id) -> data
// DELETE	http://localhost:3000/emps/1
router.delete('/:assignmentId', Routes.delete)

// get all assignment with eId 
// GET	 http://localhost:3000/emps/1/child/assignments
// router.get('/', (req, res) => {
// 	var employee = getData('id', req.params.id, employees)
	
// 	if (!employee) {
//         console.log(`Employee with id ${req.params.id} not found`)
//         res.json({ error : `Employee with id ${req.params.id} not found`})
//     } else if (!employee['assignments']) {
// 		console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
// 		res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
// 	} else {
// 		res.json(employee['assignments'])
// 	}
// })



// get assignment by aID of employee eid 
// GET	 http://localhost:3000/emps/1/child/assignments/2
// router.get('/:assignmentId', 



// create assingments of employee with eId
// POST 	http://localhost:3000/emps/child/assignments
// router.post('/', 



// update assignment aId of employee eId
// PUT	http://localhost:3000/emps/1/child/assignments/2
// router.put('/:assignmentId', 


// delete assignment aId of employee eId
// DELETE	http://localhost:3000/emps/1/child/assignments/2
// router.delete('/:assignmentId', 

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

