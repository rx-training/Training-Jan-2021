const express = require('express');
const router = express.Router();
const EmployeeData = require('../../Domain/employeelogic');
const empAssignment = require('./child/empAssignment');

class EmployeeController {
    static async getAllEmployeeData(req,res) {
        const employeeData =new EmployeeData();
        employeeData.getAllEmployeeData(req,res);
    }
    static async getEmployeeDataFromId (req,res){
        const employeeData = new EmployeeData();
        employeeData.getEmployeeDataFromId(req,res);
    }
    static async insertEmployee (req,res){
        const employeeData = new EmployeeData();
        employeeData.insertEmployee(req,res);
    }
    static async updateEmployee(req,res){
        const employeeData = new EmployeeData();
        employeeData.updateEmployee(req, res);
    }
    static async deleteEmployee (req,res){
        const employeeData = new EmployeeData();
        employeeData.deleteEmployee(req, res);
    }
    
    
}

router.use("/:id/child/assignments", empAssignment);

//Get Method
router.get('/', EmployeeController.getAllEmployeeData);
router.get('/:id', EmployeeController.getEmployeeDataFromId);

//Post Method
router.post('/', EmployeeController.insertEmployee);

//Put Method
router.put("/:id", EmployeeController.updateEmployee);

//Delete Method
router.delete("/:id", EmployeeController.deleteEmployee);


module.exports = router;