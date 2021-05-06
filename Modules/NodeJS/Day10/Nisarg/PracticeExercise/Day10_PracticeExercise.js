const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/Employee";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{ console.log('MongoDB Conntected');});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const empSchema = new mongoose.Schema({
    ID: String,
    Name: String,
    Address: String,
    Skills: [String],
});

const EmpModel = mongoose.model("empcollection", empSchema);

const insertEmployee = async () => {
    const empObject = new EmpModel({
        ID: 3,
        Name: "Raina",
        Address: "MP",
        Skills: ["cricket"],
    });
    const result = await empObject.save();
    console.log(result);
};
//insertEmployee();

const updateEmployee = async (id) => {
    const updateEmp = await EmpModel.findByIdAndUpdate(
        id,
        {
            $set: {
                Name: "Parth",
                ID: "1",
            },
        },
        { new: true }
    );
    console.log(updateEmp);
    updateEmp.save();
};
//updateEmployee("60780c937f121f1440683fca");