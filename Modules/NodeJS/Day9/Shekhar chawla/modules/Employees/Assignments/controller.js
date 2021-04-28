const fs = require('fs')
const employees = require('../data/e.json')
const handleError = require('../../../utils/error_handling')
const { getData, createData, updateData, deleteData } = require('../../../utils/crud')

class AssignmentController {
    getAll(req, res) {
        var employee = getData('id', req.params.id, employees)
        
        if (!employee) {
            console.log(`Employee with id ${req.params.id} not found`)
            res.json({ error : `Employee with id ${req.params.id} not found`})
        } else if (!employee['assignments']) {
            console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
            res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
        } else {
            res.json(employee['assignments'])
        }
    }


    get(req, res) {
        var employee = getData('id', req.params.id, employees)
    
        if (!employee) {
            console.log(`id ${req.params.id} not found`)
            res.json({ error : `id ${req.params.id} not found`})
        } 
        else{
            if( employee['assignments'] ) {
                var eAssingment = getData('AssignmentId', req.params.assignmentId, employee['assignments'])
                if( eAssingment ){
                    console.log(eAssingment)
                    res.json(eAssingment)
                } else {
                    console.log(`Assignments id ${req.params.assignmentId} not found`)
                    res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
                }
            } else {
                console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
                res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
            }	
    
        }
        
    }


    create(req, res) {
        var employee = getData('id', req.params.id, employees)
        var unique = 0
        var msg = handleError.errorLog(req.body, employees[0]['assignments'], unique)			// check all errors except uniquekeyConstraint
    
        // creating employee in json file
        if(msg.length == 0) {
            var index = employees.indexOf(employee)
     
            if( ! employees[index]['assignments'] ) {
                employees[index]['assignments'] = []
            }
            var assignId = 0
            var assignment = createData(req.body, employees[index]['assignments'],null, assignId)
            
            fs.writeFile('./data/e.json', JSON.stringify(employees), (err) => {
                if( err ) throw err
            })
    
            console.log('Assignment Created', assignment)
            res.json({ msg: 'Assignment Created', assign: assignment, emp: employee })
        } else {
            console.log(msg)
            res.json({ Errors : msg}) 
        }
    
    }


    update(req, res) {
        var unique = 0
        var msg = handleError.errorLog(req.body, employees[0]['assignments'], unique)			// check all errors except uniquekeyConstraint
        
        var employee = getData('id', req.params.id, employees)
    
        if (!employee) {
            console.log(`id ${req.params.id} not found`)
            res.json({ error : `id ${req.params.id} not found`})
        } 
        else {
            if( employee['assignments'] && msg.length == 0) {
                var assignment = updateData('AssignmentId', req.params.assignmentId, req.body, employee['assignments'])
                // if updated
                if( assignment ){
                    fs.writeFile('./data/e.json', JSON.stringify(employees), (err) => {
                        if( err ) throw err
                    })
        
                    console.log('Assignment updated', assignment)
                    res.json({ msg: 'Assignment updated', assign: assignment, emp: employee })
                } else {
                    console.log(`Assignments id ${req.params.assignmentId} not found`)
                    res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
                }
            } else {
                console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
                res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
            }
    
        }
        
    }


    delete(req, res) {
	
        var employee = getData('id', req.params.id, employees)
    
        if (!employee) {
            console.log(`id ${req.params.id} not found`)
            res.json({ error : `id ${req.params.id} not found`})
        } 
        else {
    
            if( employee['assignments'] ) {
                var assignment = deleteData('AssignmentId', req.params.assignmentId, employee['assignments'])
    
                // if deleted
                if( assignment ){
                    fs.writeFile('./data/e.json', JSON.stringify(employees), (err) => {
                        if( err ) throw err
                    })
        
                    console.log('Assignment deleted', assignment)
                    res.json({ msg: 'Assignment deleted', assign: assignment, emp: employee })
                } else {
                    console.log(`Assignments id ${req.params.assignmentId} not found`)
                    res.json({ error : `Assignments id ${req.params.assignmentId} not found`})
                }
            } else {
                console.log(`Person with id ${req.params.id} doesn't have assignments yet`)
                res.json({ error : `Person with id ${req.params.id} doesn't have assignments yet`})
            }
    
        }
    }
    
    
}


module.exports = AssignmentController