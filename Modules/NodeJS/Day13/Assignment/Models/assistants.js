const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/hospital";
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

const assistentSchema = new mongoose.Schema({
    assitantName: { type: String, trim: true, required: true },
    patients: [
        {
            type: Number,
            ref: "patient",
        },
    ],
});
const AssistentModel = mongoose.model("assitent", assistentSchema);

module.exports = AssistentModel;

const insertAssitent = async () => {
    const assistent = new AssistentModel({
        assitantName: "Parnella",
        patients: [2,3],
    });
    const result = await assistent.save();
    console.log(result);
};
//insertAssitent();

const listdata = async () => {
    const result = await AssistentModel.find().populate("patient");
    console.log(result);
};
//listdata();