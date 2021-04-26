const express = require('express');
const fs = require('fs');
const Students = require('../../../mongoDb/studentCollection/students')
const router = express.Router()

class StudentResultApis{
    static async getStudentResult(req,res){
        const myData = await Students.find({ID : req.params.id}).select({Result : 1})
        if(myData.length == 0) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData[0])
    }

    static async putStudentResultById(req,res){
        const myData = await Students.find({ID : req.params.id})
        if(myData.length == 0) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        const index = students.indexOf(myData)
        myData[0].Result.Eng = parseInt(req.params.marks)
        try{
            const result = await myData[0].save()
            res.send(result)
        } catch(ex) {
            res.status(511).send(ex.message)
        }
        
    }

}
// Create a RESTFUL API which will return a particular student Exam Result. Result Fields are 
//    http://localhost:3000/students/1/result

router.get('/:id/result',(req,res) => StudentResultApis.getStudentResult(req,res))


// 5) Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
//    http://localhost:3000/students/1/:sub

router.put('/:id/eng/:marks',(req,res) => StudentResultApis.putStudentResultById(req,res))

module.exports = router