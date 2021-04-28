const fs = require('fs')
var students = require('../data/students.json')
const { getData, createData, updateData, deleteData } = require('../../../utils/crud') 


async function getFees(req, res) {
    student = getData('ID', req.params.id, students)
    fees = student['Fees']

    if(student && fees) {
        res.json(fees)
    } else {
        res.send('Record not found')
    }
}

async function getFee(req, res) {
    student = getData('ID', req.params.id, students)
    fee = getData('id', req.params.fid, student['Fees'])

    if(student && fee) {
        res.json(fee)
    } else {
        res.send('Record not found')
    }
}

async function createFee(req, res) {
    student = getData('ID', req.params.id, students)
    fees = student['Fees']
    try {
        fee = createData(req.body, fees, null, assignId=1)

        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(fee)
        console.log('Fee Created')
    } catch (e) {
        console.log(e)
    }

}

async function updateFee(req, res) {
    student = getData('ID', req.params.id, students)
    fee = getData('id', req.params.fid, student['Fees'])

    try {
        newfee = updateData('id', req.params.fid, req.body, student['Fees'])

        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(newfee)
        console.log('Fee Updated')
    } catch (e) {
        console.log(e)
    }

}


async function deleteFee(req, res) {
    student = getData('ID', req.params.id, students)
    fee = deleteData('id', req.params.fid, student['Fees'])

    if(student && fee) {
        fs.writeFile('./modules/Students/data/students.json', JSON.stringify(students), (err) => {
            if( err ) throw err
        })
        res.json(fee)
        console.log('Fee deleted')
    } else {
        res.send('Record not found')
    }
}


module.exports = {
    getFees ,
    getFee ,
    createFee ,
    updateFee ,
    deleteFee
}