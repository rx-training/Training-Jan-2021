const express = require('express');
const router = express();
const DoctorDomain = require('../../domain/doctor.domain');

class DoctorsController{

    // add doctor
    static async addDoctor(req, res){
        const doctorDomain = new DoctorDomain();
        doctorDomain.addDoctor(req, res);
    }

    // get all doctors
    static async getAllDoctors(req, res){
        const doctorDomain = new DoctorDomain();
        doctorDomain.getAllDoctors(req, res);
    }

    // update doctor
    static async updateDoctor(req, res){
        const doctorDomain = new DoctorDomain();
        doctorDomain.updateDoctor(req, res);
    }

    // delete doctor
    static async deleteDoctor(req, res){
        const doctorDomain = new DoctorDomain();
        doctorDomain.deleteDoctor(req, res);
    }
}


// add doctor
router.post('/', DoctorsController.addDoctor);

// get all doctors
router.get('/', DoctorsController.getAllDoctors);

// update doctor
router.put('/:doctorId', DoctorsController.updateDoctor);

// delete doctor
router.delete('/:doctorId', DoctorsController.deleteDoctor);

module.exports = router;