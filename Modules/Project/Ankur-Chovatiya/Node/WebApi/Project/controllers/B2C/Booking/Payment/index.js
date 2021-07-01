const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../../MongoDB/model');
const doPayment = require('../../../../domain/doPayment');
const _ = require('lodash');
const auth = require('../../../../Middelware/jwt');

let Details = {};
class Payment {


    static async PaymentReview(req , res , next){
        var searchObj = _.pick(req.body ,['TakeoffPoint','LandingPoint', 'TackoffDate', 'LandingDate','Economy'])
            model.Flight.findOne(searchObj).populate('AirFare').then(result =>{
                
                Details.FlightName  = result.FlightName;
                Details.From = result.TakeoffPoint;
                Details.To = result.LandingPoint;
                Details.Economy = result.Economy;
                Details.TotalAirFare = result.AirFare.FareAmount + result.AirFare.ExtraFare
                                             + result.AirFare.SpecialServicesFare;
                
                
                 res.send(Details);
                next();})
        }

    static async doPayment(req , res , next){
       const dopayment = doPayment.doPayment;
       dopayment(req ,res , next);
    }     
    
}

router.post('/paymentReview' ,[express.json() , auth] ,Payment.PaymentReview);
router.post('/payment' , [express.json() ] , Payment.doPayment);



module.exports = router;
