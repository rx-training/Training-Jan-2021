const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    ImgId: {
        type: Number,
        unique: true
    },
    AdId: {
        type: Number
    },
    Image:{
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Images',ImageSchema);