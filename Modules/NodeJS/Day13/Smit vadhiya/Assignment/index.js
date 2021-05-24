const mongoose = require('mongoose')
const express = require('express')
const allApis = require('./controller/apiControler')
const Collections = require('./CollectionSchemas/allCollections');
var cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost/Hospital',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
 
app.listen(3000, () => console.log('3000 is Listening'))

app.use('/', allApis)

app.get('/', (req,res) => {
    res.send("hello");
})



/* 
async function insertDoctor(id,name){
    const doctor = new Collections.Doctor({
        docorId : id,
        doctorName : name
    }) 
    doctor.save()
    console.log(doctor);
}

//insertDoctor(3,'vishal')


async function insertMedicine(name){
    const medicine = new Collections.Medicine({
        medicineName : name
    }) 
    medicine.save()
    console.log(medicine);
}

//insertMedicine('medicine6')



async function insertPatient(id,name,doctores){
    const patient = new Collections.Patient({
        patientId:  id,
        patientName : name,
        assignDoctor: doctores
    }) 
    patient.save()
    console.log(patient);
}

//insertPatient(2,'patient2',["607ee11b9c76c43d2c885789"])

async function show(){
    const patient = await Collections.Patient.find().populate('assignDoctor','doctorName -_id')   
    console.log(patient[0]);
}
//show()


async function insertPatient(id,name,doctores){
    const patient = new Collections.Patient({
        patientId:  id,
        patientName : name,
        assignDoctor: doctores
    }) 
    patient.save()
    console.log(patient);
}

//insertPatient(3,'patient3',["607ec1d88aed44144426f557","607ec1c431fb2919f4fcac35"])





async function doctorId(id){
    const doc = await Collections.Doctor.find({doctorId : id}).select('_id')
    console.log(doc[0]._id);
} 
//doctorId(2) */