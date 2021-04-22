const { Doctor, validate } = require('../models/doctor.model');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

class DoctorDomain{

    // add doctor
    async addDoctor(req, res){
        
        const { error } = validate(req.body);

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        try{
            const doctor = new Doctor({
                name: req.body.name,
                specialization: req.body.specialization,
                department: req.body.department
            });

            await doctor.save();

            res.send(doctor);
        }
        catch(e){
            res.status(500).send(e);
        }
        
    }

    // get all doctors
    async getAllDoctors(req, res){
        const doctors = await Doctor.find().populate('department', 'name -_id').select('name specialization department');
        console.log(doctors);
        res.send(doctors);
    }

    // update doctor
    async updateDoctor(req, res){

        const doctorId = req.params.doctorId;

        var { error } = Joi.validate(doctorId, Joi.objectId().required());

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const updatedDoctor = req.body;
        var { error } = validate(updatedDoctor);

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const doctor = await Doctor.findById(doctorId);

        if(!doctor){
            return res.status(404).send('Doctor not found');
        }

        // doctor.name = updatedDoctor.name;
        // doctor.specialization = updatedDoctor.specialization,
        // doctor.department = updatedDoctor.department; 

        doctor.set({
            name: updatedDoctor.name,
            specialization: updatedDoctor.specialization,
            department: updatedDoctor.department
        });

        await doctor.save();

        res.send(doctor);
    }

    // delete doctor
    async deleteDoctor(req, res){

        const { error } = Joi.validate(req.params.doctorId, Joi.objectId().required());

        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const result = await Doctor.deleteOne({ _id: req.params.doctorId });

        if(result.deletedCount == 0){
            return res.status(404).send('Doctor not found');
        }
        else{
            return res.send('Doctor deleted successfully');
        }

    }
}

module.exports = DoctorDomain;