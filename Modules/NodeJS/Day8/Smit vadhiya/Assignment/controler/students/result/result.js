const express = require('express');
const fs = require('fs');
const router = express.Router()

class StudentResultApis{
    static getStudentResult(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData.Result)
    }

    static putStudentResultById(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        const index = students.indexOf(myData)
        students[0].Result.Eng = parseInt(req.params.marks)
        fs.writeFile('./jsonFiles/students.json',JSON.stringify(students), (err) => {
            if(err){
                console.log(err.message);
            } else {
                res.send("updated")
            }
        })
    }

}
// Create a RESTFUL API which will return a particular student Exam Result. Result Fields are 
//    http://localhost:3000/students/1/result

router.get('/:id/result',(req,res) => StudentResultApis.getStudentResult(req,res))


// 5) Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
//    http://localhost:3000/students/1/:sub

router.put('/:id/eng/:marks',(req,res) => StudentResultApis.putStudentResultById(req,res))

module.exports = router