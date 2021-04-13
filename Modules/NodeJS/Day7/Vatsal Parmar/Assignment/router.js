var express = require("express");
const { valid } = require("joi");
const fs = require("fs");
var router = express.Router();
const employees = require("./employees.json");

var empData = employees;

//showing an employee
router.get("/:id", function (req, res) {
  //checking if data available
  let data = empData.find((e) => e.EmpId == req.params.id);
  if (data) {
    empData.forEach((value) => {
      if (value.EmpId == req.params.id) {
        res.json(value);
      }
    });
  } else {
    res.status(404).send("Data Not Found");
  }
});

//Child routing for assignments

//Get All Assignments
//http://localhost:3000/emps/{empID}/child/assignments
router.get("/:id/child/assignments", function (req, res) {
  //checking if data available
  let data = empData.find((e) => e.EmpId == req.params.id);
  if (data) {
    empData.forEach((value) => {
      if (value.EmpId == req.params.id) {
        res.json(value.Assignments);
      }
    });
  } else {
    res.status(404).send("Data Not Found");
  }
});

//Get an Assignment
//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID}

router.get("/:id/child/assignments/:AssignmentId", function (req, res) {
  //checking id data available
  let data = empData.find((e) => e.EmpId == req.params.id);
  if (data) {
    empData.forEach((value) => {
      if (value.EmpId == req.params.id) {
        //checking if assignment available
        let d = value.Assignments.find(
          (a) => a.AssignmentId == req.params.AssignmentId
        );
        if (d) {
          value.Assignments.forEach((val) => {
            if (val.AssignmentId == req.params.AssignmentId) {
              res.json(val);
            }
          });
        } else {
          res.status(404).send("Assignment Not Available");
        }
      }
    });
  } else {
    res.status(404).send("Data Not Found");
  }
});

//Update an assignment
//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID}

router.put("/:id/child/assignments/:AssignmentId", function (req, res) {
  //checking if data available
  let data = empData.find((e) => e.EmpId == req.params.id);
  if (data) {
    for (let i = 0; i < empData.length; i++) {
      if (empData[i].EmpId == req.params.id) {
        //checking if assignment available
        let a = empData[i].Assignments.find(
          (d) => d.AssignmentId == req.params.AssignmentId
        );
        //console.log(req.body);
        if (a) {
          for (let j = 0; j < empData[i].Assignments.length; j++) {
            if (
              empData[i].Assignments[j].AssignmentId == req.params.AssignmentId
            ) {
              //updating the changes
              empData[i].Assignments[j].AssignmentName =
                req.body.AssignmentName;
              empData[i].Assignments[j].AssignmentStatus = req.body.status;
              empData[i].Assignments[j].AssignmentCategory = req.body.category;
              //writing changes in json file
              fs.writeFile(
                "employees.json",
                JSON.stringify(empData),
                { flag: "w" },
                (err) => {
                  if (err) {
                    console.log(err);
                    res.end();
                  } else {
                    res
                      .status(200)
                      .send("Assignment Data Updated Successfully");
                  }
                }
              );
              break;
            }
          }
        } else {
          res.status(404).send("Assignment Not Available");
        }
        break;
      }
    }
  } else {
    res.status(404).send("Data Not Found");
  }
});

module.exports = router;
