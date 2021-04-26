const express = require('express');
const router = express.Router()

const resultApi = require('./result/result')
const feesApis = require('./fees/fees')

class StudentAllApis{
    static getAllStudents(req,res){
        res.send(students) 
    }

    static getStudentById(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData)
    }

}
// 1) Create a RESTFUL API which will return a Studentlist.
//    http://localhost:3000/students

router.get('/',StudentAllApis.getAllStudents)

// 2) Create RESTFUL API which will return a Particular Student Record
//    http://localhost:3000/students/1

router.get('/:id',StudentAllApis.getStudentById)


router.use('/',resultApi)
router.use('/',feesApis)

module.exports = router