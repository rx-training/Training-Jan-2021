const { findByIdAndUpdate } = require("../Models/doctor");
const DoctorModel = require("../Models/doctor");
const PatientModel = require("../Models/patients");

class DoctorData {
    async insertDoctor(req, res) {
        const data = req.body;
        const doctorObject = new DoctorModel(data);
        try {
            const result = await doctorObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    // Update Result For Particular StudentId
    async updateDoctor(req, res) {
        let pdata = req.body;
        let id = req.params.id;
        //console.log(data);
        try {
            const result = await DoctorModel.findByIdAndUpdate(
                id,
                {
                    $set: pdata,
                },
                { new: true }
            );
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    //Delete Student
    async deleteDoctor(req, res) {
        try {
            const result = await DoctorModel.findByIdAndDelete(req.params.id);
            res.send(`Doctor Deleted Successfully `);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async getDoctorDetailsFromId(req, res) {
        try {
            const result = await DoctorModel.findById(req.params.id).populate(
                "patients" ,"patientName"
            ).select('-__v');
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async getPatientDetailsFromId (req,res){
        try{
            const result = await PatientModel.findById(req.params.id).populate("drugs._id" , '-_id -__v').select('-__v');
            if(!result){ return res.status(400).send('Not Found') }
            else{
                res.send(result);
            }
        }
       catch (ex) {
            res.send(ex.message);
        }
    }

    async getSummaryFromId (req,res){
        try {
            const result = await DoctorModel.findById(req.params.id)
                .populate( { path :'patients' , populate : { path : "drugs._id"} })
                .select("-__v");
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
}
module.exports = DoctorData;