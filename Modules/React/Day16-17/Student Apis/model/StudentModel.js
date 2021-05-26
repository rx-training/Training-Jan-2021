const  mongoose  = require("mongoose")


const StudentSchema = new mongoose.Schema({
   _id : Number,
   stdFirstName: String,
   stdMiddleName : String,
   stdLastName: String,
   stdDob : String,
   stdState : String,
   stdDist : String,
   pinCode : Number,
   stdLanguage : String,
   stdAddress : String, 
   stdImg : String,

   fatherFirstName :String,
   fatherMiddleName :String,
   fatherLastName :String,
   fatherEmail : String,
   fatherPhone : Number,
   fatherEducation : String,
   fatherDesignation : String,

   motherFirstName : String,
   motherMiddleName : String,
   motherLastName : String,
   motherEmail : String,
   motherPhone : Number,
   motherEducation : String,
   motherDesignation : String,

   relFirstName :String, 
   relLastName:String, 
   relMiddleName:String,
   relPhone : Number,
   relation : String,
   
   refFirstName :String,
   refLastName: String ,
   refPhone: Number, 
   refAddress: String,
})



const StudentModel = mongoose.model("Student",StudentSchema)

module.exports = StudentModel