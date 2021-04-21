const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/VideoExercise";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const authorSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);
//Referencing Documets
const courseSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  author: {
    type: mongoose.Schema.Types.Number,
    ref: "Author",
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createAuthor(_id, name, bio, website) {
  const author = new Author({
    _id,
    name,
    bio,
    website,
  });
  const result = await author.save();
  console.log(result);
}

async function createCourse(_id, name, author) {
  const course = new Course({
    _id,
    name,
    author,
  });
  const result = await course.save();
  console.log(result);
}

//Populate
async function listCourses() {
  const courses = await Course.find()
    .populate("author", "name -_id")
    .select("name author");
  console.log(courses);
}

//createAuthor(1, "Vatsal", "My bio", "My Website");
//createCourse(1, "NodeJs", 1);

listCourses();
