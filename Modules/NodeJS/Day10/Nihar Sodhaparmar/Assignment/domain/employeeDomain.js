const { db } = require('../model/employeeModel');
const EmployeeModel = require('../model/employeeModel');
const AssignmentModel = require('../model/assignmentModel');
const { response } = require('express');

class EmployeeDomain {

    //GET ALL EMPLOYEE DATA
    async getAllEmployees(req, res) {
        const employees = await EmployeeModel.find();
        res.send(employees);
    }

    //GET SPECIFIC EMPLOYEE DATA USING ID
    async getEmployeeById(req, res) {
        const empId = req.params.empId;

        const employee = await EmployeeModel.find({ EmpId: empId });
        console.log(employee);

        if (employee.length == 0) {
            res.status(404).send("Employee Not Found");
        }
        else {
            res.send(employee);
        }
    }

    //ADD EMPLOYEE
    async addEmployee(req, res) {
        const employee = req.body;

        let newEmployee = new EmployeeModel(employee);
        let result;

        try {
            result = await newEmployee.save();
            //console.log(result);
            res.send("Employee Added Successfully");
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }

    //UPDATE EMPLOYEE
    async updateEmployee(req, res) {
        const employee = req.body;
        const empId = req.params.empId;

        let result = await EmployeeModel.updateOne({ EmpId: empId}, { $set: { 
                                                                                FirstName: employee.FirstName,
                                                                                LastName: employee.LastName,
                                                                                DateOfBirth: employee.DateOfBirth,
                                                                                AddressLine1: employee.AddressLine1,
                                                                                City: employee.City,
                                                                                State: employee.State,
                                                                                Country: employee.Country,
                                                                                HireDate: employee.HireDate
                                                                            }});

        //console.log(result);
        if(result.nModified == 0){
            res.status(404).send("Employee not found");
        }
        else{
            res.send("Employee updated successfully");
        }
        
    }

    //DELETE EMPLOYEE
    async deleteEmployee(req, res) {
        const empId = req.params.empId;

        let result = await EmployeeModel.deleteOne({ EmpId: empId});
        
        if(result.deletedCount == 0){
            res.status(404).send("Employee not found");
        }
        else{
            res.send("Employee deleted successfully");
        }
        
    }

    //GET ALL ASSIGNMENTS
    async getAllAssignments(req, res) {

        const empId = req.params.empId;

        const result = await EmployeeModel.find({ EmpId: empId});

        if(result.length == 0){
            res.status(404).send("Employee not found");
        }
        else{

            const assignments = await AssignmentModel.find({ EmpId: empId});
            //console.log(assignments);
            res.send(assignments);
        }
        console.log(result);
        
    }

    //GET ASSIGNMENT BY ID
    async getAssignmentById(req, res) {
        const empId = req.params.empId;
        const asgId = req.params.asgId;
        
        const employee = await EmployeeModel.find({ EmpId: empId });
        //console.log(employee);

        if (employee.length == 0) {
            res.status(404).send("Employee Not Found");
            return;
        }

        const assignment = await AssignmentModel.find({ EmpId: empId, AssignmentId: asgId});

        if(assignment.length == 0){
            res.status(404).send("Assignment not found");
        }
        else{
            res.send(assignment);
        }
    }

    //ADD ASSIGNMENTS
    async addAssignment(req, res) {
        const empId = req.params.empId;

        const employee = await EmployeeModel.find({ EmpId: empId });
        //console.log(employee);

        if (employee.length == 0) {
            res.status(404).send("Employee Not Found");
            return;
        }

        let assignment = req.body;
        assignment.EmpId = empId;

        let newAssignment = new AssignmentModel(assignment);

        let result;

        try{
            result = await newAssignment.save();
            res.send("Assignment added succussfully");
        }
        catch{
            res.status(404).send(e.message);
        }
        
    }

    //UPDATE ASSIGNMENT
    async updateAssignment(req, res) {
        const empId = req.params.empId;
        const asgId = req.params.asgId;
        
        const employee = await EmployeeModel.find({ EmpId: empId });
        //console.log(employee);

        if (employee.length == 0) {
            res.status(404).send("Employee Not Found");
            return;
        }

        let assignment = req.body;

        let result = await AssignmentModel.updateOne({ EmpId: empId, AssignmentId: asgId}, {$set: 
                                                                                                {
                                                                                                    AssignmentCategory: assignment.AssignmentCategory,
                                                                                                    AssignmentName: assignment.AssignmentName,
                                                                                                    AssignmentStatus: assignment.AssignmentStatus
                                                                                                }});

        //console.log(result);

        if(result.nModified == 0){
            res.status(404).send("Assignment not updated");
        }
        else{
            res.send("Assignment updated successfully");
        }
    }

    //DELETE ASSIGNMENT
    async deleteAssignment(req, res){
        const empId = req.params.empId;
        const asgId = req.params.asgId;

        const employee = await EmployeeModel.find({ EmpId: empId });
        //console.log(employee);

        if (employee.length == 0) {
            res.status(404).send("Employee Not Found");
            return;
        }

        let result = await AssignmentModel.deleteOne({ EmpId: empId, AssignmentId: asgId});

        if(result.deletedCount == 0){
            res.status(404).send("Assignment not found");
        }
        else{
            res.send("Assignment deleted successfully")
        }
    }
}

module.exports = EmployeeDomain;