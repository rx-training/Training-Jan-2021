const express = require('express');
const router = express.Router(); 
const EmployeeDomain = require('../../domain/employeeDomain');

const assignmentRouter = require('./assignment/assignment');

router.use('/:empId/assignments', assignmentRouter);

class EmployeeController {

    //GET ALL EMPLOYEE DATA
    static async getAllEmployees(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.getAllEmployees(req, res);
    }

    //GET SPECIFIC EMPLOYEE DATA USING ID
    static async getEmployeeById(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.getEmployeeById(req, res);
    }

    //ADD EMPLOYEE
    static async addEmployee(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.addEmployee(req, res);
    }

    //UPDATE EMPLOYEE
    static async updateEmployee(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.updateEmployee(req, res);
    }

    //DELETE EMPLOYEE
    static async deleteEmployee(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.deleteEmployee(req, res);
    }

}

router.get('/', EmployeeController.getAllEmployees);
router.get('/:empId', EmployeeController.getEmployeeById);
router.post('/', EmployeeController.addEmployee);
router.put('/:empId', EmployeeController.updateEmployee);
router.delete('/:empId', EmployeeController.deleteEmployee)

module.exports = router;