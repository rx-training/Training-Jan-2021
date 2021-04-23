const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount: { type: Number, min: 10 },
    YourId: { type: mongoose.Schema.Types.ObjectId  },
    senderName: { type: String , trim :true},
    senderMobileNo: { type: Number },

    receiverName: { type: String , trim :true},
    receiverMobileNo: { type: Number },

    senderId : { type: mongoose.Schema.Types.ObjectId  },
    receiverId: { type: mongoose.Schema.Types.ObjectId  },
    transactionDate: { type: Date, default: Date.now },
    paymentType: { type: String, enum: ["Send", "Received", "Money Added"] },
});
module.exports = transactionSchema;
