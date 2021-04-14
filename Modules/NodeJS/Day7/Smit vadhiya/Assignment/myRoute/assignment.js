const fs = require('fs')
const express = require('express')
const router = express.Router()
var employees = require('../myJson/employees.json')
var assignments = require('../myJson/assignments.json')

router.use(express.json())

class AssignmentRoute {
    static getAllData(req,res){
        res.send(assignments)
        res.end()
    }


    static getAssignmentsData(req,res,id){
        const findData = assignments.find(c => c.AssignmentId == id)
        if(!findData) return res.status(404).send("404 !!! assignments not found")
        res.send(findData)
        res.end()
    }

    static postAssignmentsData(req,res){
        const newAssignments = req.body
        assignments.push(newAssignments)
        res.send(newAssignments)
        fs.writeFile('./myJson/assignments.json',JSON.stringify(assignments) ,(err) => {
            console.log(err);
        })
    }

    static updateAssignmentsData(req,res,id){
        const findData = assignments.find(c => c.AssignmentId == id)
        if(!findData) return res.status(404).send("404 !!! Assignments not found")
        const assignmentNewData = req.body
        for(var i in assignmentNewData){
            findData[i] = assignmentNewData[i]   
        }
        fs.writeFile('./myJson/assignments.json',JSON.stringify(assignments) ,(err) => {
            console.log(err);
        })                                                                                                                                                                    
    }

    static deleteAssignmentsData(req,res,id){
        const findData = assignments.find(c => c.AssignmentId == id)
        if(!findData) return res.status(404).send("404 !!! assignments not found")
        const index = assignments.indexOf(findData)
        assignments.splice(index,1)
        fs.writeFile('./myJson/assignments.json',JSON.stringify(assignments) ,(err) => {
            console.log(err);
        }) 
    }
}

router.get('/' , (req,res) => {
    AssignmentRoute.getAllData(req,res)
})

router.get('/:id' , (req,res) => {
    AssignmentRoute.getAssignmentsData(req,res,parseInt(req.params.id)) 
})


router.put('/:id' , (req,res) => {
    AssignmentRoute.updateAssignmentsData(req,res,parseInt(req.params.id)) 
})

router.delete('/:id' , (req,res) => {
    AssignmentRoute.deleteAssignmentsData(req,res,parseInt(req.params.id)) 
})

router.post('/' , (req,res) => {
    AssignmentRoute.postAssignmentsData(req,res)
})

module.exports = router