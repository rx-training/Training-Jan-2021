const mongoose = require('mongoose')
const { count } = require('./model')
const Employee = require('./model')


DB_CONNECTION_STRING = 'mongodb://localhost:27017/test'
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err))




const emp1 = new Employee({
    _id: new mongoose.Types.ObjectId,
    name: 'Gamma',
    address: "naroda",
    age: 4,
    phone: 123456,
    skills: ['web-development', 'programming'],
    email: 'abc@gmail.com'
})

const checkValidation = async () => {
    const e1 = await emp1.save()
        .then(result => console.log(result))
        .catch(e => {
            for( let i in e.errors){
            console.log(e.errors[i].message)
            }
        })
}
checkValidation()





/*
Practice Exercise:

1. Do the hands on things provided in videos and following mongoosejs official site

https://mongoosejs.com/docs/validation.html
Assignment

Add validators in day9 Assignment
*/