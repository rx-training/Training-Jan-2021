const employees = require('./data/e.json')
const { getData, createData, updateData, deleteData } = require('../../utils/crud')
const handleError = require('../../utils/error_handling.js')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

class EmpController {
    getAll(req, res) {
        res.json(employees)
    }

    get(req, res) {
        var employee = getData('id', req.params.id, employees)

        if(!employee) {
            console.log(`id ${req.params.id} not found`)
            res.json({ error : `id ${req.params.id} not found`})
            throw new Error()
        } else {
            res.json(employee)
        }	
    }

    create(req, res) {
        var employee = createData(req.body, employees, '../data/e.json')

        console.log('Employee Created', employee)
        res.json({ msg: 'Employee Created', emp: employee })
    
    }


    update(req, res) {
        var employee = updateData('id', req.params.id, req.body, employees, './data/e.json')
        
        if(!employee) {
            console.log(`id ${req.params.id} not found`)
        }
    
        // send response
        console.log('Employee updated', employee)
        res.json({ msg: 'Employee updated', emp: employee })
    
    }


    delete(req, res) {
        let employee = deleteData('id', req.params.id, employees, './data/e.json')
    
        if(employee) {
            console.log('Employee Deleted ', employee)
            res.json({ msg: 'Employee Deleted', emp : employee})
    
        }
        else {
            console.log(`Employee Not found`)
            res.json({ msg: [{IdError: `${req.params.id} id Not found`}] })
        }
    }

    checkErrors(req,res,next) {
        let msg = handleError.errorLog(req.body, employees)
        if(msg.length!=0) {
            console.log(msg)
            res.json({ Errors : msg})
        } else {
            next()
        }
    }
}


module.exports = EmpController;