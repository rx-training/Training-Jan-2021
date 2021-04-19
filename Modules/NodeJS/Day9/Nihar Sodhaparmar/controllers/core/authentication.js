const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
global.config = require('./config');

router.post('/', (req, res) => {

    let userdata = req.body;

    if (userdata.username == "admin" && userdata.password == "admin") {

        let token = jwt.sign(userdata, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '5m'
        });

        res.status(200).json({
            message: 'Login Successful',
            jwtoken: token
        });
    }
    else {
        res.status(401).json({
            message: 'Login Failed'
        });
    }

});

module.exports = router;