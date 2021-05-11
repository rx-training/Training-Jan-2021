const express = require('express');
const EmployeeData = require("../../../Domain/employeelogic");
const router = express.Router({mergeParams:true});


class EmpAssignmentController {
    static async getAssignmentFromEmpId(req, res) {
        const employeeData = new EmployeeData();
        employeeData.getAssignmentFromEmpId(req, res);
    }
    static async getAssignmentDetailsFromAssignmentId(req, res) {
        const employeeData = new EmployeeData();
        employeeData.getAssignmentDetailsFromAssignmentId(req, res);
    }
    // static async updateAssignmentDetails (req,res){
    //     const employeeData = new EmployeeData();
    //     employeeData.updateAssignmentDetails(req, res);
    // }
}

//Get Methods
router.get('/',EmpAssignmentController.getAssignmentFromEmpId);
router.get("/:assignId", EmpAssignmentController.getAssignmentDetailsFromAssignmentId);

//Put Methods
//router.put('/:assignId', EmpAssignmentController.updateAssignmentDetails);

module.exports = router;