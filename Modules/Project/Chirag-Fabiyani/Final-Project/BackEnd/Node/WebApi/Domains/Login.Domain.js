const jwt = require('jsonwebtoken');
global.config = require('../Config');
const Admins = require('../Models/Admin.Model');
const bcrypt = require('bcrypt');
const mail = require('./Mail.Domain')

class Domain{
    constructor(Otp){
        this.Otp = Otp;
        this.EmailId = "";
    }


    async login(req,res,next){
        console.log(this.Otp)
        let userdata = {
            EmailId: parseInt(req.body.EmailId),
            Password: req.body.Password
        };
    
        let token = jwt.sign(req.body, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '1800s'
        });
          
        let hash = await Admins.find({'EmailId': userdata.EmailId}).select().exec();
        this.EmailId = hash[0].EmailId;


        if (userdata.EmailId == hash[0].EmailId && bcrypt.compareSync(userdata.Password,hash[0].Password)) {
            let text = 'Your login Otp is: '+this.Otp;
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

    async verifyOtp(req,res,next){
        if(req.body.Otp == this.Otp){
            mail(this.EmailId,"Otp verification successful, User logged in")
        }
        else{
            mail(this.EmailId,"Otp verification unsuccessful, User not logged in")

        }
        res.send("Check your mail");
    }
}

module.exports = Domain;