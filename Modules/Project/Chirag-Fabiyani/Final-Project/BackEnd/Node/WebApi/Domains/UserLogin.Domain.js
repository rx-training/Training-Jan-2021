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
        let userdata = {
            EmailId: req.body.EmailId,
            Password: req.body.Password
        };
    
        let token = jwt.sign(req.body, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '1800s'
        });

        let hash = await Users.find({'EmailId': userdata.EmailId}).select().exec();
        this.EmailId = hash[0]?.EmailId;


        if (userdata.EmailId == hash[0]?.EmailId && (bcrypt.compareSync(userdata.Password,hash[0]?.Password) || userdata.Password == hash[0].Password) ) {
            let text = 'Your login Otp is: '+this.Otp;

            res.send({
                authentication: true,
                jwtoken: token,
                userId: hash[0]._id,
                userEmail: hash[0].EmailId,
                userName: hash[0].FirstName+" "+hash[0].LastName,
                userContactNumber: hash[0].ContactNumber
            })

        //     res.status(200).json({
        //     message: text,
        //     jwtoken: token
        // });
            // mail(hash[0].EmailId,text)
        }
        else {
            let text = 'Login Failed'

            res.send({
                authentication: false
            })

        //     res.status(401).json({
        //     message: text,
        // });
            // mail(hash[0].EmailId,text)
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