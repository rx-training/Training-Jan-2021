const express = require("express");
const router = express.Router({ mergeParams: true });
const StudentData = require("../../../Domain/studentlogic");

class ResultController {
    static async getResultDetailsFromStudentId(req, res) {
        const studentData = new StudentData();
        studentData.getResultDetailsFromStudentId(req, res);
    }
    static async updateEngResult(req, res) {
        const studentData = new StudentData();
        studentData.updateEngResult(req, res);
    }
}

//Get Methods
router.get("/", ResultController.getResultDetailsFromStudentId);

//Put Methods
router.put("/", ResultController.updateEngResult);
module.exports = router;