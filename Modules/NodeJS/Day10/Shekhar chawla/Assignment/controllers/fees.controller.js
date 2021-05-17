const Student = require('../models/students/students.models')
const Fees = require('../models/students/fees.models')

async function getFees(req, res) {
    var query =
        Student.find({ _id: req.params.id })
            .populate('fees')
            .select({ fees: 1, _id: 0 })

    query.exec((err, fees) => {
        if (err) return res.send(err)

        return res.json(fees)
    })
}

async function getFee(req, res) {
    try {
        var student = await Student.findOne({ _id: req.params.id, 'fees': req.params.fid }).select().exec()
        if (student) {
            var query = Fees.findOne({ _id: req.params.fid })
            query.exec((err, fee) => {
                if (err) return res.send(err)
                return res.json(fee)
            })
        } else {
            res.send('invalid data')
        }

    } catch {
        res.send('Something went wrong')
    }

}

async function createFee(req, res) {
    var student = await Student.findOne({ _id: req.params.id })
    var fee = await Fees.create(req.body)

    student.fees.push(fee._id)
    res.json({ msg: 'Fee added', Fees: fee })
}

async function updateFee(req, res) {
    Fees.findByIdAndUpdate(req.params.fid, req.body, { new: true }, (err, f) => {
        if (err) {
            return res.send('error')
        }

        return res.json({ msg: 'Fees Updated', fees: f })
    })

}


async function deleteFee(req, res) {
    Fees.findByIdAndRemove(req.params.fid, (err, f) => {
        if (err) {
            return res.send(err)
        }
        return res.json({ msg: 'Fees Deleted', fees: f })
    })
}


module.exports = {
    getFees,
    getFee,
    createFee,
    updateFee,
    deleteFee
}