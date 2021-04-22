const mongoose = require('mongoose');
const Fawn = require('fawn');
Fawn.init(mongoose);


mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
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
  
  new Fawn.Task()
  .save('courses',course)
  .run();
}

// async function listCourses() { 
//   const courses = await Course
//     .find()
//     .populate('author','name -_id')
//     .select('name');
//   console.log(courses);
// }

// createAuthor('Shekhar', 'My bio', 'My Website');

// createCourse('Node Course', '607fa4f458939857d09676ee')

// listCourses();