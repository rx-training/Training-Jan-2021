const express = require('express');
const router = express();
const DepartmentDomain = require('../../domain/department.domain');

class DepartmentsController{

    // add department
    static async addDepartment(req, res){
        const departmentDomain = new DepartmentDomain();
        departmentDomain.addDepartment(req, res);
    }

    // get all departments
    static async getAllDepartments(req, res){
        const departmentDomain = new DepartmentDomain();
        departmentDomain.getAllDepartments(req, res);
    }
}

// add departmennt
router.post('/', DepartmentsController.addDepartment);

// get all departments
router.get('/', DepartmentsController.getAllDepartments);

module.exports = router;