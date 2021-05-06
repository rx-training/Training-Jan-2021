const express = require("express");
const router = express.Router();
const StudentData = require("../../Domain/studentlogic");
const fees = require('./Fees/studentFees');
const result = require('./Result/studentResult');

class StudentController {
    static async getAllStudentData(req, res) {
        const studentData = new StudentData();
        studentData.getAllStudentData(req, res);
    }
    static async getStudentDataFromId(req, res) {
        const studentData = new StudentData();
        studentData.getStudentDataFromId(req, res);
    }
    static async insertStudent(req, res) {
        const studentData = new StudentData();
        studentData.insertStudent(req, res);
    }
    static async deleteStudent(req, res) {
        const studentData = new StudentData();
        studentData.deleteStudent(req, res);
    }
}

router.use("/:id/Fees", fees);
router.use("/:id/Result", result);

//Get Methods
router.get('/',StudentController.getAllStudentData);
router.get("/:id", StudentController.getStudentDataFromId);

//Post Method
router.post("/", StudentController.insertStudent);

//Delete Method
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;