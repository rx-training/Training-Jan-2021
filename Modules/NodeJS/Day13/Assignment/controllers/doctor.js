const express = require("express");
const router = express.Router();
const DoctorData = require('../Domain/logic');

class DoctorController {
    static async insertDoctor(req, res) {
        const doctorData = new DoctorData();
        doctorData.insertDoctor(req, res);
    }
    static async updateDoctor(req, res) {
        const doctorData = new DoctorData();
        doctorData.updateDoctor(req, res);
    }
    static async deleteDoctor(req, res) {
        const doctorData = new DoctorData();
        doctorData.deleteDoctor(req, res);
    }
    static  async getDoctorDetailsFromId (req,res){
        const doctorData = new DoctorData();
        doctorData.getDoctorDetailsFromId(req, res);
    }
    static  async getSummaryFromId (req,res){
        const doctorData = new DoctorData();
        doctorData.getSummaryFromId(req, res);
    }
    
}


//Get Methods
router.get("/:id", DoctorController.getDoctorDetailsFromId);

router.get("/:id/summary" , DoctorController.getSummaryFromId);

//Post Methods
router.post("/", DoctorController.insertDoctor);

//Put Methods
router.put('/:id',DoctorController.updateDoctor);

//Delete Methods
router.delete('/:id', DoctorController.deleteDoctor);

module.exports = router;