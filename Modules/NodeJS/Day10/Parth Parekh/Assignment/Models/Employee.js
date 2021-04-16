const { number } = require("joi");
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

const empSchema = new mongoose.Schema({
    _id: Number,
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Assignments: [
        {
            _id: Number,
            AssignmentCategory: String,
            AssignmentName: String,
            AssignmentStatus: String,
        },
    ],
});

const EmpModel = mongoose.model("employee", empSchema);

module.exports = EmpModel;