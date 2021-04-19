const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    _id: Number,
    FirstName: { type: String, required: true, trim: true },
    LastName: { type: String, required: true, trim: true },
    Assignments: [
        {
            _id: Number,
            AssignmentCategory: { type : String , trim : true },
            AssignmentName: { type : String , trim : true },
            AssignmentStatus: {
                type: String,
                enum: ["Pending", "Completed"],
                trim: true,
            },
        }
    ],
});

empSchema.methods.joivalidate = (data) => {
    var Joi = require("joi");
    var schema = Joi.object({
        _id: Joi.number().required(),
        FirstName: Joi.string().required(),
        LastName: Joi.string().required(),
        Assignments: Joi.array(),
    });
    return schema.validate(data);
};

const EmpModel = mongoose.model("employee", empSchema);

module.exports = EmpModel;