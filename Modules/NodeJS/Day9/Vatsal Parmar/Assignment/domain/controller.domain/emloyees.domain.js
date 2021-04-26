var employees = require("../../json/employees.json");
const fs = require("fs");

class EmployeeDomain {
  //To get all employees
  getAllEmployees(req, res) {
    res.json(employees);
    res.end();
  }
  //To get an employee by EmpId
  getAnEmployee(req, res) {
    //checking if data available
    let id = req.params.EmpId;
    let data = employees.find((e) => e.EmpId == id);
    if (data) {
      employees.forEach((value) => {
        if (value.EmpId == id) {
          res.json(value);
        }
      });
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To Create an Employee
  createAnEmployee(req, res) {
    //getting user input
    let data = req.body;

    employees.push(data);

    //writing changes in json file
    fs.writeFile(
      "./json/employees.json",
      JSON.stringify(employees),
      { flag: "w" },
      (err) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.status(200).send("Emloyee Created Successfully");
        }
      }
    );
  }
  //To update an employee
  updateAnEmployee(req, res) {
    //getting user input
    let data = req.body;

    const isAvail = employees.find((e) => e.EmpId == data.EmpId);
    if (isAvail) {
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].EmpId == data.EmpId) {
          employees[i].FirstName = data.FirstName;
          employees[i].LastName = data.LastName;

          //writing changes in json file
          fs.writeFile(
            "./json/employees.json",
            JSON.stringify(employees),
            { flag: "w" },
            (err) => {
              if (err) {
                console.log(err);
                res.end();
              } else {
                res.status(200).send("Emloyee Data Updated Successfully");
              }
            }
          );
          break;
        }
      }
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To get all assignment by EmployeeId
  getAssignments(req, res) {
    //checking if data available
    let data = employees.find((e) => e.EmpId == req.params.EmpId);
    if (data) {
      employees.forEach((value) => {
        if (value.EmpId == req.params.EmpId) {
          res.json(value.Assignments);
        }
      });
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To get an assignment by AssignmentId
  getAnAssignment(req, res) {
    let data = employees.find((e) => e.EmpId == req.params.EmpId);
    if (data) {
      employees.forEach((value) => {
        if (value.EmpId == req.params.EmpId) {
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
  }
  //To update an assignmet
  updateAnAssignment(req, res) {
    //checking if data available
    let data = employees.find((e) => e.EmpId == req.params.EmpId);
    if (data) {
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].EmpId == req.params.EmpId) {
          //checking if assignment available
          let a = employees[i].Assignments.find(
            (d) => d.AssignmentId == req.params.AssignmentId
          );
          if (a) {
            for (let j = 0; j < employees[i].Assignments.length; j++) {
              if (
                employees[i].Assignments[j].AssignmentId ==
                req.params.AssignmentId
              ) {
                //updating the changes
                employees[i].Assignments[j].AssignmentName =
                  req.body.AssignmentName;
                employees[i].Assignments[j].AssignmentStatus =
                  req.body.AssignmentStatus;
                employees[i].Assignments[j].AssignmentCategory =
                  req.body.AssignmentCategory;
                //writing changes in json file
                fs.writeFile(
                  "./json/employees.json",
                  JSON.stringify(employees),
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
  }
}

module.exports = EmployeeDomain;
