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
    age: 34,
    skills: ['web-development', 'programming']
})

// emp1.save()
//     .then( result => console.log(result))
//     .catch( err => console.log(err))





const getEmployeeWithAge = async () => {
    const e1 = await Employee.find({ age: { $gte: 20 } })
    console.log(e1)
}
// getEmployeeWithAge()


const getEmployeeSkills = async () => {
    const e1 = await Employee.find({ skills: { $in: ['programming'] } })
    console.log(e1)
}
// getEmployeeSkills()

const getEmployeeFields = async () => {
    const e1 = await Employee.find({ $and: [{ name: 'gamma' }, { age: { $exists: true } }] })
    console.log(e1)
}
// getEmployeeFields()


const countEmployees = async () => {
    const e1 = await Employee.find().countDocuments()
    console.log(e1)
}
// countEmployees()

const regexEmployees = async () => {
    const e1 = await Employee.find({ address: /.*roda/i })
    console.log(e1)
}
// regexEmployees()


const pagination = async (pageNumber, nPerPage) => {
    console.log("Page: ", pageNumber);
    const e1 = await Employee.find()
        .sort({ _id: 1 })
        .skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0)
        .limit(nPerPage)
    console.log(e1)
}

// pagination(2, 3)







/*
Day11

What to Learn

Comparison Query Operator
Logical Query Operator
Regular Expressions
Counting
Pagination
Practice Exercise:

Do the hands on from videos

Assignment:

Day9 Task post,delete and required filter should be applied.

*/