const express = require('express')
const router = express.Router()
const fs = require('fs')
const assignementApis = require('./assignment/assignment')
const Employees = require('../../mongoDb/empCollection/employees')

class EmpRoute {
    static async getAllData(req,res){
        const myData = await Employees.find()
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")
        res.send(myData)
        res.end()
    }
    static async getEmployeeData(req,res){
        var id = parseInt(req.params.id)
        const myData = await Employees.find({CitizenshipId : id})
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")
        res.send(myData)
        res.end()
    }

    static async postEmployeeData(req,res){
        const newEmployee = req.body
        const newData = new Employees(newEmployee)
        try{
            const result = await newData.save()
            res.send(result)
        } catch(ex) {
            res.status(511).send(ex.message)
        }
        
    }

    static async putEmployeeData(req,res){
        var id = parseInt(req.params.id)
        var myData = await Employees.find({CitizenshipId : id})
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")
        const employeeNewData = req.body
    
        for(var i in employeeNewData){
            myData[0][i] = employeeNewData[i] 
        }
        try{
            const result = await myData[0].save()
            res.send(result)
        } catch(ex) {
            res.status(511).send(ex.message)
        }
                                                                                                                                                                         
    }

    static async deleteEmployeeData(req,res){
        var id = parseInt(req.params.id)
        var myData = await Employees.find({CitizenshipId : id})
        if(myData.length == 0) return res.status(404).send("404 !!! Employee not found")
        var remove = await Employees.remove({CitizenshipId : id})
        res.send(myData)
    }

    
   
}

router.get('/' ,EmpRoute.getAllData)
router.get('/:id' ,EmpRoute.getEmployeeData)
router.put('/:id' ,EmpRoute.putEmployeeData)
router.delete('/:id' ,EmpRoute.deleteEmployeeData)
router.post('/' ,EmpRoute.postEmployeeData)

router.use('/:id/child/assignments',assignementApis)

module.exports = router