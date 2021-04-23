const mongoose = require("mongoose");

const orderScehma = new mongoose.Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    Quantity: { type: Number, min: 1, default: 1, required: true },
    totalAmount: { type: Number, required: true },
    OrderDate: { type: Date, default: Date.now },
});

module.exports = orderScehma;
