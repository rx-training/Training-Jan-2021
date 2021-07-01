const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId ,
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        address : {
            type: String
        },
        age: {
            type: Number
        },
        skills : [String]
    },
    {
        timestamps: true ,
        created : Date ,
        collection : 'empcollection'
    }
)


const model = mongoose.model('Employees', EmpSchema)

module.exports = model