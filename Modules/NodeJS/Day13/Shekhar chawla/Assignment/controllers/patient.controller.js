const Patient = require('../models/patient')

async function getPatients(req, res) {
    Patient.find((err, patients) => {
        if (err) return res.send(err)
        return res.json(patients)
    })
}

async function getPatient(req, res) {
    Patient.findById(req.params.id, (err, patient) => {
        if (err) return res.status(500).send(err)
        if (patient) {
            return res.json(patient)
        } else {
            return res.status(404).send('patient not found')
        }
    })
}

async function createPatient(req, res) {
    const newPatient = new Patient(req.body)

    newPatient.save((err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        return res.json({ msg: "Patient created", patient: result })
    })

}

async function updatePatient(req, res) {
    Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, patient) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Patient Updated', patient: patient })
    })

}


async function deletePatient(req, res) {
    Patient.findByIdAndRemove(req.params.id, (err, patient) => {
        if (err) {
            console.log(err)
            return res.send('error')
        }

        return res.json({ msg: 'Patient Deleted', patient: patient })
    })
}


module.exports = {
    getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
}



















