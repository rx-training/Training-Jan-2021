const express = require('express');
const router = express.Router({mergeParams: true});
const EmployeeDomain = require('../../../domain/employeeDomain');

class AssignmentController{

    //GET ALL ASSIGNMENTS
    static async getAllAssignments(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.getAllAssignments(req, res);
    }

    //GET ASSIGNMENT BY ID
    static async getAssignmentById(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.getAssignmentById(req, res);
    }

    //ADD ASSIGNMENT
    static async addAssignment(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.addAssignment(req, res);
    }
    
    //UPDATE ASSIGNMENT
    static async updateAssignment(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.updateAssignment(req, res);
    }

    //DELETE ASSIGNMENT
    static async deleteAssignment(req, res){
        const employeeDomain = new EmployeeDomain();
        employeeDomain.deleteAssignment(req, res);
    }
}

router.get('/', AssignmentController.getAllAssignments);
router.get('/:asgId', AssignmentController.getAssignmentById);
router.post('/', AssignmentController.addAssignment);
router.put('/:asgId', AssignmentController.updateAssignment);
router.delete('/:asgId', AssignmentController.deleteAssignment);

module.exports = router;