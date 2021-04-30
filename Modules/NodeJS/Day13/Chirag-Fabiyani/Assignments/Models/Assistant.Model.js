const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssistantSchema = new Schema({
    AssistantName: {
        type: String,
        required: true
    },
    PostOfAssistant: {
        type: String,
        enum: ["Senior", "Junior", "Trainee"]
    }
});

module.exports = mongoose.model('Assistants',AssistantSchema);