const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('Could not connect to mongoDB',err))

const courseSchema = new mongoose.Schema({
     name : String,
     author : String,
     tags : [ String ],
     date : { type : Date, default : Date.now() },
     isPublished :Boolean
})

 const Course = mongoose.model('Course',courseSchema);

 async function createCourse(){
     const course = new Course({
        name : 'Angular Course',
        author : 'Mosh',
        tags : ['Angular','frontend'],
        isPublished: true
     })
    
     const result = await course.save()
     console.log(result);
 }
 // createCourse()

 async function getCourses(){
    const courses = await Course
       /*  eq = equal to
        neq = notequal to
        lt = less than
        lte = less than or equal to
        gt = greater than
        gte = greater than or equal to */

        //.find({author : 'Mosh',isPublished :true})
        //.find({price: {$gte: 10,$lte: 20}}) 
        //.find({price: {$in: [10, 15, 20]}})

        //starts with Mosh
        .find({ author : /^Mosh/})

        //ends with Hamedani
        .find({ author: /Hamedani$/i}) //i for case insansative

        //Contains Mosh
        .find({ author: /.*Mosh.*/})

        .and([ { author: 'Mosh' }, { isPublished: true } ])
        .limit(10)
        .sort({name :1})
        .select({name :1,tags :1})
        
    console.log(courses);
 }
 //getCourses() 

 async function updateCourse(id){
    const course = await Course.findById(id)
    console.log(course);
    if(!course) return
    //course.isPublished = false;
    //course.author = 'new author'
    //This both are identical
    course.set({
        isPublished : false,
        author: 'new author'
    })
    const result = await course.save()
    console.log(result);
 }
 updateCourse('6078fb9f10de4e0f58346472')