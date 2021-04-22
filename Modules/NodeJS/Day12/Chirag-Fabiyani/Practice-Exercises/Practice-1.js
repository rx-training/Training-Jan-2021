var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/practice_exercise';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_ID: {type: Number, unique: true},
  a_string: {type: String, enum: ['Coffee', 'Tea', 'tea', 'Water'],lowercase: true},
b_string: {type: Number, match: /____/},
  a_date: Date,
  a_published : Boolean,
  a_number: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  a_price: {
    type: Number,
    required: function(){ return this.a_published},
    get: v=>Math.round(v),
    set: v=>Math.round(v)
  },
  a_tags: {
    type: Array,
    validate:{
      isAsync: true,
      validator: function(v,callback){
        setTimeout(() => {
          const result = v && v.length>0;
          callback(result);
        }, 4000);
      },
    message: 'A course should have atleast one tag'
    }
  }
});


var SomeModel = mongoose.model('SomeModel', SomeModelSchema );


var awesome_instance = new SomeModel({ 
    a_ID: 6,
    a_string: 'Tea',
    b_string: 11111,
    a_date: new Date(),
    a_published: true,
    a_number: 8,
    a_price: 15.8,
    a_tags: ['challenge']
});

try{
awesome_instance.save(function (err) {
  if (err) return console.log(err);
});
}
catch(ex){
  console.log(ex)
}

SomeModel.find({'a_string':'Tea'},'a_ID a_number',(err,somemodel)=>{
    if(err){ console.log(err)};
    console.log(somemodel);
});