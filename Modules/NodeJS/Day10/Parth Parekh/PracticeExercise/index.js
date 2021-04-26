const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground")
    .then(() => {
        console.log("Connected to MongoDb...");
    })
    .catch((error) => {
        console.log("Error", erorr);
    });

const courseScehma = new mongoose.Schema({
    name: String,
    author: String,
});
const Course = mongoose.model("Course", courseScehma);

const createCourse = async () => {
    const course = new Course({
        name: "React",
        author: "KL",
    });

    const result = await course.save();
    console.log(result);
};

const getCourse = async () => {
    //const result = await Course.find(); //All Collection Data
    //const result = await Course.find( {name:'Nodejs'}); //Find name:Nodejs
    const result = await Course.find()
        .limit(4)
        .sort({ name: -1 })
        .select({ name: 1 });
    console.log(result);
};
//createCourse();
getCourse();
