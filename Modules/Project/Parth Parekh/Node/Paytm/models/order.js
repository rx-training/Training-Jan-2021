const mongoose = require("mongoose");

const orderScehma = new mongoose.Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    Quantity: { type: Number, min: 1, default: 1, required: true },
    totalAmount: { type: Number , required : true},
    Shipping_Address : {type : String }, 
    DeliveredOn : {type : String }, 
    OrderDate: { type: Date, default: Date.now },
    PaymentStatus: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Done"]
    },
});

module.exports = orderScehma;
