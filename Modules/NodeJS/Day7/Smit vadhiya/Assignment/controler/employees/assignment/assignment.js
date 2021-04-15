const express = require('express')
const router = express.Router({ mergeParams: true })
const fs = require('fs')


//employee with assignment data 
class EmpAssignmentRoute {
    static getData(req,res){
        var id = parseInt(req.params.id)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        var myAssignment = []
        for(var i of assignmenrIds){
            var newData = assignments.find(c => c.AssignmentId == i)
            myAssignment.push(newData)
        }
        const AssignmentData = {
            CitizenshipId : id,
            myAssignment : myAssignment 
        }
        res.send(AssignmentData)
    }

    static putData(req,res){
        var id = parseInt(req.params.id)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const data =  req.body
        findData.assignments = data
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })
    }
    
    static getAssignmentData(req,res){
        var id = parseInt(req.params.id)
        var assignId = parseInt(req.params.assignId)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        if(!assignmenrIds.includes(assignId)){
             return res.status(404).send("404 !!! Employee has no assignment with this id")
        }
        const findAssignment = assignments.find(c => c.AssignmentId == assignId)

        const AssignmentData = {
            CitizenshipId : id,
            RequiredAssignment : findAssignment 
        }
        res.send(AssignmentData)
    }

    
    static putAssignmentData(req,res){
        var id = parseInt(req.params.id)
        var assignId = parseInt(req.params.assignId)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        if(!assignmenrIds.includes(assignId)){
             return res.status(404).send("404 !!! Employee has no assignment with this id")
        }
        const findAssignment = assignments.find(c => c.AssignmentId == assignId)
        
        const newData = req.body

        for(var i in newData){
            findAssignment[i] = newData[i]
        }
        const AssignmentData = {
            CitizenshipId : id,
            RequiredAssignment : findAssignment 
        }
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })    
        res.send(AssignmentData)
    }
}



router.put('/',(req,res) =>  EmpAssignmentRoute.putData(req,res))
router.get('/',(req,res) => EmpAssignmentRoute.getData(req,res))
router.get('/:assignId',(req,res) => EmpAssignmentRoute.getAssignmentData(req,res))
router.put('/:assignId',(req,res) => EmpAssignmentRoute.putAssignmentData(req,res))


module.exports = router