var express = require("express");
var router = express.Router();
const StudentModel = require("../models/students.model");

class StudentController {
  //To get all students
  static async get(req, res) {
    const students = await StudentModel.find().select("-__v");
    res.send(students);
  }
  //to get a single student by id
  static async getStudent(req, res) {
    let id = req.params.StudId;
    const student = await StudentModel.findById(id).select("-__v");
    if (student) {
      res.send(student);
    } else {
      res.status(404).send("Student Not Found");
    }
  }
  //To insert student
  static async insertStudent(req, res) {
    let data = req.body;
    const student = new StudentModel(data);
    try {
      const result = await student.save();
      res.send(true);
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
  //To update student
  static async updateStudent(req, res) {
    let data = req.body;
    let id = req.params.StudId;

    try {
      const result = await StudentModel.findByIdAndUpdate(
        id,
        {
          $set: data,
        },
        { new: true }
      );
      res.send(true);
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete student record
  static async deleteStudent(req, res) {
    let id = req.params.StudId;
    const student = await StudentModel.findByIdAndDelete(id);
    if (student) {
      res.send("Student Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

//To get all students
router.get("/", StudentController.get);
//To get an single student by id
router.get("/:StudId", StudentController.getStudent);
//To delete a student record
router.delete("/:StudId", StudentController.deleteStudent);
//To insert student record
router.post("/", StudentController.insertStudent);
//To update student record
router.put("/:StudId", StudentController.updateStudent);

module.exports = router;
