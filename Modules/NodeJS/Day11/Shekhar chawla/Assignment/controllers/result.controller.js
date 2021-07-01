const Student = require('../models/students/students.models')
const Results = require('../models/students//results.model')


async function getResults(req, res) {
    var query =
        Student.find({ _id: req.params.id })
            .populate('results')
            .select({ result: 1, _id: 0 })

    query.exec((err, results) => {
        if (err) return res.send(err)

        return res.json(results)
    })
}

async function getResult(req, res) {
    try {
        var student = await Student.findOne({ _id: req.params.id, 'result': req.params.rid }).select().exec()
        if (student) {
            var query = Results.findOne({ _id: req.params.rid })
            query.exec((err, r) => {
                if (err) return res.send(err)
                return res.json(r)
            })
        } else {
            res.send('invalid data')
        }

    } catch {
        res.send('Something went wrong')
    }
}

async function createResult(req, res) {
    var student = await Student.findOne({ _id: req.params.id })
    var result = await Results.create(req.body)

    student.result.push(result._id)
    res.json({ msg: 'Result added', Result: result })
}

async function updateResult(req, res) {
    Results.findByIdAndUpdate(req.params.rid, req.body, { new: true }, (err, r) => {
        if (err) {
            return res.send('error')
        }
        return res.json({ msg: 'Result Updated', Result: r })
    })

}


async function deleteResult(req, res) {
    Results.findByIdAndRemove(req.params.rid, (err, r) => {
        if (err) {
            return res.send(err)
        }
        return res.json({ msg: 'Result Deleted', Result: r })
    })
}


module.exports = {
    getResults,
    getResult,
    createResult,
    updateResult,
    deleteResult
}