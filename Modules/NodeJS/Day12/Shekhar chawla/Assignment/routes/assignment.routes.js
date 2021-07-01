const express = require('express')
const router = express.Router({mergeParams: true})



const controller = require('../controllers/assignment.controller')
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

router.get('/', Routes.getAll)

router.get('/:aid', Routes.get)

router.post('/', Routes.create)

router.put('/:aid', Routes.update)

router.delete('/:aid', Routes.delete)


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

