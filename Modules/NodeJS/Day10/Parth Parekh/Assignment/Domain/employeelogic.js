const EmpModel = require("../Models/Employee");

class EmployeeData {
    //Get EmployeeData
    async getAllEmployeeData(req, res) {
        const result = await EmpModel.find();
        res.send(result);
    }
    //Get EmployeeData From EmpId
    async getEmployeeDataFromId(req, res) {
        const result = await EmpModel.findById(req.params.id);
        if (!result)
            return res.send(
                `Employee Data Not Found For EmpId: ${req.params.id}`
            );
        else {
            res.send(result);
        }
    }
    //Insert Employee Data
    async insertEmployee(req, res) {
        const data = req.body;
        const empObject = new EmpModel(data);
        const result = await empObject.save();
        res.send(result);
    }
    //Update A EmployeeData
    async updateEmployee(req, res) {
        let data = req.body;
        const updateEmp = await EmpModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    FirstName: data.FirstName,
                    LastName: data.LastName,
                },
            },
            { new: true }
        );
        res.send(updateEmp);
    }

    //Get a Assignments From EmpId
    async getAssignmentFromEmpId(req, res) {
        const result = await EmpModel.findById(req.params.id);
        if (!result)
            return res.send(
                `Assignment Details Not Found For EmpId: ${req.params.id}`
            );
        else {
            res.send(result.Assignments);
        }
    }

    //Get Assignment Details Form AssignmentId
    async getAssignmentDetailsFromAssignmentId(req, res) {
        const result = await EmpModel.findById(req.params.id);
        if (!result)
            return res.send(`Employee Not Found For EmpId: ${req.params.id}`);
        else {
            const assignmentData = result.Assignments.find(
                (c) => c.id == req.params.assignId
            );
            if (!assignmentData)
                return res.send(
                    `Assignment Details Not Found For EmpId: ${req.params.id}`
                );
            else {
                res.send(assignmentData);
            }
        }
    }

    //Update AssignDetails Form AssignId For Valid EmpId
    // async updateAssignmentDetails(req, res) {
        
    // }
}

module.exports = EmployeeData;
