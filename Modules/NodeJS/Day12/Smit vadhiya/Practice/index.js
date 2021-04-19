const mongoose = require('mongoose')
const assert = require('assert')
const url = 'mongodb://localhost/playground'

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connection establish .........'))
    .catch((err) => console.log(err))


const courseSchema = new mongoose.Schema({
    name : {
        type : String, 
        required :true,
        minlength : 5,
        maxlength : 20,
        lowercase :true,
        trim : true
        //match : /pattern/
    }, 
    author :{
        type : String,
        requried : true,
        enum : ['web','.net']

    } ,
    tags : {
        type : [ String ],
        validate : {
            validator : function (v) { return  v.length > 0 },
            message : 'A course tag can co  t empty'
        }
    },
    date : { type : Date, default : Date.now() },
    isPublished :Boolean,
    price : {
        type : Number,
        required : function () {return this.isPublished},
        min : 5,
        max: 500
    }
})

const Course = mongoose.model('Course',courseSchema)

async function insertData(){
    const course = new Course({
        name : '  Angular COUrse',
        author : '.net',
        tags : ['Angular','frontend'],
        isPublished: true,
        price : 456
     })

    try{
        const result = await course.save()
        console.log(result);
    } catch(err) {
        console.log(err.message);
    }
}
 //insertData()
 const breakfastSchema = new mongoose.Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: 12
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea'],
      required: function() {
        return this.bacon > 3;
      }
    }
  });
  const Breakfast = mongoose.model('Breakfast', breakfastSchema);
  
  const badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
  });
  let error = badBreakfast.validateSync();
  assert.equal(error.errors['eggs'].message,
  'Too few eggs');
  assert.ok(!error.errors['bacon']);
  assert.equal(error.errors['drink'].message,
  '`Milk` is not a valid enum value for path `drink`.');

  console.log(error.message);
  
  badBreakfast.bacon = 5;
  badBreakfast.drink = null;
  
  error = badBreakfast.validateSync();
  assert.equal(error.errors['drink'].message, 'Path `drink` is required.');
  
  badBreakfast.bacon = null;
  error = badBreakfast.validateSync();
  assert.equal(error.errors['bacon'].message, 'Why no bacon?');
