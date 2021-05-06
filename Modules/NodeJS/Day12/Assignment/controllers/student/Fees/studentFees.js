const express = require('express');
const router = express.Router({mergeParams:true});
const StudentData = require('../../../Domain/studentlogic');

class FeesController{
    static async getFeesDetailsFromStudentId (req,res){
        const studentData = new StudentData();
        studentData.getFeesDetailsFromStudentId(req,res);
    }
}

router.get('/',FeesController.getFeesDetailsFromStudentId);

module.exports = router;