const { Patient, validate } = require('../models/patient.model');

class PatientDomain {

    // add patient
    async addPatient(req, res) {

        const { error } = validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {
            const patient = new Patient({
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address,
                doctors: req.body.doctors,
                healthcareassistants: req.body.healthcareassistants
            });

            await patient.save();

            res.send(patient);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all patients
    async getAllPatients(req, res){
        const patients = await Patient.find().populate('doctors', 'name specialization -_id').populate('healthcareassistants', 'name -_id').select('name phone address');
        res.send(patients);
    }
}

module.exports = PatientDomain;