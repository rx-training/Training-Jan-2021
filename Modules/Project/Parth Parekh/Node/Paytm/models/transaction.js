const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount : { type : Number , min : 10 },
    senderId : { type :  Number , require : true },
    receiverId : { type : Number , required : true},
    transactionDate : { type : Date , default : Date.now},
    transactionStatus : { type : String , enum : ['Completed ' ,'Pending']}
});
module.exports = transactionSchema;
