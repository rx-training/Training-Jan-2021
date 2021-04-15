const express = require('express')
const router = express.Router()
const fs = require('fs')
const assignementApis = require('./assignment/assignment')

class EmpRoute {
    static getAllData(req,res){
        res.send(employees)
        res.end()
    }
    static getEmployeeData(req,res){
        var id = parseInt(req.params.id)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        res.send(findData)
        res.end()
    }

    static postEmployeeData(req,res){
        const newEmployee = req.body
        employees.push(newEmployee)
        res.send(newEmployee)
        fs.writeFile('./jsonFiles/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        })
    }

    static putEmployeeData(req,res){
        var id = parseInt(req.params.id)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const employeeNewData = req.body
    
        for(var i in employeeNewData){
            findData[i] = employeeNewData[i] 
        }
        res.send(findData) 
        fs.writeFile('./jsonFiles/employees.json',JSON.stringify(employees) ,(err) => {
            if(err) console.log(err);
        })  
                                                                                                                                                                         
    }

    static deleteEmployeeData(req,res){
        var id = parseInt(req.params.id)
        const findData = employees.find(c => c.CitizenshipId == id)
        if(!findData) return res.status(404).send("404 !!! Employee not found")
        const index = employees.indexOf(findData)
        employees.splice(index,1)
        fs.writeFile('./jsonFiles/employees.json',JSON.stringify(employees) ,(err) => {
            console.log(err);
        }) 
    }

    
   
}

router.get('/' ,EmpRoute.getAllData)
router.get('/:id' ,EmpRoute.getEmployeeData)
router.put('/:id' ,EmpRoute.putEmployeeData)
router.delete('/:id' ,EmpRoute.deleteEmployeeData)
router.post('/' ,EmpRoute.postEmployeeData)

router.use('/:id/child/assignments',assignementApis)

module.exports = router