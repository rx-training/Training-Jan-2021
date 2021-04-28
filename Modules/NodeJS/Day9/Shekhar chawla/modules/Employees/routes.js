const router = require('express').Router()
const assignments = require('./Assignments/routes.js')

// child routes
router.use('/:id/child/assignments', assignments)


const controller = require('./controller')
const EmpController = new controller

class Routes {
	static async getAll(req, res) {
		EmpController.getAll(req, res)
	}
	static async get(req, res) {
		EmpController.get(req, res)
	}
	static async create(req, res) {
		EmpController.create(req, res)
	}
	static async update(req, res) {
		EmpController.update(req, res)
	}
	static async delete(req, res) {
		EmpController.delete(req, res)
	}
	static async checkErrors(req, res,next) {
		EmpController.checkErrors(req, res, next)
	}
	
}

// get all employees : () -> data
// GET 		http://localhost:3000/emps
router.get('/', Routes.getAll)

// get employee by id - (id, data) -> body
// GET 		http://localhost:3000/emps/1
router.get('/:id', Routes.get)


// create employee - (body, data) -> data 
// POST 	http://localhost:3000/emps
router.post('/',Routes.checkErrors, Routes.create)


// update employee : (id, body,data) -> data
// PUT	http://localhost:3000/emps/1
router.put('/:id', Routes.update)


// delete employee : (id) -> data
// DELETE	http://localhost:3000/emps/1
router.delete('/:id', Routes.delete)


module.exports = router
