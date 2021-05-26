const express = require("express");
const router = express.Router();

const StudentDomain = require("../../domains/student.domain");

class StudentsController {
  // add student
  static async addStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.addStudent(req, res);
  }

  // get all students
  static async getAllStudents(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getAllStudents(req, res);
  }

  // get student by id
  static async getStudentById(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getStudentById(req, res);
  }

  // update student
  static async updateStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.updateStudent(req, res);
  }

  // delete student
  static async deleteStudent(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.deleteStudent(req, res);
  }
}

// add student
router.post("/", StudentsController.addStudent);

// get all students
router.get("/", StudentsController.getAllStudents);

// get student by id
router.get("/:id", StudentsController.getStudentById);

// update student
router.put("/:id", StudentsController.updateStudent);

// delete student
router.delete("/:id", StudentsController.deleteStudent);

module.exports = router;
