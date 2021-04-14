const fs = require('fs')
const express = require('express')
const router = express.Router()
var employees = require('../myJson/employees.json')
var assignment = require('../myJson/assignments.json')

router.use(express.json())

class EmpRoute {
    static getAllData(req,res){
        res.send(employees)
        res.end()
    }


    static getEmployeeData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        res.send(findData)
        res.end()
    }

    static postEmployeeData(req,res){
        const newEmployee = req.body
        employees.push(newEmployee)
        res.send(newEmployee)
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })
    }

    static updateEmployeeData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const employeeNewData = req.body
        for(var i in employeeNewData){
            findData[i] = employeeNewData[i]   
        }
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })                                                                                                                                                                    
    }

    static deleteEmployeeData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const index = employees.indexOf(findData)
        employees.splice(index,1)
        fs.writeFile('./myJson/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        }) 
    }

    
   
}

router.get('/' , (req,res) => {
    EmpRoute.getAllData(req,res)
})

router.get('/:id' , (req,res) => {
    EmpRoute.getEmployeeData(req,res,parseInt(req.params.id)) 
})


router.put('/:id' , (req,res) => {
    EmpRoute.updateEmployeeData(req,res,parseInt(req.params.id)) 
})

router.delete('/:id' , (req,res) => {
    EmpRoute.deleteEmployeeData(req,res,parseInt(req.params.id)) 
})

router.post('/' , (req,res) => {
    EmpRoute.postEmployeeData(req,res)
})


//employee with assignment data 
class EmpAssignmentRoute {
    static getData(req,res,id){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        console.log(assignmenrIds);
        var myAssignment = []
        for(var i of assignmenrIds){
            var newData = assignment.find(c => c.AssignmentId == i)
            myAssignment.push(newData)
           
        }
        console.log(myAssignment);
        const AssignmentData = {
            CitizenshipId : id,
            myAssignment : myAssignment 
        }
        res.send(AssignmentData)
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
    
    static getAssignmentData(req,res,id,assignId){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        console.log(assignmenrIds);
        if(!assignmenrIds.includes(assignId)){
             return res.status(404).send("404 !!! Employee has no assignment with this id")
        }
        const findAssignment = assignment.find(c => c.AssignmentId == assignId)

        const AssignmentData = {
            CitizenshipId : id,
            RequiredAssignment : findAssignment 
        }
        res.send(AssignmentData)
    }

    
    static putAssignmentData(req,res,id,assignId){
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const assignmenrIds = findData.assignments
        console.log(assignmenrIds);
        if(!assignmenrIds.includes(assignId)){
             return res.status(404).send("404 !!! Employee has no assignment with this id")
        }
        const findAssignment = assignment.find(c => c.AssignmentId == assignId)
        
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



router.put('/:id/child/assignments',(req,res) => {
    console.log();
    EmpAssignmentRoute.putData(req,res,parseInt(req.params.id))
})



router.get('/:id/child/assignments',(req,res) => {
    console.log(req.params);
    EmpAssignmentRoute.getData(req,res,parseInt(req.params.id))
})


router.get('/:id/child/assignments/:assignId',(req,res) => {
    console.log(req.params);
    EmpAssignmentRoute.getAssignmentData(req,res,parseInt(req.params.id),parseInt(req.params.assignId))
})


router.put('/:id/child/assignments/:assignId',(req,res) => {
    console.log(req.params);
    EmpAssignmentRoute.putAssignmentData(req,res,parseInt(req.params.id),parseInt(req.params.assignId))
})



module.exports = router