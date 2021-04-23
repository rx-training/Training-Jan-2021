const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Day13E')
 

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String ,
  authors : [authorSchema]

}));




async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
      // const course = await Course.findById(courseId);
      // course.author.name = "ankur";
      // course.save();

         const course = await Course.update({_id : courseId},{
          $set : {
            'author.name' : 'anks patel'
          }
         });

        // const course = await Course.update({_id : courseId},{
        //   $unset : {
        //     'author.name' : 'anks patel'
        //   }
        //  });

}


async function addAuthor(courseId , author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}


async function removeAuthor(courseId , authorId){
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
  
}


// updateAuthor('607eb4b8df44cc23d4693d64');

// listCourses();

// createCourse('React' ,
    // [ new Author({name : 'Anks'}),
    //   new Author({name : 'Ankur'})
    // ])

// addAuthor('607eba1715a596235c6dfba0' , new Author({name : "ankur chovatiya"}))

// removeAuthor('607eba1715a596235c6dfba0' , '607ebb3d7205a6234c893724');