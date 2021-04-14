var express = require("express");
var router = express.Router();
var StudentDomain = require("../../domain/controller.domain/students.domain");
var fees = require("./child/fees.controller");
var result = require("./child/result.controller");

class StudentController {
  //To get all students
  static async get(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getAllStudents(req, res);
  }
  //To return a Particular Student Record
  static async getStudentRecord(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getStudentRecord(req, res);
  }
}

router.use("/:studentId/fees", fees);
router.use("/:studentId/result", result);
router.get("/", StudentController.get);
router.get("/:studentId", StudentController.getStudentRecord);

module.exports = router;
