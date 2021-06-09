const mongoose = require("mongoose");

const orderScehma = new mongoose.Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    ProductName: { type: String },
    size: { type: String },
    amount: { type: Number, required: true },
    Shipping_Address: { type: String },
    DeliveredOn: { type: String },
    OrderDate: { type: Date, default: Date.now },
});

module.exports = orderScehma;
