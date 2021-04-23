const mongoose = require('mongoose');
const schema = require('./schema');


mongoose.connect("mongodb://localhost/HospitalDB").then(respone =>{
    console.log('connected to mongoDb...')
});

const Doctor = new mongoose.model('doctor' , schema.doctorSchema);
const Patient = new mongoose.model('patient' , schema.patientSchema);


async function addDoctor(doctorName , doctorDesignation){
    const doctor = new Doctor({
        doctorName , 
        doctorDesignation
    }) ;

    const ans = await doctor.save()
    console.log(ans);
}

async function addPatient(){
    const patient = new Patient({
        patientName : "Rohan",
        patientAge : 25 ,
        patientAddress : 'Ahmedabad',
        patientContactNo :9724546502,
        illness : 'Fever',
        medicines : ['paracetamol' , 'acetaminophen' ],
        assignedAssistants : [mongoose.Types.ObjectId( '607ec93565a3d02af4b9933d')],
        assignedDoctor : [mongoose.Types.ObjectId( '607ec93565a3d02af4b9933d')],
        admitTime : "2020-03-28"
    })

     patient.save().then((result ,err)=>{
         if(err) throw err;
         console.log(result);
     });
    console.log(ans);
}



// addDoctor('ankur' , 'MBBS');
addPatient();