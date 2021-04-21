const express = require('express');

const router = express.Router({mergeParams: true});
const StudentDomain = require('../../../domain/studentDomain');

class FeesController {

    //GET FEES
    static async getFees(req, res){
        const studentDomain = new StudentDomain();
        studentDomain.getFees(req, res);
    }
}

router.get('/', FeesController.getFees);

module.exports = router;