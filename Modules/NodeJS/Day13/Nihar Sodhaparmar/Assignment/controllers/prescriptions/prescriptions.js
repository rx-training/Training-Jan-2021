const express = require('express');
const router = express();
const PrescriptionDomain = require('../../domain/prescription.domain');

class PrescriptionsController {

    // add prescription
    static async addPrescription(req, res){
        const prescriptionDomain = new PrescriptionDomain();
        prescriptionDomain.addPrescription(req, res);
    }

    // get all patients of doctors
    static async getAllPatientsofDoctor(req, res){
        const prescriptionDomain = new PrescriptionDomain();
        prescriptionDomain.getAllPatientsofDoctor(req, res);
    }

    // get prescription of patient by patient id
    static async getPrescriptionOfPatient(req, res){
        const prescriptionDomain = new PrescriptionDomain();
        prescriptionDomain.getPrescriptionOfPatient(req, res);
    }

}

// add prescription
router.post('/', PrescriptionsController.addPrescription);

// get all patients of doctors
router.get('/getPatientsOfDoctors/:doctorId', PrescriptionsController.getAllPatientsofDoctor);

// get prescription of patient by patient id
router.get('/getPrescriptionOfPatient/:patientId', PrescriptionsController.getPrescriptionOfPatient);

module.exports = router;