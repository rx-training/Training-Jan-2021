const Cities = require('./allModels/citiesModel')
const Counter = require('./allModels/counterModel')
const Users = require('./allModels/usersModel')
const Operators = require('./allModels/operatorsModel')
const Buses = require('./allModels/busesModel')
const MainRoute = require('./allModels/mainRouteModel')
const OccupiedSeats = require('./allModels/occupiedSeatsModel')
const Trip = require('./allModels/tripModel')

/* 
const UserSchema = new Schema({
    _id:  Number,
    firstName:  String,
    lastName:  String,
    email:  String,
    gender:  String,
    DOB:  Date,
    password: String,
    phoneNumber: String,
    city: {
        type : Number,
        ref : 'Cities'
    },
    signupDateTime: {
        type : Date,
        default : Date.now()
    }
})  

const Users = mongoose.model('Users',UserSchema)

const CounterSchema = new Schema({
    _id : String,
    count : Number
})

const Counter = mongoose.model('Counters',CounterSchema)

const CitiesSchema = new Schema({
    _id : Number,
    cityName: String,
    state: String,
    latitude : Number,
    longitude : Number
})

const Cities = mongoose.model("Cities",CitiesSchema)

const OperatoresSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    DOB: Date,
    companyName: String,
    address: String,
    password: String,
    collaborationDate: {
        type :Date,
        default: Date.now()
    },
    phoneNumber: String,
    city:  {
        type : Number,
        ref : 'Cities'
    }
})

const Operatores = mongoose.model('Operatores',OperatoresSchema)

const BusesSchema = new Schema({
    _id: String,
    operator: {
        type : Number,
        ref : 'Operatores'
    },
    busName: String,
    busType: String,
    busReleasesate: Date,
    totalSleeperseat: Number,
    totalSeaterSeat: Number,
    totalSemiSleeperSeat: Number,
    activeStatus: Boolean,
    rating: {
        type :Number,
        default: 3.5
    },
})

const Buses = mongoose.model('Buses',BusesSchema)

const TripSchema = new Schema({
    fromCity:  {
        type : Number,
        ref : 'Cities'
    },
    toCity: {
        type : Number,
        ref : 'Cities'
    },
    userId: {
        type : Number,
        ref : 'Users'
    },
    routeId: {
        type : Number,
        ref : 'MainRoute'
    },
    bookIngDate: Date,
    tripDate: Date,
    farePrice: Number,
    totalSeat: Number,
    seatNo: Array,
})

const Trip = mongoose.model('Trip',TripSchema)

const LoginStatusSchema = new Schema({
    userid: {
        type : Number,
        ref : 'Users'
    },
    logindatetime: Date,
    logoutdatetime: Date
})

const MainRouteSchema = new Schema({
    _id: Number,
    busNumber: {
        type : String,
        ref : 'Buses'
    },
    fromCity: {
        type : Number,
        ref : 'Cities'
    },
    toCity: {
        type : Number,
        ref : 'Cities'
    },
    subCities :{
        type : [{
            type : Number,
            ref : 'Cities'
        }]
    } ,
    fromTime: String,
    toTime: String,
    activeStatus: Boolean,
})

const occupiedSeatsSchema = new Schema({
    routeId : {
        type:Number,
        ref : 'MainRoute',
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
    occupiedSeats : [ Number ]
})



const OccupiedSeats =  mongoose.model('OccupiedSeats', occupiedSeatsSchema);

const MainRoute = mongoose.model('MainRoute',MainRouteSchema) */

module.exports = {Cities,Counter,Users,Operators,Buses,MainRoute,OccupiedSeats,Trip}