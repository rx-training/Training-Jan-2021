const Employees = require('../models/employees/employees.models')
const Assignments = require('../models/employees/assignments.models')

class AssignmentController {
    getAll(req, res) {
        var query = Employees.find({ _id: req.params.id }).select({ assignments: 1, _id: 0 })

        query.exec((err, assignments) => {
            if (err) return res.send(err)

            res.send(assignments)
        })
    }


    async get(req, res) {
        try {
            var employee = await Employees.findOne({ _id: req.params.id, 'assignments': req.params.aid }).select().exec()
            if (employee) {
                var query = Assignments.findOne({ _id: req.params.aid })
                query.exec((err, assignment) => {
                    if (err) return res.send(err)
                    return res.json(assignment)
                })
            } else {
                res.send('invalid data')
            }

        } catch {
            res.send('Something went wrong')
        }
    }


    async create(req, res) {
        var employee = await Employees.findOne({ _id: req.params.id })
        var assignment = await Assignments.create(req.body)

        employee.fees.push(assignment._id)
        res.json({ msg: 'Assignment added', Fees: assignment })

    }


    update(req, res) {
        Assignments.findByIdAndUpdate(req.params.aid, req.body, { new: true }, (err, a) => {
            if (err) {
                return res.send('error')
            }

            return res.json({ msg: 'Assignment Updated', assignment: a })
        })


    }


    delete(req, res) {
        Assignments.findByIdAndRemove(req.params.aid, (err, a) => {
            if (err) {
                return res.send(err)
            }
            return res.json({ msg: 'Assignment Deleted', assignment: a })
        })
    }


}


module.exports = AssignmentController