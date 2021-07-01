const Doctor = require('../models/doctor')
const mongoose = require('mongoose')


mongoose.connect(
    'mongodb://localhost:27017/NodePractice',
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
)
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log('Not connect to db\n', err))




async function getDoctors(req, res) {
    Doctor.find((err, doctors) => {
        if (err) return res.send(err)
        return res.json(doctors)
    })
}

async function getDoctor(req, res) {
    Doctor.findById(req.params.id, (err, doctor) => {
        if (err) return res.status(500).send(err)
        if (doctor) {
            return res.json(doctor)
        } else {
            return res.status(404).send('doctor not found')
        }
    })
}

async function createDoctor(req, res) {
    const newDoctor = new Doctor(req.body)

    newDoctor.save((err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        return res.json({ msg: "Doctor created", doctor: result })
    })

}

async function updateDoctor(req, res) {
    Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, doctor) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Doctor Updated', doctor: doctor })
    })

}


async function deleteDoctor(req, res) {
    Doctor.findByIdAndRemove(req.params.id, (err, doctor) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Doctor Deleted', doctor: doctor })
    })
}


module.exports = {
    getDoctors,
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
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

var s1 = new Doctor({
    _id: new mongoose.Types.ObjectId,
    address: "shekhar",
    name: "hi",
    fees: [f1._id]
})


s1.save((err, s) => {
    if (err) return err
    console.log(s)
})


Doctor.findOne({ name:'hi'}).select().exec( (err, s) => {

    console.log(s)
})





Doctor
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
    doctor: s1._id
})
r1.save((err) => {
    if (err) return err
    s1.result.push(r1._id)
})*/