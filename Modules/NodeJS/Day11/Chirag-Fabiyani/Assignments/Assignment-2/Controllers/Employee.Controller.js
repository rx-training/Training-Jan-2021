const express = require('express');
const router = express.Router({mergeParams: true});
const Child = require('./Child.Controller');
const LoginDomain = require('../Domains/Login.Domain');


class Emps{
    static login(req,res,next){
        const domain = new LoginDomain();
        domain.login(req,res,next);
    }
}

router.use('/:id',Child);

router.post('/login',express.json(),Emps.login);

module.exports = router;