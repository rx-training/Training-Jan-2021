const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    CategoryName : { type : String , required : true}
});

const CategoryModel = mongoose.model("category", categorySchema);
module.exports = CategoryModel;