const express = require('express');
const router = express.Router()
const Students = require('../../mongoDb/studentCollection/students')
const resultApi = require('./result/result')
const feesApis = require('./fees/fees')

class StudentAllApis{
    static async getAllStudents(req,res){
        const result = await Students.find() 
        res.send(result)
    }

    static async getStudentById(req,res){
        const myData = await Students.find({ID : req.params.id}) 
        if(myData.length == 0) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData)
    }

    static async postStudentData(req,res){
        const data = req.body
        console.log(data);
        const newData = new Students(data)

        const result = await newData.save()
        res.send(result);
    }

}
// 1) Create a RESTFUL API which will return a Studentlist.
//    http://localhost:3000/students

router.get('/',StudentAllApis.getAllStudents)

//insert new user data   http://localhost:3000/students

router.post('/',StudentAllApis.postStudentData)

// 2) Create RESTFUL API which will return a Particular Student Record
//    http://localhost:3000/students/1

router.get('/:id',StudentAllApis.getStudentById)


router.use('/',resultApi)
router.use('/',feesApis)

module.exports = router