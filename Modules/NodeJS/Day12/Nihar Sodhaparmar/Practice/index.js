const mongoose = require('mongoose');
const database = 'mongodb://localhost/EmployeeDB';

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected...");
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const employeeSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Name: String,
    Address: String,
    Skills: [String]
});

const EmployeeModel = mongoose.model("employeecollection", employeeSchema);

// const addEmployee = async () => {
//     const employee = new EmployeeModel({
//         ID: 4,
//         Name: "Mahi",
//         Address: "Ahmedabad",
//         Skills: ["Reading", "Travelling"],
//     });

//     try {
//         // await employee.validate((err) => {
//         //     if(err){

//         //     }
//         // });
//         const result = await employee.save();
//         console.log(result);
//     }
//     catch (e) {
//         console.log(e.message);
//     }

// };
//addEmployee();


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        //match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        //uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            //isAsync: true,
            validator: function (v) {

                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        //Do some async work
                        const result = v && v.length > 0;
                        resolve(result);

                    }, 4000)
                })
            },
            message: 'A course should have atleast one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min: 10,
        max: 50,
        //parenthesis.0 is not working????
        set: (v) => Math.round(v),
        get: v => Math.round(v)
    }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {

    const course = new Course({
        name: "Mongoose Course",
        category: 'Web',
        author: "Nihar",
        tags: ['backend'],
        isPublished: true,
        price: 15.8
    })

    try {
        const result = await course.save();
        console.log(result);
    }
    catch (e) {
        //console.log(e.message);

        for(field in e.errors){
            console.log(e.errors[field].message);
        }
    }
};

createCourse();