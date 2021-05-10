var students = require('./data/students.json')
const { getData, createData, updateData, deleteData } = require('../../utils/crud') 

async function getStudents(req,res) {
	res.json(students)
}

async function getStudent(req, res) {
    student = getData('ID', req.params.id, students)

    if(student) {
        res.json(student)
    } else {
        res.send('Student not found')
    }
}

async function createStudent(req, res) {
    try {
        student = createData(req.body, students, './modules/Students/data/students.json', assignId=0)
        res.json(student)
        console.log('Student Created')
    } catch (e) {
        console.log(e)
    }

}

async function updateStudent(req, res) {
    try {
        student = updateData('ID', req.params.id, req.body, students, './modules/Students/data/students.json')
        res.json(student)
        console.log('Student Updated')
    } catch (e) {
        console.log(e)
    }

}


async function deleteStudent(req, res) {
    student = deleteData('ID', req.params.id, students, './modules/Students/data/students.json')

    if(student) {
        res.json(student)
        console.log('Student deleted')
    } else {
        res.send('Student not found')
    }
}


module.exports = {
    getStudents ,
    getStudent , 
    createStudent ,
    updateStudent ,
    deleteStudent
}