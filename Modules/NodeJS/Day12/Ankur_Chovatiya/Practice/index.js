const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/practice");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        // required:true,
       match : /.*abc*./,
       //unique:true      
    },
    rollno :{
        type: Number , 
          
    },
    marks : [Number],
    totalMarks : {
        type:Number,
        validate :{
            validator:function(v){
                let result = 0;
                 for(item in this.marks){
                    result = result + this.marks[item];
                 }

                return v == result;

            }
        }
    }
});

async function getStudent(){
    let student = mongoose.model("student",studentSchema);

    let data = new student({
        name:"abc",
        rollno:185,
        marks : [90 , 85 , 75],
        totalMarks : 250
    });

    console.log(data);
     data.save().then(item =>{
         console.log('item saved in database');
     }).catch(err=>{
         console.log('unable to save to database' , err);
     });
    
}
getStudent()