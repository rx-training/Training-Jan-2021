const { boolean } = require("joi");
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
    ID: { type: String, required: true },
    Name: { type: String, required: true, minlength: 5, maxlength: 100 },
    //match : /pattren/},

    Address: {
        type: String,
        enum: ["Ahmedabad", "Delhi", "Mumbai"],
        required: true,
        //lowercase : true ,
        //uppercase : true,
        trim: true,
    },
    Skills: {
        type: Array,
        validate: {
            validator: (v) => Promise.resolve(v && v.length > 0),
            message: 'At least  one skill required',
        },
    },
    isPublished: Boolean,
    price: {
        type: Number,
        min: 10,
        max: 100,
        required: function () {
            return this.isPublished;
        },
        get: (v) => Math.round(v),
        set: (v) => Math.round(v),
    },
});

const EmpModel = mongoose.model("empcollection", empSchema);

const insertEmployee = async () => {
    const empObject = new EmpModel({
        ID: 6,
        Name: "Monngoo",
        Address: "      Delhi    ",
         Skills:['vv'],
        isPublished: true,
        price: 12.68,
    });
    try {
        const result = await empObject.save();
        console.log(result);
    } catch (ex) {
        //console.log(ex.message);
        for (field in ex.errors) {
            console.log(ex.errors[field].message);
        }
    }
};
insertEmployee();
