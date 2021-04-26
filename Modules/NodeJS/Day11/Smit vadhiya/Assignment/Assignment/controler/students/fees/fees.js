const express = require('express');
const router = express.Router() 
const Students = require('../../../mongoDb/studentCollection/students')

class  StudentFeesApis{
    static async getStudentFee(req,res){
        const myData = await Students.find({ID : req.params.id}).select({Fees : 1})
        if(myData.length == 0) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData[0])
    }
}

//  Create a RESTFUL API which return a particular student FEES Record. Fees field are 
//     http://localhost:3000/students/1/fees

router.get('/:id/fees',StudentFeesApis.getStudentFee)

module.exports = router