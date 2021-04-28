const nodemailer = require('nodemailer');
const model = require('../MongoDB/model');
const otp = require('../domain/otp');
class Dopayment {

    static async doPayment(req , res , next){
        var customerMailId ; 
        const transation = new model.Transation(req.body);
        transation.save().then(result =>{
            res.send('your ticket is successfully booked!');
                            model.Transation.findOne(req.body).populate('PassengerId').then(result =>{
                                
                                customerMailId = result.PassengerId.PrimaryEmail;
                                // otp.GenerateOtp(customerMailId);
                                let transporter = nodemailer.createTransport({
                                    service : 'gmail',
                                    auth : {
                                        user : 'ankur.chovatiya1856@gmail.com',
                                        pass : 'anks@1856'
                                    }
                                });
                                console.log(customerMailId);
                                let mailoption = {
                                    from : 'ankur.chovatiya1856@gmail.com',
                                    to : customerMailId,
                                    subject : ' Ticket Booking',
                                    text : `Hello Your ticket is successfully booked! `
                                };
                    
                    
                    
                                transporter.sendMail(mailoption ,function(err , info){
                                    if(err ){
                                        console.log(err);
                                    }
                                    else{
                                        console.log('Email sent successfully!');
                                    }
                                });
                    

                                next();
                            }).catch(err=>{
                                if(err) throw err;
                                console.log(err);
                            });

            next();
        }).catch(err =>{
            if(err) throw err;
            res.send('sorry your payment is not complated plase try again!');
            next();
        })

    }     
    
}

module.exports = Dopayment ;