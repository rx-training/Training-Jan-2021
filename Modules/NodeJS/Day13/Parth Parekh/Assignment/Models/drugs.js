const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
    drugName: { type: String, required: true },
});

const DrugModel = mongoose.model("drug", drugSchema);

module.exports = DrugModel;


const insertDrug = async() =>{
    const drug = new DrugModel({
        drugName : "Vitamin A Tablets"
    });
    const result = await drug.save();
    console.log(result);
}
//insertDrug();

