const express = require("express");
const router = express.Router();
const DoctorData = require("../Domain/logic");

class PatientController {
    
    static async getPatientDetailsFromId(req, res) {
        const doctorData = new DoctorData();
        doctorData.getPatientDetailsFromId(req, res);
    }
}

//Get Methods
router.get("/:id", PatientController.getPatientDetailsFromId);
