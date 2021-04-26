var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/practice_exercise';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the Database. Yayzow!");
})
.catch(err => {
    console.log(err);
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_ID: Number,
  a_string: {type: String, enum: ['Coffee', 'Tea', 'Water',]},
  a_date: Date,
  a_number: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  }
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ 
    a_ID: 2,
    a_string: 'Tea',
    a_date: new Date(),
    a_number:8,
});

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return console.log(err);
  // saved!
});

SomeModel.find({'a_string':'Tea'},'a_ID a_number',(err,somemodel)=>{
    if(err){ console.log(err)};
    console.log(somemodel);
});