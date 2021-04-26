const express = require('express');
const router = express();
const PatientDomain = require('../../domain/patient.domain');

class PatientsController {

    // add patient
    static async addPatient(req, res) {
        const patientdomain = new PatientDomain();
        patientdomain.addPatient(req, res);
    }

    // get all patients
    static async getAllPatients(req, res){
        const patientdomain = new PatientDomain();
        patientdomain.getAllPatients(req, res);
    }
}

// add patient
router.post('/', PatientsController.addPatient);

// get all patients
router.get('/', PatientsController.getAllPatients);

module.exports = router;