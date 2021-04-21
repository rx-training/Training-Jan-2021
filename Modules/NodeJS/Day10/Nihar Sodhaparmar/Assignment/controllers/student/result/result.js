const express = require('express');

const router = express.Router({mergeParams: true});
const StudentDomain = require('../../../domain/studentDomain');

class ResultController{

    //GET RESULT
    static async getResult(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.getResult(req, res)
    }

    //UPDATE RESULT
    static async updateResult(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.updateResult(req, res);
    }
}

router.get('/', ResultController.getResult);
router.put('/', ResultController.updateResult);

module.exports = router;