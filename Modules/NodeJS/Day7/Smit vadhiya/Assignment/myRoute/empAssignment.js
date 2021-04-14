/* const fs = require('fs')
const express = require('express')
const router = express.Router()
var employees = require('../myJson/employees.json')
var assignment = require('../myJson/assignments.json')


router.use(express.json())

class EmpAssignmentRoute {
    static getData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        console.log(assignmenrIds);
        var myAssignment = []
    }

    static putData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const data =  req.body
        findData.assignments = data
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })
    }
}



router.put('/',(req,res) => {
    console.log();
    EmpAssignmentRoute.putData(req,res,parseInt(req.params.empID))
})

router.get('/',(req,res) => {
    console.log(req.params);
    EmpAssignmentRoute.getData(req,res,parseInt(req.params.empID))
})

module.exports = router */