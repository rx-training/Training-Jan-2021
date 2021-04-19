const express = require('express');
const router = express.Router();

const feesRouter = require('./fees/fees');
const resultRouter = require('./result/result');

const StudentDomain = require('../../domain/studentDomain');

router.use('/:studentId/fees', feesRouter);
router.use('/:studentId/result', resultRouter);

class StudentController{

    //GET ALL STUDENTS
    static async getAllStudents(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.getAllStudents(req, res);
    }

    //GET SPECIFIC STUDENT WITH ID
    static async getStudentById(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.getStudentById(req, res);
    }

    //ADD STUDENT
    static async addStudent(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.addStudent(req, res);
    }

    //DELETE STUDENT
    static async deleteStudent(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.deleteStudent(req, res);
    }
}

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getStudentById);
router.post('/', StudentController.addStudent);
router.delete('/:studentId', StudentController.deleteStudent);

module.exports = router; 