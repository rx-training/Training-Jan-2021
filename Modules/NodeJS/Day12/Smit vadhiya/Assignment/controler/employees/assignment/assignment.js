const express = require('express')
const router = express.Router({ mergeParams: true })
const fs = require('fs')
const Employees = require('../../../mongoDb/empCollection/employees')
const Assignments = require('../../../mongoDb/assignmentCollection/assignment')


//employee with assignment data 
class EmpAssignmentRoute {
    static async getData(req,res){
        var id = parseInt(req.params.id)
        const myData = await Employees.find({CitizenshipId : id}) //get employee data by id
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")

        const assignmenrIds = myData[0].assignments //get assignment array of employee
        var myAssignment = []
        for(var i of assignmenrIds){ //retrive full assignment  data which is assign to employee
            var newData = await Assignments.find({AssignmentId : i})
            myAssignment.push(newData[0])
        }
        res.send(myAssignment)
    }

    static async putData(req,res){
        var id = parseInt(req.params.id)
        const myData = await Employees.find({CitizenshipId : id}) //get employee data by id
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")

        const data =  req.body
        myData[0].assignments = data //store assignmentid array in employees assignments
        const result = await myData[0].save()
        res.send(result)
    }
    
    static async getAssignmentData(req,res){
        var id = parseInt(req.params.id)
        const myData = await Employees.find({CitizenshipId : id}) //get employee data by id
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")

        var assignId = parseInt(req.params.assignId)
        const assignmenrIds = myData[0].assignments
        if(!assignmenrIds.includes(assignId)) 
            return res.status(404).send("404 !!! Employee has no assignment with this id")
            
        const newData = await Assignments.find({AssignmentId : assignId})
        const AssignmentData = {
            CitizenshipId : id,
            RequiredAssignment : newData 
        }
        res.send(AssignmentData)
    }

    
    static async putAssignmentData(req,res){
        var id = parseInt(req.params.id)
        const myData = await Employees.find({CitizenshipId : id}) //get employee data by id
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")

        var assignId = parseInt(req.params.assignId)
        const assignmenrIds = myData[0].assignments
        if(!assignmenrIds.includes(assignId)) 
            return res.status(404).send("404 !!! Employee has no assignment with this id")
            
        const assign = await Assignments.find({AssignmentId : assignId})


        const newData = req.body

        for(var i in newData){
            assign[0][i] = newData[i]
        }
        const AssignmentData = {
            CitizenshipId : id,
            RequiredAssignment : assign
        }
        try{
            const result = await assign[0].save() 
        res.send(AssignmentData)
        } catch(ex) {
            res.status(511).send(ex.message)
        }
    }
}



router.put('/',(req,res) =>  EmpAssignmentRoute.putData(req,res))
router.get('/',(req,res) => EmpAssignmentRoute.getData(req,res))
router.get('/:assignId',(req,res) => EmpAssignmentRoute.getAssignmentData(req,res))
router.put('/:assignId',(req,res) => EmpAssignmentRoute.putAssignmentData(req,res))


module.exports = router