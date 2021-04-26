var express = require("express");
var EmployeeDomain = require("../../domain/controller.domain/emloyees.domain");
var assignments = require("./child/assignment.controller");
var router = express.Router();

class EmployeeController {
  //To get all employees
  static async get(req, res) {
    const employeeDomain = new EmployeeDomain();
    employeeDomain.getAllEmployees(req, res);
  }
  //To get an single employee by EmpId
  static async getAnEmployee(req, res) {
    const employeeDomain = new EmployeeDomain();
    employeeDomain.getAnEmployee(req, res);
  }
  //To Create New Employee
  static async createAnEmployee(req, res) {
    const employeeDomain = new EmployeeDomain();
    employeeDomain.createAnEmployee(req, res);
  }
  //To Update Data Of An Employee
  static async updateAnEmployee(req, res) {
    const employeeDomain = new EmployeeDomain();
    employeeDomain.updateAnEmployee(req, res);
  }
}

router.use("/:EmpId/assignments", assignments);
router.get("/", EmployeeController.get);
router.get("/:EmpId", EmployeeController.getAnEmployee);
router.post("/", EmployeeController.createAnEmployee);
router.put("/", EmployeeController.updateAnEmployee);
module.exports = router;
