const mongoose = require('mongoose')

const StudentsSchema = mongoose.Schema({
    ID:{
        type : Number, 
        required : true
    },
    Name:{
        type : String, 
        required : true, 
        minlength : 3, 
        maxlength : 20,
        lowercase : true 
    },
    Address: String,
    Fees: {
        Amount: {type : Number, required : true},
        Status: Boolean,
        PaymentDate: {type: Date, required : function () { return this.Fees.Status }}
    },
    Result:{
        Hindi: {
            type : Number,
            required :true,
            min : 0,
            max: 100
        },
        Eng: {
            type : Number,
            required :true,
            min : 0,
            max: 100
        },
        Math: {
            type : Number,
            required :true,
            min : 0,
            max: 100
        },
        Total: {
            type : Number,
            required :true,
            min : 0,
            max: 400
        },
        Grade: {
            type : String,
            enum :['A+','A','B+','B','C','D','F'] 
        }
    }
})

const Students = mongoose.model('Students',StudentsSchema)

module.exports = Students
