const jwt = require('jsonwebtoken');
global.config = require('../Config');

class Domain{
    static login(req,res,next){
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
    }
}

module.exports = Domain;