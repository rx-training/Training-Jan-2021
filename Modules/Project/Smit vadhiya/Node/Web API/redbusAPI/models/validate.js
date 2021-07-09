const Joi = require('joi')

// VALIDATE USER'S DATA
const Users = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    gander: Joi.string().valid('male','female').required(),
    DOB: Joi.date(),
    password: Joi.string().min(3).max(15).required(),
    phoneNumber: Joi.string().length(10).pattern(/^[6-9]\d{9}$/).required(),
    city: Joi.number(),
    signupDateTime: Joi.date().default(Date.now())
})

// VALIDATE CITY DATA
const Cities = Joi.object({
    cityName: Joi.string().required(),
    state: Joi.string().required(),
    latitude : Joi.number().required(),
    longitude : Joi.number().required(),
})

// VALIDATE OPERATORS'S DATA
const Operators = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid('male','female').required(),
    DOB: Joi.date(),
    companyName: Joi.string().required(),
    address: Joi.string(),
    password: Joi.string().required(),
    collaborationDate: Joi.date(),
    phoneNumber: Joi.string().length(10).pattern(/^[6-9]\d{9}$/).required(),
    city: Joi.number().required()
})

// VALIDATE BUSES DATA
const Buses = Joi.object({
    _id: Joi.string().required().pattern(new RegExp('^[A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9][0-9]$')),
    operator: Joi.number(),
    busName: Joi.string().required(),
    busType: Joi.string().required(),
    busReleaseDate: Joi.date(),
    totalSleeperseat: Joi.number(),
    totalSeaterSeat: Joi.number(),
    totalSemiSleeperSeat: Joi.number(),
    activeStatus: Joi.boolean(),
    rating: Joi.number()
})

// VALIDATE MAIN ROUTE DATA
const MainRoute = Joi.object({
    busNumber: Joi.string().required().pattern(new RegExp('^[A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9][0-9]$')),
    fromCity: Joi.number(),
    toCity: Joi.number(),
    fromTime: Joi.string(),
    subCities : Joi.array(),
    toTime: Joi.string(),
    activeStatus: Joi.boolean()
})

// VALIDATE TRIP'S DATA
const  Trip = Joi.object({
    fromCity: Joi.string().required(),
    toCity: Joi.string().required(),
    userId: Joi.number().required(),
    routeId: Joi.number().required(),
    bookIngDate: Joi.date(),
    tripDate: Joi.date(),
    farePrice: Joi.number().min(0),
    seatNo: Joi.array(),
    travelerList : Joi.array(),
    departureTime : Joi.string(),
    destinationTime : Joi.string(),
})

// VALIDATE LOGIN STATUS DATA
const LoginStatus = Joi.object({
    userid: Joi.number(),
    logindatetime: Joi.date(),
    logoutdatetime: Joi.date()
})

// VALIDATE SUBROUTE DATA
const SubRoute = Joi.object({
    routeid: Joi.number(),
	cityid: Joi.number(),
	distancefromstartcity: Joi.number(),
	arivaltime: Joi.number()
})

module.exports = {
    Users,
    Cities
    ,Operators
    ,Buses
    ,MainRoute
    ,Trip
    ,LoginStatus
    ,SubRoute
}