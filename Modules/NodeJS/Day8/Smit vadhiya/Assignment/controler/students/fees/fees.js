const express = require('express');
const router = express.Router() 

class StudentFeesApis{
    static getStudentFee(req,res){
        const myData = students.find((temp) => temp.ID == req.params.id); 
        if(!myData) return res.status(404).send("<h1><h1>404 user not found</h1></h1>")
        res.send(myData.Fees)
    }
}

//  Create a RESTFUL API which return a particular student FEES Record. Fees field are 
//     http://localhost:3000/students/1/fees

router.get('/:id/fees',StudentFeesApis.getStudentFee)

module.exports = router