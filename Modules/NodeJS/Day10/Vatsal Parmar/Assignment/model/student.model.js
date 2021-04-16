const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/db1";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//.then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const studentSchema = new mongoose.Schema({
  _id: Number,
  Name: String,
  Address: String,
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

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;
