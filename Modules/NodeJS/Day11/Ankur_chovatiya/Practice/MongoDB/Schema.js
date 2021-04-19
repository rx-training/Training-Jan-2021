const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({

    name : String,
    password : String

});


const StudentSchema = mongoose.Schema({


    StuName : String ,
    StuRollNo : {type : Number , required : true}, // required field
    StuAddress : {
        AddressLine1:String,
        AddressLine2:String,
        AddressLine3:String
    },
    StuMarks : {
        Math : Number ,
        Eng : Number , 
        Sci : Number , 
        Total : Number ,
        Grade : String
    },
    Fees : {
        Amount : Number,
        PaymentDate : Date,
        Status : Boolean
    } 
})

module.exports = {LoginSchema , StudentSchema};



