const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/playground";
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

//Referencing Documents
const Author = mongoose.model('Author',new mongoose.Schema({
    name : String,
    bio : String,
    website : String
}));
const Course = mongoose.model('Course' , new mongoose.Schema({
    name : String , 
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    }
}));

const createAuthor = async(name , bio , website)=>{
    const author = new Author({
        name , bio , website
    });
    const result = await author.save();
    console.log(result);
}
const createCourse = async(name , author) =>{
    const course = new Course({
        name , author
    });
    const result = await course.save();
    console.log(result);
}

const listCourses = async () => {
    const course = await  Course.find().select('name author').populate('author' , 'name bio -_id');
    console.log(course);
};
//createAuthor('Moh','My bio','My Website');
// createCourse("Node Course", [
//     "607eaade06b6ed31ecc4e536",
//     "607eabf2ecd6f41d48d0cfb3"
// ]);
listCourses();