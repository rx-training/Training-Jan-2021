const nodemailer = require('nodemailer');

class OTP {

    

    static async GenerateOtp(email){
        let otp = Math.floor(Math.random() * 1000000);
        // console.log(otp);
        let transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'ankur.chovatiya1856@gmail.com',
                pass : 'anks@1856'
            }
        });

        let mailoption = {
            from : 'ankur.chovatiya1856@gmail.com',
            to : email,
            subject : 'OTP',
            text : `your OTP is ${otp}`
        };
        transporter.sendMail(mailoption ,function(err , info){
            if(err ){
                console.log(err);
            }
            else{
                console.log('Email sent successfully!');
            }
        });
       return otp;
    }


}

module.exports = OTP;