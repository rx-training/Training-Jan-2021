const mongoose = require('mongoose')
const Student = require('../models/students/students.models')
const Fees = require('../models/students/fees.models')
const Result = require('../models/students/results.model')

mongoose.connect(
    'mongodb://localhost:27017/NodePractice',
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
)
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log('Not connect to db\n', err))




async function getStudents(req, res) {
    Student.find((err, students) => {
        if (err) return res.send(err)
        return res.json(students)
    })
}

async function getStudent(req, res) {
    Student.findById(req.params.id, (err, student) => {
        if (err) return res.status(500).send(err)
        if (student) {
            return res.json(student)
        } else {
            return res.status(404).send('student not found')
        }
    })
}

async function createStudent(req, res) {
    const newStudent = new Student(req.body)

    newStudent.save((err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        return res.json({ msg: "Student created", student: result })
    })

}

async function updateStudent(req, res) {
    Student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, student) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Student Updated', student: student })
    })

}


async function deleteStudent(req, res) {
    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Student Deleted', student: student })
    })
}


module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}




















/*

const f1 = new Fees({
    _id: new mongoose.Types.ObjectId,
    amount: 333,
    paymentDate: "2020-12-01",
    status: true
})

f1.save((err) => {
    if (err) return err
})

var s1 = new Student({
    _id: new mongoose.Types.ObjectId,
    address: "shekhar",
    name: "hi",
    fees: [f1._id]
})


s1.save((err, s) => {
    if (err) return err
    console.log(s)
})


Student.findOne({ name:'hi'}).select().exec( (err, s) => {

    console.log(s)
})





Student
    .findOne({ name: 'hi'})
    .populate('fees')
    .then(fees => {
        console.log(fees)
    })
    .catch( e => console.log(e) )


const r1 = new Result({
    _id: new mongoose.Types.ObjectId,
    subjects: {
        Biology: 4500,
        Maths: 34
    },
    grade: "A",
    student: s1._id
})
r1.save((err) => {
    if (err) return err
    s1.result.push(r1._id)
})*/