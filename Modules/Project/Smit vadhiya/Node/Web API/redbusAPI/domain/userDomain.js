
const Collections = require('../models/index')
const validate = require('../models/validate')
const logicalFunctions = require('./logicalFunctions')
const mailTo = require('./emailDomain')
const Otp = require('./otpDomain')
const EncDec = require('./passwordDomain')
 global.config = require('../static/config')
var jwt = require('jsonwebtoken')
const ticket  = require('../domain/ticket')
console.log(ticket);
var newUser

//*********    USER CLASSES  **********

class Users{
    
    //ADD NEW USER

    static async getAllMailId(req,res){
        const emails = await Collections.Users.find().select('email -_id')
        res.send(emails)    
    }

    static async postNewUser(req,res){
        const userData = validate.Users.validate(req.body)
        if(userData.error){
            res.send(userData.error.message)
        } else {
            userData.value._id = await logicalFunctions.incId('Users')
            userData.value.password = EncDec.encPassword(userData.value.password)
            try {
                newUser = userData.value 
                var otp = Otp.createOtp() //CREATE OTP 
                await mailTo(userData.value.email  //SENT MAIL
                            ,"OTP verification","", 
                            "<h1> Your OTP : "+otp+"</h1>")
                
                res.send("varification email is sent to your mail id");
            } catch(ex) {
                res.status(422).send(ex.message)
            }
        }
    }

    //VERIFY OTP
    static async addData(req,res){
        var uOtp = req.params.otp
        var data = Otp.verifyOtp(uOtp)
        if(data){
            try{
                var myuser = new Collections.Users(newUser)
                const result = await myuser.save()
                res.send({
                token : {
                    headers : {
                        token : jwt.sign(userdata, global.config.secretKey, {
                          algorithm: global.config.algorithm,
                          expiresIn: '1h'})
                    }
                },
                id : result._id
            })
            } catch(ex){
                res.send(ex)
            }
        } else {
            res.send("wrong otp")
        }
    }

    //ADD NEW TRIP
    static async postAddNewTrip(req,res){
        const userId = parseInt(req.params.id)
        
        const  {fromCity,
                toCity,
                routeId,
                tripDate,
                seatNo,
                travelerList,
                departureTime,
                destinationTime,
                ticketPrise,
            }  = req.body

        const newData = {
            fromCity,toCity,
            routeId,userId,
            seatNo,travelerList,
            departureTime,destinationTime,
            tripDate,bookIngDate: Date.now(),
            farePrice:(ticketPrise * parseInt(seatNo.length)),
        }
        var data = validate.Trip.validate(newData)
        if(data.error){
            res.send(data.error.message)
        } else {
            data = data.value
            try {
                const newTrip = new Collections.Trip(data)
                await logicalFunctions.updateBookedSeat(data.routeId,data.tripDate,data.seatNo)

                var to = await logicalFunctions.getField(Collections.Users,userId,'email')
                var subject = "Congratulation for your trip" 
                var text = "your ticket "
                var html = ticket(newTrip)
                await mailTo(to,subject,text,html)

                const result =await newTrip.save()
                res.send(result); 
            } catch(ex){
                console.log(ex.message);
                res.send(ex.message)
            }
        }
    }

    static async getMyTrip(req,res){
        const userId = parseInt(req.params.id)
        const myTrip = await Collections.Trip.find({userId : userId})
                .populate({
                    path : 'routeId',
                    select : 'busNumber',
                    populate : {
                        path :'busNumber -_id',
                        select : 'busName'
                        
                    }
                })
        if(myTrip.length == 0) return res.send([])
        res.send(myTrip)
    }

    static async getMyRoute(req,res){

        const fromCityPar = req.body.fromCity
        const toCityPar = req.body.toCity
        var id1 =  await Collections.Cities.findOne({cityName : fromCityPar}).select('_id')
        var id2 =  await Collections.Cities.findOne({cityName : toCityPar}).select('_id')
        if(!id1 || !id2){
            return res.send([])
        }
        id1=id1._id
        id2=id2._id

        const date = new Date(req.body.date)
        const allRoute = await Collections.MainRoute.find().populate('busNumber')

        var allBuses = []

        for( var i of allRoute){
            //var subRoute = i.subCities
            if( i.activeStatus == true &&
                i.subCities.includes(id1) && 
                i.subCities.includes(id2) && 
                (i.subCities.indexOf(id1) < i.subCities.indexOf(id2))){

                const remainingSeat =await logicalFunctions.remainingSeat(i._id,date)
                const distance = await logicalFunctions.distance(id1,id2)
                const timeAtStartpoint = await logicalFunctions.calculteTime(i.fromTime,i.fromCity,id1)
                const timeAtEndpoint =await logicalFunctions.calculteTime(timeAtStartpoint,id1,id2);
                const ticketPrise = await logicalFunctions.ticketCount(i.busNumber.busType,distance)
                var fromCity = await logicalFunctions.getField(Collections.Cities,id1,'cityName');
                var toCity = await logicalFunctions.getField(Collections.Cities,id2,'cityName');
                var busNumber = i.busNumber
                
                var displayData = {
                    routeId : i._id,
                    fromCity : fromCity,
                    toCity : toCity,
                    timeAtStartpoint : timeAtStartpoint,
                    timeAtEndpoint : timeAtEndpoint,
                    distance : distance,
                    busNumber : busNumber,
                    ticketPrise : parseInt(ticketPrise),
                    totalAvailableSeat : remainingSeat.length,
                    tripDate : date,
                    availableSeat : remainingSeat,
                }
            allBuses.push(displayData)
            }
        }
        res.send(allBuses) 
        
    }
}

module.exports = Users