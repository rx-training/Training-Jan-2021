const router = require('express').Router()
const assignments = require('./assignment.routes.js')

// child routes
router.use('/:id/assignments', assignments)


const controller = require('../controllers/employees.controller')
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

router.get('/', Routes.getAll)

router.get('/:id', Routes.get)

router.post('/', Routes.create)

router.put('/:id', Routes.update)

router.delete('/:id', Routes.delete)


module.exports = router
