const { Prescription, validate } = require('../models/prescription.model');
const { Doctor } = require('../models/doctor.model');
const { Patient } = require('../models/patient.model');
const Joi = require('joi');

class PrescriptionDomain {

    // add prescription
    async addPrescription(req, res) {

        const { error } = validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {
            const prescription = new Prescription({
                patient: req.body.patient,
                medicines: req.body.medicines
            });

            await prescription.save();

            res.send(prescription);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all patients of doctors
    async getAllPatientsofDoctor(req, res){

        const doctorId = req.params.doctorId;

        var { error } = Joi.validate(doctorId, Joi.objectId().required());

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const doctor = await Doctor.findById(doctorId);

        if(!doctor){
            return res.status(404).send('Doctor not found');
        }

        const patients = await Patient.find({ doctors: doctorId }).populate('doctor', 'name');

        res.send(patients);
    }

    // get prescription of patient by patient id
    async getPrescriptionOfPatient(req, res){

        const patientId = req.params.patientId;

        var { error } = Joi.validate(patientId, Joi.objectId().required());

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const patient = await Patient.findById(patientId);

        if(!patient){
            res.status(404).send('Patient not found');
        }

        const prescriptions = await Prescription.find({ patient: patientId }).populate('patient', 'name');

        res.send(prescriptions);
    }
}

module.exports = PrescriptionDomain;