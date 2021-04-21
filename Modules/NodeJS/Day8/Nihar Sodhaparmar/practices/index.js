const express = require('express');
const jwt = require('jsonwebtoken');

const customerRouter = require('./customer');

global.config = require('./config');

var app = express();
var port = 3000;

app.use(express.json());

app.use('/customers', customerRouter);

app.post('/login', function (req, res, next) {
    
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };

    //Go to server for user varificarion
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

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});