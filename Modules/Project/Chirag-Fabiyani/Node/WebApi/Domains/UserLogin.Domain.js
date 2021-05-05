const jwt = require('jsonwebtoken');
global.config = require('../Config');
const Users = require('../Models/User.Model');
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
            AdminId: parseInt(req.body.AdminId),
            Password: req.body.Password
        };
    
        let token = jwt.sign(req.body, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '1800s'
        });
          
        let hash = await Admins.find({'AdminId': userdata.AdminId}).select().exec();
        this.EmailId = hash[0].EmailId;


        if (userdata.AdminId == hash[0].AdminId && bcrypt.compareSync(userdata.Password,hash[0].Password)) {
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
            mail(this.EmailId,"Otp verification successful, Admin logged in")
        }
        else{
            mail(this.EmailId,"Otp verification unsuccessful, Admin not logged in")

        }
        res.send("Check your mail");
    }
}

module.exports = Domain;