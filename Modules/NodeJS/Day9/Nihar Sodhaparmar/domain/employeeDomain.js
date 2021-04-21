var empArray = require('../json/employees.json');
const fs = require('fs');

class EmployeeDomain {

    //GET ALL EMPLOYEE DATA
    getAllEmployees(req, res) {
        res.json(empArray);
    }

    //GET SPECIFIC EMPLOYEE DATA USING ID
    getEmployeeById(req, res) {
        const empId = req.params.empId;
        let found = false;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;
                res.send(emp);
            }
        });

        if (!found) {
            res.status(404).send("Employee Not Found");
        }
    }

    //ADD EMPLOYEE
    addEmployee(req, res) {
        const employee = req.body;
        let empId = empArray.length + 1;

        let newEmployee = {
            "EmpId": empId,
            "FirstName": employee.FirstName,
            "LastName": employee.LastName,
            "DateOfBirth": employee.DateOfBirth,
            "AddressLine1": employee.AddressLine1,
            "City": employee.City,
            "State": employee.State,
            "Country": employee.Country,
            "HireDate": employee.HireDate
        }

        empArray.push(newEmployee);


        fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) => {
            if (err) {
                res.status(400).send(err);
                return;
            }
            else {
                res.send('Employee added successfully');
            }
        });
    }

    //UPDATE EMPLOYEE
    updateEmployee(req, res) {
        const employee = req.body;
        const empId = req.params.empId;
        let found = false;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;

                emp.FirstName = employee.FirstName;
                emp.LastName = employee.LastName;
                emp.DateOfBirth = employee.DateOfBirth;
                emp.AddressLine1 = employee.AddressLine1;
                emp.City = employee.City;
                emp.State = employee.State;
                emp.Country = employee.Country;
                emp.HireDate = employee.HireDate;

            }
        });

        if (!found) {
            res.status(404).send("Employee Not Found");
        }
        else {
            fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) => {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                else {
                    res.send('Employee details updated successfully');
                }

            });

        }
    }

    //DELETE EMPLOYEE
    deleteEmployee(req, res) {
        const empId = req.params.empId;

        if (empId < empArray.length || empId > empArray.length) {
            res.status(404).send("Employee Not Found");
        }
        else {
            empArray.splice(empId - 1, 1);
            fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) => {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                else {
                    res.send('Employee deleted successfully');
                }
            })

        }
    }

    //GET ALL ASSIGNMENTS
    getAllAssignments(req, res) {

        const empId = req.params.empId;
        let found = false;
        let employee;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;
                employee = emp;
            }
        });

        if (!found) {
            res.status(404).send("Employee not found");
        }
        else {
            let assignments = employee.Assignments;

            if (assignments == undefined) {
                res.status(404).send("Assignments not found");
            }
            else {
                res.send(assignments);
            }

        }
    }

    //GET ASSIGNMENT BY ID
    getAssignmentById(req, res) {
        const empId = req.params.empId;
        const asgId = req.params.asgId;
        let found = false;
        let asgfound = false;
        let employee;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;
                employee = emp;
            }
        });

        if (!found) {
            res.status(404).send("Employee not found");
        }
        else {
            let assignments = employee.Assignments;

            if (assignments == undefined) {
                res.status(404).send("Assignments not found");
            }
            else {

                let assignment;
                assignments.forEach(asg => {

                    if (asg.AssignmentId == asgId) {
                        asgfound = true;
                        assignment = asg;
                    }
                });

                if (!asgfound) {
                    res.status(404).send("Assignments not found");
                }
                else {
                    res.send(assignment);
                }
            }

        }
    }

    //ADD ASSIGNMENTS
    addAssignment(req, res) {
        const empId = req.params.empId;
        let found = false;

        let assignment = req.body;

        var employee = empArray.find((emp) => emp.EmpId == empId);

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {

                found = true;

                let assignments = employee.Assignments || [];

                let newAssignment = {
                    "AssignmentId": assignments.length + 1,
                    "AssignmentCategory": assignment.AssignmentCategory,
                    "AssignmentName": assignment.AssignmentName,
                    "AssignmentStatus": assignment.AssignmentStatus
                }

                assignments.push(newAssignment);

                employee.Assignments = assignments;
            }
        });

        if (!found) {
            res.status(404).send("Employee not found");
        }
        else {

            fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) => {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                res.send('Assignment Added Successfully');
            });

        }
    }

    //UPDATE ASSIGNMENT
    updateAssignment(req, res) {
        const empId = req.params.empId;
        const asgId = req.params.asgId;
        const newAssignment = req.body;

        let found = false;
        let asgfound = false;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;

                if (emp.Assignments != undefined) {
                    emp.Assignments.forEach(asg => {

                        if (asg.AssignmentId == asgId) {
                            asgfound = true;

                            asg.AssignmentCategory = newAssignment.AssignmentCategory;
                            asg.AssignmentName = newAssignment.AssignmentName;
                            asg.AssignmentStatus = newAssignment.AssignmentStatus;
                        }
                    });
                }

            }
        });

        if (!found) {
            res.status(404).send("Employee not found");
        }
        else if(!asgfound) {
            res.status(404).send("Assignment not found");
        }
        else{
            fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) =>{
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                res.send('Assignment Updated Successfully');
            })
        }
    }

    //DELETE ASSIGNMENT
    deleteAssignment(req, res){
        const empId = req.params.empId;
        const asgId = req.params.asgId;

        let found = false;
        let asgfound = false;

        empArray.forEach(emp => {

            if (emp.EmpId == empId) {
                found = true;

                if (asgId < emp.Assignments.length || asgId > emp.Assignments.length) {
                    asgfound = false;
                }
                else {
                    asgfound= true;
                    emp.Assignments.splice(asgId - 1, 1);
                }
            }
        });

        if (!found) {
            res.status(404).send("Employee not found");
        }
        else if(!asgfound) {
            res.status(404).send("Assignment not found");
        }
        else{
            fs.writeFile('./json/employees.json', JSON.stringify(empArray), (err) =>{
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                res.send('Assignment Deleted Successfully');
            })
        }
    }

}

module.exports = EmployeeDomain;