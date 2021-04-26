const empData = require("../Json/employee.json");
const fs = require("fs");

class EmployeeData {
    //Get EmployeeData
    getAllEmployeeData(req, res) {
        res.send(empData);
    }
    //Get EmployeeData From EmpId
    getEmployeeDataFromId(req, res) {
        const array = empData.find((c) => c.EmpId == req.params.id);
        if (!array) {
            res.send(`Employee Not Found for EmpId : ${req.params.id}`);
        } else res.json(array);
    }
    //Insert Employee Data
    insertEmployee(req, res) {
        const data = req.body;
        empData.push(data);
        fs.writeFile("./Json/employee.json", JSON.stringify(empData), (err) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.send("Data Inserted Successfully");
            }
        });
    }
    //Update A EmployeeData
    updateEmployee(req, res) {
        let data = req.body;
        for (let i = 0; i < empData.length; i++) {
            if (empData[i].EmpId == req.params.id) {
                empData[i].FirstName = data.FirstName;
                empData[i].LastName = data.LastName;
            }
        }
        fs.writeFile("./Json/employee.json", JSON.stringify(empData), (err) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.send("Data Updated Successfully");
            }
        });
    }

    //Get a Assignments From EmpId
    getAssignmentFromEmpId(req, res) {
        const array = empData.find((c) => c.EmpId == req.params.id);
        if (!array) {
            res.send(`Assignments Not Found of EmpId : ${req.params.id}`);
        } else res.send(array.Assignments);
    }

    //Get Assignment Details Form AssignmentId
    getAssignmentDetailsFromAssignmentId(req, res) {
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
                res.send(
                    `For  EmpId : ${req.params.id} AssignmentId Not Found`
                );
            } else {
                res.send(assignmentData);
            }
        }
    }

    //Update AssignDetails Form AssignId For Valid EmpId
    updateAssignmentDetails (req,res){
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
                res.send(
                    `For  EmpId : ${req.params.id} AssignmentId Not Found`
                );
            } else {
                for (let i = 0; i < empData.length; i++) {
                    for (let j = 0; j < empData[i].Assignments.length; j++) {

                        if(empData[i].Assignments[j].AssignmentId == req.params.assignId)
                        {
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
                fs.writeFile(
                    "./Json/employee.json",
                    JSON.stringify(empData),
                    (err) => {
                        if (err) {
                            console.log(err);
                            res.end();
                        } else {
                            res.send("Data Updated Successfully");
                        }
                    }
                );
            }
        }
    }
}

module.exports = EmployeeData;
