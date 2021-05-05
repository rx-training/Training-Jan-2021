const Collections = require('../models/index')
const validate = require('../models/validate')
const logicalFunctions = require('./logicalFunctions')
const mailTo = require('./emailDomain')
const Otp = require('./otpDomain')
const Encdec = require('./passwordDomain')
var newOperator
    
//*********    OPERATOR CLASSES  **********

class Operatores{
    //GET OPERATOR BY ID
    static async getOperatorById(req,res){
        var id =  parseInt(req.params.id)
         const operator = await Collections.Operators.findById(id).populate('city','cityName -_id').select('-__v')
        if(!operator) return res.status(404).send("Operator not found")
        res.send(operator)  
    }


    //ADD NEW OPERATOR
    static async postNewOperator(req,res){
        const operatorData = validate.Operators.validate(req.body)
        if(operatorData.error){
            res.send(operatorData.error.message)
        } else {
            operatorData.value._id = await logicalFunctions.incId('Operatores')
            operatorData.value.password = Encdec.encPassword(operatorData.value.password)

            try {
                newOperator =  operatorData.value

                var otp = Otp.createOtp()
                await mailTo(operatorData.value.email, //emailid
                            "OTP verification" ,"", //subject and text
                            "<h1> Your OTP : "+otp+"</h1>") //HTML body

                res.send("varification email is sent to your mail id");
            } catch(ex) {
                res.status(422).send(ex.message)
            }
        }
    } 
    
    static async addData(req,res){
        var uOtp = req.params.otp
        var data = Otp.verifyOtp(uOtp)
        if(data){
            try{
                var myoperator = new Collections.Operators(newOperator) 
                const result = await myoperator.save()
                res.send(result)
            } catch(ex){
                res.status(422).send(ex.message)
            }
        } else {
            res.send("wrong otp")
        }
    }

    //UPDATE OPERATOR DETAIL
    static async putOperatorById(req,res){
        const id = parseInt(req.params.id)
        const body = req.body
        
        const operator = await Collections.Operatores.findById(id)
        if(!operator) return res.status(404).send("Operator not found")

        for( var i in body){
            operator[i] = body[i]
        }
        try {
            const result =await operator.save()
            res.send(result);
        } catch(ex) {
            res.status(422).send(ex.message)
        }
    }


    //GET BUSES OF OPERATOR
    static async getBusOfOperatores(req,res){
        const id = req.params.id
        if(!(await Collections.Operators.findById(id)))
            return res.status(404).send("Operator Not found")
        const buses = await Collections.Buses.find()
        var myBuses = []
        for(var i of buses){
            if(i.operator == id){
                myBuses.push(i)
            }
        }
        if(myBuses.length == 0) return res.status(404).send("Operator has not register any bus")
        res.send(myBuses)
    }

    
    //UPDATE BUS DETAIL
    static async putBusById(req,res){
        const busid = req.params.busid
        const id = parseInt(req.params.id)
        //const body = req.body
        
        var  bus = await Collections.Buses.find({_id : busid, operator : id})
        if(bus.length == 0) return res.status(404).send("Bus not found")
        bus = bus[0]
        res.send(bus)
        for( var i in body){
           bus[i] = body[i]
        }
        try {
            const result =await bus.save()
            res.send(result);
        } catch(ex) {
            res.status(422).send(ex.message)
        } 
    }


    
    //ADD NEW BUS
    static async postNewBus(req,res){
        var body = req.body
        var busData = {  _id: body._id,
                        operator: parseInt(req.params.id),
                        busName: body.busName,
                        busType: body.busType,
                        busReleasesate: body.busReleasesate,
                        totalSleeperseat: body.totalSleeperseat,
                        totalSeaterSeat: body.totalSeaterSeat,
                        totalSemiSleeperSeat: body.totalSemiSleeperSeat,
                        activeStatus: body.activeStatus,
                        rating: body.rating
                    }

        busData = validate.Buses.validate(busData)
        if(busData.error){
            res.send(busData.error.message)
        } else {
            try {
                const newBus = new Collections.Buses(busData.value)
                const result = await newBus.save()
                res.send(result)
            } catch(ex) {
                res.status(422).send(ex.message)
            }
        }
    }

    //ADD NEW MAINROUTE
    static async postNewRoute(req,res){
        const mainRoute = validate.MainRoute.validate(req.body)
        if(mainRoute.error){
            res.send(mainRoute.error.message)
        } else {
            const count = await logicalFunctions.incId('MainRoute')
            try{
                const myRoute = new Collections.MainRoute({
                    _id : count,
                    busNumber: mainRoute.value.busNumber, 
                    fromCity: mainRoute.value.fromCity, 
                    toCity: mainRoute.value.toCity, 
                    fromTime: mainRoute.value.fromTime, 
                    subCities :  mainRoute.value.subCities, 
                    toTime: mainRoute.value.toTime, 
                    activeStatus: mainRoute.value.activeStatus, 
                })
                const result = await myRoute.save()
                res.send(result)
            } catch(ex){
                res.send(ex.message)
            }
        }
    }

    //FIIND ROUTEWHERE MY BUSES ARE RUNNING

    static async findMyRoute(req,res){
        const id = parseInt(req.params.id)

        const myData = await Collections.MainRoute
                .find()
                .populate({
                    path: 'busNumber',
                    populate : {
                        path : 'operator'
                    }
                })
        const final = []
        for(var i of myData){
            if(i.busNumber.operator._id == id)
                final.push(i);
        }
        if(final.length  == 0) return res.status(404).send("Route not found")
        const myRoute = await Collections.MainRoute.find({_id : final})
        res.send(myRoute)
    }
    

}

module.exports = Operatores