const express = require("express");
const router = express.Router();

const StudentModel = require("../model/student");
class StudentController {
    static async getStudentData(req, res) {
        try {
            const student = await StudentModel.find();
            res.send(student);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    static async getStudentDataFromId(req, res) {
        try {
            const result = await StudentModel.findById(req.params.id);
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    static async insertStudent(req, res) {
        const data = req.body;
        //console.log(data);
        const StudentObj = new StudentModel(data);
        try {
            const result = await StudentObj.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
    static async deleteStudent(req, res) {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id);
            res.send(`Student Deleted Successfully `);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    static async updateStudent(req, res) {
        let pdata = req.body;
        let id = req.params.id;
        //console.log(data);
        try {
            const result = await StudentModel.findByIdAndUpdate(
                id,
                {
                    $set: pdata,
                },
                { new: true }
            );
            res.send(result);
        } catch (ex) {
            res.send("Id Not Found");
        }
    }
}

//Get Methods
router.get("/", StudentController.getStudentData);
router.get("/:id", StudentController.getStudentDataFromId);

//Post
router.post("/", StudentController.insertStudent);

//Delete
router.delete("/:id", StudentController.deleteStudent);

//Put
router.put("/:id", StudentController.updateStudent);

module.exports = router;