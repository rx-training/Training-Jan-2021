const router = require('express').Router()
const jwt = require('jsonwebtoken')

global.config = require('./config');

/* Post users Login. */
router.post('/login', function (req, res, next) {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };

    const token = jwt.sign(userdata, global.config.secretKey, {
        "algorithm" : global.config.algorithm,
        "expiresIn" : "5m"
    })

    console.log('token generated \n', token)

    //Go to server for user varificarion
    if (userdata.username == "admin" && userdata.password == "admin") {
        res.status(200).json({
            message: 'Login Successful',
            jwtoken : token
        });
    }
    else {
        res.status(401).json({
            message: 'Login Failed'
        });
    }
});


module.exports = router