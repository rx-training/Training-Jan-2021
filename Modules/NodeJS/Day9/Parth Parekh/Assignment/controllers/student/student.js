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
    static async getStudentDataFromId (req,res){
        const studentData = new StudentData();
        studentData.getStudentDataFromId(req, res);
    }
}

router.use("/:id/Fees", fees);
router.use("/:id/Result", result);

//Get Methods
router.get('/',StudentController.getAllStudentData);
router.get("/:id", StudentController.getStudentDataFromId);

module.exports = router;