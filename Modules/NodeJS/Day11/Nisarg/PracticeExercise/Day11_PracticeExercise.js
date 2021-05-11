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
    Skills: [String]
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

const getEmployee = async ()=>{
    //const getEmp = await EmpModel.find().limit(3).sort({Name : -1});

    //Comparison Operators
    //gt for Greater then
    //gte for Greater then equal
    //lt for Less Then
    //lte for Less Then equal
    //in  Show Value in array
    //nin not in

    //const getEmp = await EmpModel.find({ ID : { $lt : 2}});
    //const getEmp = await EmpModel.find({ ID : { $lt : 3 , $gt : 1}});
    //const getEmp = await EmpModel.find({ ID : { $in : [1,3]}});
    //const getEmp = await EmpModel.find({ ID : { $nin : [1,3]}});

    //Logical Operators
    // or and Operators
    //const getEmp = await EmpModel.find().or([{ID : 1} , {ID : 3} ]);

    //and Operators
    //const getEmp = await EmpModel.find().and([{ ID: 1 }, { Name: 'Parth' }]).select({Address : 1});

    //Regular Expression

    //const getEmp = await EmpModel.find( {Name : /^p/i });
    //const getEmp = await EmpModel.find({ Name: /.*a.*/i });
    //const getEmp = await EmpModel.find( {Name : /li$/i });

    //Couting
    //const getEmp = await EmpModel.find({ ID : { $lte : 3 , $gte : 1}}).count();

    //Pagination
    const pageNumber = 2;
    const pageSize = 2;
    const getEmp = await EmpModel.find().skip( (pageNumber - 1) * pageSize);
    console.log(getEmp);
}
getEmployee();