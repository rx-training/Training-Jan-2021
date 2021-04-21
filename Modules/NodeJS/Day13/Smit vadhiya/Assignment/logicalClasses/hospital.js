const { model } = require('mongoose');
const Collections = require('../CollectionSchemas/allCollections');

class Hospital{

/************************** ALL OPERATIONS ON DOCTORS START************************************ */

    //get all doctors
    static async getAllDoctors(req,res){
        const doctor = await Collections.Doctor.find().select('-_id -__v') //to find all doctors data
        res.send(doctor)
    }

    static async getDoctorById(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const doctor = await Collections.Doctor.find({doctorId : id}).select('-_id -__v') //get doctore data of given id
        if(doctor.length == 0) return res.status(404).send(`No doctor has ${id} id`) //if data not found thann error will genrate

        res.send(doctor)
    }

    //Add new doctor into Database 
    static async postNewDoctor(req,res){
        
        try {
            const doctor = new Collections.Doctor(req.body) 
            const result = await doctor.save()
            res.send(result)
        } catch(ex){
            res.status(505).send(ex.message)
        }
        
    }

    //update doctor field
    static async putDoctorById(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const doctor = await Collections.Doctor.find({doctorId : id}).select('-__v') //get doctore data of given id
        if(doctor.length == 0) return res.status(404).send(`No doctor has ${id} id`) //if data not found thann error will genrate

        const reqChange = req.body //get all field which needs to change in json Object from body

        for(var i in reqChange){
            doctor[0][i] = reqChange[i] //change every field in doctore data from body
        } 

        try {
            let result = await doctor[0].save() //save updated data to mongo
            let resResult = {
                "updatedDoctorId" : id,
                "updatedData" : result
            }
            res.send(resResult) // response
        } catch(ex){
            res.status(505).send(ex.message)
        }
    }

    static async getPatientsOfDoctor(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const doctor = await Collections.Doctor.find({doctorId : id}).select('-__v') //get doctore data of given id
        if(doctor.length == 0) return res.status(404).send(`No doctor has ${id} id`) //if data not found thann error will genrate

        const docId =await myFunctions.get_idbyDocId(id) //to find _id from doctorId

        var patients = await Collections.Patient
            .find().select('assignDoctor patientId') //to find all patients data with _id of patient and array of assigndoctor
            
        var patientArray = []
        for(var i of patients){
            if(i.assignDoctor.includes(docId)){//check aassignDoctor list of patient 
                var patData = await Collections.Patient   
                    .find({patientId : i.patientId})
                    .populate('assignDoctor','-__v -__id')
                    .select('-__v')                    
                    //if doctore available in patient's assign list then patient detail will be push into array
                patientArray.push(patData[0])
            } 
        }
        if(patientArray.length == 0) return res.status(404).send("No patient is assigne to doctore")

        res.send(patientArray); //final array will be list of patient which is assign to perticular doctor
    }
    static async deleteDoctor(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const doctor = await Collections.Doctor.find({doctorId : id}).select('-__v') //get doctore data of given id
        if(doctor.length == 0) return res.status(404).send(`No doctor has ${id} id`) //if data not found thann error will genrate

        
        const docId = await myFunctions.get_idbyDocId(id) //to find _id from doctorId

        var patients = await Collections.Patient
            .find().select('assignDoctor patientId') //to find all patients data with _id of patient and array of assigndoctor
        
        const doc = await Collections.Doctor.deleteOne({_id : docId})
         
            for(var i of patients){
                var data = i.assignDoctor
                if(data.includes(docId)){//check aassignDoctor list of patient 
                    const index = data.indexOf(docId)
                    data.splice(index,1)
                }
            } 
            res.send(doctor)
    }


/************************** ALL OPERATIONS ON DOCTORS  END************************************ */

/************************** ALL OPERATIONS ON PATIENTS START ************************************ */
    static async getAllPatients(req,res){
        const patients = await Collections.Patient
            .find() //to find all patients data
            .populate('assignDoctor', '-_id -__v')
            .populate({
                path : 'patientDrugDetail',
                populate: {
                    path :'afternoon morning night',
                    model : 'Medicines',
                    select : '-_id -__v'
                }
            }) //to get detail about doctor assigne to patient
            .select('-_id -__v') //exclud id and version of data

        res.send(patients)
    }

    static async getPatientById(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const patient = await Collections.Patient
            .find({patientId : id})
            .populate('assignDoctor', '-_id -__v')
            .select('-_id -__v') //get patient data of given id
        if(patient.length == 0) return res.status(404).send(`No patient has ${id} id`) //if data not found thann error will genrate

        res.send(patient)
    }

    static async postNewPatient(req,res){    
        try {
            const patient = new Collections.Patient(req.body) 
            const result = await patient.save()
            res.send(result)
        } catch(ex){
            res.status(505).send(ex.message)
        }
    }

    static async getMedicines(req,res){
        const id = parseInt(req.params.id) //get given id in api link
        const patients = await Collections.Patient
            .find({patientId : id}) //to find all patients data
            .populate({
                path : 'patientDrugDetail',
                populate: {
                    path :'afternoon morning night',
                    model : 'Medicines',
                    select : '-_id -__v'
                }
            }) //to get detail about doctor assigne to patient
            .select('patientDrugDetail patientId ') //exclud id and version of data
            if(patients.length == 0) return res.status(404).send(`No patient has ${id} id`) //if data not found thann error will genrate

        res.send(patients)
    }


/************************** ALL OPERATIONS ON PATIENTS END ************************************ */

}

class myFunctions{
    static async get_idbyDocId(id){
        const doc = await Collections.Doctor.find({doctorId : id}).select('_id')
        return doc[0]._id;
    }

    static async get_idbypPatientId(id){
        const pat = await Collections.Patient.find({patientId : id}).select('_id')
        return pat[0]._id;
    }
}

module.exports = Hospital