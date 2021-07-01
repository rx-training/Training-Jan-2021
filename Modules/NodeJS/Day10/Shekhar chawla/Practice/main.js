const mongoose = require('mongoose')
const Emp = require('./model')


DB_CONNECTION_STRING = 'mongodb://localhost:27017/test'
mongoose.connect(DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
    .then( () => console.log('Connected to database'))
    .catch( err => console.log(err))




const emp1 = new Emp({
    _id : new mongoose.Types.ObjectId ,
    name: 'Gam ma',
    address: {
        houseNumber: 'A/2 Aakash ganga resident',
        locality: 'narode' ,
        city: 'Ahmedabad' ,
        state: 'Gujarat',
        pincode: 382340
    } ,
    skills : ['web-development', 'programming']
})

emp1.save()
    .then( result => console.log(result))
    .catch( err => console.log(err))


// Practice exercise:
// 1. Create EmployeeObject with ID,Name,Address,skills and store it empcollection.
