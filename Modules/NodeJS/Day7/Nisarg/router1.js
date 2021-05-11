const express = require("express");
const LoggerMiddleware = require("./loggerMiddleware");
var router = express.Router();
const empData = require("./employee.json");
const fs = require("fs");

router.use(express.json());
router.use(LoggerMiddleware);
//All Employee Data
router.get("/", function (req, res) {
    res.json(empData);
});

//One Employee Data
router.get("/:id", function (req, res) {
    const array = empData.find((c) => c.EmpId == req.params.id);
    if (!array) {
        res.send(`Employee Not Found for EmpId : ${req.params.id}`);
    } else res.json(array);
});

// Get a assignments
router.get("/:id/child/assignments", (req, res) => {
    const array = empData.find((c) => c.EmpId == req.params.id);
    if (!array) {
        res.send(`Assignments Not Found of EmpId : ${req.params.id}`);
    } else res.send(array.Assignments);
});

//Get Assignment Details For AssignmentId
router.get("/:id/child/assignments/:assignId", (req, res) => {
    const array = empData.find((c) => c.EmpId == req.params.id);
    if (!array) {
        res.send(`EmployeeId not Found`);
        return;
    } else {
        let assign = array.Assignments;
        let assignmentData = assign.find(
            (c) => c.AssignmentId == req.params.assignId
        );
        if (!assignmentData) {
            res.send(`For  EmpId : ${req.params.id} AssignmentId Not Found`);
        } else {
            res.send(assignmentData);
        }
    }
});

//Update Assignment
router.put("/:id/child/assignments/:assignId", (req, res) => {
    const array = empData.find((c) => c.EmpId == req.params.id);
    let data = req.body;
    //console.log(data);
    //Employee Exist or not
    if (!array) {
        res.send(`EmployeeId not Found`);
        return;
    } else {
        let assign = array.Assignments;
        let assignmentData = assign.find(
            (c) => c.AssignmentId == req.params.assignId
        );

        //AssignmentId Available or not
        if (!assignmentData) {
            res.send(`For  EmpId : ${req.params.id} AssignmentId Not Found`);
        } else {
            for (let i = 0; i < empData.length; i++) {
                for (let j = 0; j < empData[i].Assignments.length; j++) {
                    if (
                        empData[i].Assignments[j].AssignmentId ==
                        req.params.assignId
                    ) {
                        //update Assignment Data
                        empData[i].Assignments[j].AssignmentId =
                            data.AssignmentId;
                        empData[i].Assignments[j].AssignmentName =
                            data.AssignmentName;
                        empData[i].Assignments[j].AssignmentCategory =
                            data.AssignmentCategory;
                        empData[i].Assignments[j].AssignmentStatus =
                            data.AssignmentStatus;
                    }
                }
            }
            fs.writeFile("employee.json", JSON.stringify(empData), (err) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send("Data Updated Successfully");
                }
            });
        }
    }
});

module.exports = router;