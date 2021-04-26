const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
global.config = require('./Config');
app.use(express.json())



app.post('/user/login', function (req, res, next) {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };

    let token = jwt.sign({ username: req.body.username }, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: '1800s'
    });
      
    
    if (userdata.username == "admin" && userdata.password == "admin") {
        res.status(200).json({
        message: 'Login Successful',
        jwtoken: token
    });
    }
    else {
        res.status(401).json({
        message: 'Login Failed',
    });
    }
});

function verifyToken(req,res,next){
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    });
}

app.get('/user/data',verifyToken,function (req, res, next) {
    let customerdata = [
        {
        customerid: 1,
        customername: 'Mahfuz Bappy'
        },
        {
        customerid: 2,
        customername: 'Shamim Uddin'
        },
        {
        customerid: 3,
        customername: 'Ishani Isha'
        }
    ];
    
    res.json(customerdata);
});;


app.listen(3000);
