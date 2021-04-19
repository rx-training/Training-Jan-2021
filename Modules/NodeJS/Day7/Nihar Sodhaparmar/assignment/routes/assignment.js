const express = require('express');
const fs = require('fs');
const router = express.Router();
const empArray = require('../employees.json');


//GET ASSIGNMENTS
router.get('/:empId', (req, res) => {
    const empId = req.params.empId;
    let found = false;
    let employee;

    empArray.forEach( emp => {

        if(emp.EmpId = empId){
            found = true;
            employee = emp;
        }
    });

    if(!found){
        res.status(404).send("Employee not found");
    }
    else{
        res.send(employee.Assignments);
    }
})


//ADD ASSIGNMENT
router.post('/:empId', (req, res) => {
    const empId = req.params.empId;
    let found = false;

    let assignment = req.body;

    var employee = empArray.find( (emp) => emp.EmpId == empId);

    empArray.forEach(emp => {

        if(emp.EmpId == empId){

            found = true;

            let assignments = employee.Assignments || [];

            let newAssignment = {
                "AssignmentId": assignment.AssignmentId,
                "AssignmentCategory": assignment.AssignmentCategory,
                "AssignmentName": assignment.AssignmentName,
                "AssignmentStatus": assignment.AssignmentStatus
            }

            assignments.push(newAssignment);

            employee.Assignments = assignments;
        }
    });

    if(!found){
        res.status(404).send("Employee not found");
    }
    else{
        
        fs.writeFile('./employees.json', JSON.stringify(empArray), (err) => {
            if(err){
                res.status(400).send(err);
                return;
            }
            res.send(empArray);
        });

    }

});

module.exports = router;