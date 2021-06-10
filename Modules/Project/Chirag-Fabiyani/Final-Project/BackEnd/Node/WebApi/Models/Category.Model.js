const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    OlxAutos:[],
    Properties:[],
    Mobiles:[],
    Jobs:[],
    Bikes:[],
    ElectronicsAndAppliances:[],
    CommercialVehiclesAndSpares:[],
    Furniture:[],
    Fashion:[],
    BooksSportsAndHobbies:[],
    Pets:[],
    Services:[]
})

module.exports = mongoose.model('Categories',CategorySchema);