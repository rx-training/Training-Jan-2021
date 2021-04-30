const jwt = require('jsonwebtoken');
global.config = require('../Config');
const Admins = require('../Models/Admin.Model');
const bcrypt = require('bcrypt');
const mail = require('./Mail.Domain')

class Domain{
    async login(req,res,next){
        let userdata = {
            AdminId: parseInt(req.body.AdminId),
            Password: req.body.Password
        };
    
        let token = jwt.sign(req.body, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '1800s'
        });
          
        let hash = await Admins.find({'AdminId': userdata.AdminId}).select().exec();


        if (userdata.AdminId == hash[0].AdminId && bcrypt.compareSync(userdata.Password,hash[0].Password)) {
            let text = 'Login Successful'
            res.status(200).json({
            message: text,
            jwtoken: token
        });
            mail(hash[0].EmailId,text)
        }
        else {
            let text = 'Login Failed'
            res.status(401).json({
            message: text,
        });
            mail(hash[0].EmailId,text)
        }
    }
}

module.exports = Domain;