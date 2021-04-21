const mongoose = require('mongoose')

// Patient schema
const MedicineSchema = new mongoose.Schema({
    medicineName : {
        type : String,
        required : true
    }
})


//patient Model
const Medicine = mongoose.model("Medicines", MedicineSchema)


module.exports = Medicine

