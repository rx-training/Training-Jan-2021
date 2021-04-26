const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Day13');

  
const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Author'
  }
}));


async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('author' , 'name -_id')
    .select('name author');
  console.log(courses);
}

// createAuthor('Anks', 'Bio', 'Website');

// createCourse('Node', '607eb1ad2b2c663148aa047d')

listCourses();