const mongoose = require("mongoose");
const Fawn = require("fawn");

var mongoDB = "mongodb://localhost/VideoExercise";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

Fawn.init(mongoose);

const authorSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);
//Embedding Documets
const courseSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  authors: [authorSchema],
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse(_id, name, authors) {
  const course = new Course({
    _id,
    name,
    authors,
  });
  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.updateOne(
    {
      _id: courseId,
    },
    {
      $set: {
        "author.name": "Abc",
      },
    }
  );
  console.log(course);
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

//Transaction
async function createCourseWithFawn(_id, name, authors) {
  const course = new Course({
    _id,
    name,
    authors,
  });
  try {
    new Fawn.Task()
      .save("courses", course)
      .update(
        "courses",
        { _id: _id },
        {
          $set: {
            name: "hello",
          },
        }
      )
      .run();
  } catch (e) {
    console.log(e);
  }
}

//Validating Object Id

function objId() {
  const id = new mongoose.Types.ObjectId();
  console.log(id.getTimestamp());
  const isValid = mongoose.Types.ObjectId.isValid("1234");
  console.log(isValid);
}

//objId();

// createCourse(3, "Java", [
//   new Author({ _id: 1, name: "Abc" }),
//   new Author({ _id: 2, name: "Vatsal" }),
// ]);

//addAuthor(1, new Author({ _id: 3, name: "xyz" }));

//removeAuthor(1, 3);

// createCourseWithFawn(3, "Java", [
//   new Author({ _id: 1, name: "Abc" }),
//   new Author({ _id: 2, name: "Vatsal" }),
// ]);

//listCourses();
