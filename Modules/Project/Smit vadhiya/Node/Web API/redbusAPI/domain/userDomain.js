
const Collections = require('../models/index')
const validate = require('../models/validate')
const logicalFunctions = require('./logicalFunctions')
const mailTo = require('./emailDomain')
const Otp = require('./otpDomain')
const EncDec = require('./passwordDomain')

var newUser

//*********    USER CLASSES  **********

class Users{
    
    //ADD NEW USER
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
                res.send(result)
            } catch(ex){
                res.status(422).send(ex.message)
            }
        } else {
            res.send("wrong otp")
        }
    }

    //ADD NEW TRIP
    static async postAddNewTrip(req,res){
        const userId = parseInt(req.params.id)
        var data = req.body
        
        const newData = {
            fromCity: data.fromCity,
            toCity: data.toCity,
            userId: userId,
            routeId: data.routeId,
            bookIngDate: Date.now(),
            tripDate: data.tripDate,
            farePrice:(data.ticketPrise * parseInt(data.selectedSeat.length)),
            totalSeat: data.selectedSeat.length,
            seatNo: data.selectedSeat,
            travelerList : data.travelerList,
            departureTime : data.timeAtStartpoint,
            destinationTime : data.timeAtEndpoint
        }
        console.log(newData);
        data = validate.Trip.validate(newData)
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
                var html = JSON.stringify(newTrip)
                await mailTo("redbusapis@gmail.com",subject,text,html)

                const result =await newTrip.save()
                res.send(result); 
            } catch(ex){
                res.send(ex.message)
            }
        }
    }

    static async getMyTrip(req,res){
        const userId = parseInt(req.params.id)
        const myTrip = await Collections.Trip.find({userId : userId})
                .populate('fromCity','cityName -_id')
                .populate('toCity','cityName -_id')
                .populate({
                    path : 'routeId',
                    select : 'busNumber',
                    populate : {
                        path :'busNumber -_id',
                        select : 'busName'
                    }
                })
        if(myTrip.length == 0) return res.status(404).send("Trip not found")
        res.send(myTrip)
    }

    static async getMyRoute(req,res){
        const id1 = req.body.id1
        const id2 = req.body.id2
        const date = new Date(req.body.date)
        const allRoute = await Collections.MainRoute.find().populate('busNumber','rating busName busType')

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
                    ticketPrise : ticketPrise,
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