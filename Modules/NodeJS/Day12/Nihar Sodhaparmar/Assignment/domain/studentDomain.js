const StudentModel = require('../model/studentModel');

class StudentDomain {

    //GET ALL STUDENTS
    async getAllStudents(req, res) {
        let students = await StudentModel.find();
        res.json(students);
    }

    //GET SPECIFIC STUDENT WITH ID
    async getStudentById(req, res) {
        const studentId = req.params.studentId;

        let result = await StudentModel.find({ ID: studentId});

        if(result.length == 0){
            res.status(404).send("Student not found");
        }
        else{
            res.send(result);
        }
    }

    //ADD STUDENT
    async addStudent(req, res) {

        const student = req.body;

        const newStudent = new StudentModel(student);

        let result;

        try {
            result = await newStudent.save();
            res.send("Student added successfully");
        }
        catch (e) {
            res.ststus(404).send(e.message);
        }
    }

    //DELETE STUDENT
    async deleteStudent(req, res) {

        const studentId = req.params.studentId;

        let result = await StudentModel.deleteOne({ ID: studentId});
        
        if(result.deletedCount == 0){
            res.status(404).send("Student not found");
        }
        else{
            res.send("Student deleted successfully");
        }
    }

    //GET FEES
    async getFees(req, res) {
        const studentId = req.params.studentId;

        let student = await StudentModel.findOne({ ID: studentId});

        if(student == undefined){
            res.status(404).send("Student not found");
        }
        else{
            if(student.Fees == undefined){
                res.status(404).send("Fees not found");
            }
            else{
                res.send(student.Fees);
            }
        }
    }

    //GET RESULT
    async getResult(req, res) {
        const studentId = req.params.studentId;

        let student = await StudentModel.findOne({ ID: studentId});

        if(student == undefined){
            res.status(404).send("Student not found");
        }
        else{
            if(student.Result == undefined){
                res.status(404).send("Result not found");
            }
            else{
                res.send(student.Result);
            }
        }
    }

    //UPDATE RESULT
    async updateResult(req, res) {
        const studentId = req.params.studentId;

        let newResult = req.body;

        let result = await StudentModel.updateOne({ ID: studentId}, { $set: { Result: newResult }});

        if(result.nModified == 0){
            res.status(404).send("Student not found");
        }
        else{
            res.send("Result updated successfully");
        }

    }
}

module.exports = StudentDomain;