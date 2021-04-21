const mongoose = require("mongoose");
const Fawn = require('fawn');
const mongoDB = "mongodb://localhost/playground";

Fawn.init(mongoose);
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

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
});
//Referencing Documents
const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        authors: { type: [authorSchema], required: true },
    })
);

const createAuthor = async (name, bio, website) => {
    const author = new Author({
        name,
        bio,
        website,
    });
    const result = await author.save();
    console.log(result);
};
const createCourse = async (name, authors) => {
    const course = new Course({
        name,
        authors: authors,
    });
    try {
        new Fawn.Task()
          .save('courses' , course)
          .run();
        //const result = await course.save();
        
    }
    catch(ex) { console.log('Error');}
};

const listCourses = async () => {
    const course = await Course.find()
        .select("name author")
        .populate("author", "name -_id");
    console.log(course);
};

const updateAuthor = async (courseId) => {
    const course = await Course.updateOne(
        { _id: courseId },
        {
            $set: {
                "author.name": "Ms Dhoni",
                "author.bio": "Legend",
            },
        }
    );

    //Remove Sub Documents
    // const course = await Course.updateOne(
    //     { _id: courseId },
    //     {
    //         $unset: {
    //             "author" :''

    //         },
    //     }
    // );

    //const course = await Course.findById(courseId);
    // course.author.name = 'Parth Parekh';
    // course.author.bio = 'Welcome';
    // course.save();
};
//updateAuthor("607e802f4c81ce3ba4587187");
//createAuthor('Mosh','My bio','My Website');

const addAuthor = async (courseId, author) => {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
};
// addAuthor(
//     "607e84588dc206015c164f83",
//     new Author({ name: "Ms", bio: "My bio" })
// );

const removeAuthor = async ( courseId , authorId) =>{
    const course = await Course.findById(courseId);
    const author =  course.authors.id(authorId);
    author.remove();
    course.save();
}
//removeAuthor("607e84588dc206015c164f83", "607e84588dc206015c164f81");
createCourse("Node Course", [
    new Author({ name: "Mosh", bio: "My bio" }),
    new Author({ name: "Devil", bio: "my bio" }),
]);

//listCourses();
