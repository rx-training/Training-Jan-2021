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
        address : [
            {
                houseNumber : String,
                locality: String,
                city: String,
                state: String,
                pincode: Number
            }
        ] ,
        skills : [String]
    },
    {
        timestamps: true ,
        created : Date ,
        collection : 'empcollection'
    }
)


const model = mongoose.model('Emp', EmpSchema)

module.exports = model