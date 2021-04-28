const fs = require('fs')
var students = require('../data/students.json')
const { getData, createData, updateData, deleteData } = require('../../../utils/crud') 


async function getResults(req, res) {
    student = getData('ID', req.params.id, students)
    results = student['Result']

    if(student && results) {
        res.json(results)
    } else {
        res.send('Record not found')
    }
}

async function getResult(req, res) {
    student = getData('ID', req.params.id, students)
    result = getData('id', req.params.rid, student['Result'])

    if(student && result) {
        res.json(result)
    } else {
        res.send('Record not found')
    }
}

async function createResult(req, res) {
    student = getData('ID', req.params.id, students)
    results = student['Result']
    try {
        result = createData(req.body, results, null, assignId=1)

        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(result)
        console.log('Result Created')
    } catch (e) {
        console.log(e)
    }

}

async function updateResult(req, res) {
    student = getData('ID', req.params.id, students)
    result = getData('id', req.params.rid, student['Result'])

    try {
        newfee = updateData('id', req.params.rid, req.body, student['Result'])

        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(newfee)
        console.log('Result Updated')
    } catch (e) {
        console.log(e)
    }

}


async function deleteResult(req, res) {
    student = getData('ID', req.params.id, students)
    result = deleteData('id', req.params.rid, student['Result'])

    if(student && result) {
        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(result)
        console.log('Result deleted')
    } else {
        res.send('Record not found')
    }
}


module.exports = {
    getResults ,
    getResult ,
    createResult ,
    updateResult ,
    deleteResult
}