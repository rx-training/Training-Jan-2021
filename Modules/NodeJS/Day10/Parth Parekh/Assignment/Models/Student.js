const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/Employee";
mongoose
    .connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Conntected");
    });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const stdSchema = new mongoose.Schema({
    _id: Number,
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Fees: [
        {
            Amount: Number,
            PaymentDate: Date,
            Status: Boolean,
        },
    ],
    Result: [
        {
            Hindi: Number,
            Eng: Number,
            Math: Number,
            Total: Number,
            Grade: String,
        },
    ],
});

const StdModel = mongoose.model("student", stdSchema);

module.exports = StdModel;