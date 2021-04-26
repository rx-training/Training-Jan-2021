const express = require('express');
const fs = require('fs');
const router = express.Router()

class StudentAllApis{
    static getAllStudents(req,res){
        res.send(students) 
    }

    static getStudentById(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData)
    }

    static getStudentFee(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData.Fees)
    }

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
// 1) Create a RESTFUL API which will return a Studentlist.
//    http://localhost:3000/students

router.get('/',(req,res) => StudentAllApis.getAllStudents(req,res))

// 2) Create RESTFUL API which will return a Particular Student Record
//    http://localhost:3000/students/1

router.get('/:id',(req,res) => StudentAllApis.getStudentById(req,res))

// 3) Create a RESTFUL API which return a particular student FEES Record. Fees field are 
//     http://localhost:3000/students/1/fees

router.get('/:id/fees',(req,res) => StudentAllApis.getStudentFee(req,res))

// 4) Create a RESTFUL API which will return a particular student Exam Result. Result Fields are 
//    http://localhost:3000/students/1/result

router.get('/:id/result',(req,res) => StudentAllApis.getStudentResult(req,res))


// 5) Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
//    http://localhost:3000/students/1/:sub

router.put('/:id/eng/:marks',(req,res) => StudentAllApis.putStudentResultById(req,res))

module.exports = router