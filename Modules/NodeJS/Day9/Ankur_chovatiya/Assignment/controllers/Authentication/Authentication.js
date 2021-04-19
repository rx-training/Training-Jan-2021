const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
global.config = require('./config');



class AuthenticationRouter{

    static leandingUrl(req , res , next){
        res.send('Authentication router is working fine!');
        next();
    }

    static Login(req , res , next){
        let userdata = {
            username: req.body.username,
            password: req.body.password
            };
            // console.log(userdata);
        
            if(userdata.username == "admin" && userdata.password == "admin"){
                let token = jwt.sign(userdata , global.config.secretKey , {
                    algorithm:global.config.algorithm,
                    expiresIn:'5m'
                });
                res.status(200).json({
                    message:'login scuccessful',
                    jwtoken: token
                });
            }
            else{
                res.status(401).json({
                    message:"Login Faild"
                });
            }
        
        next();
        
    }

}

router.get('/', AuthenticationRouter.leandingUrl);
router.post('/login',[express.json()],AuthenticationRouter.Login);




module.exports = router;