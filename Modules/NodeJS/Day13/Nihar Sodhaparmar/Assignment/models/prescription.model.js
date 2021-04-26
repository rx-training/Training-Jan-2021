const mongoose = require('mongoose');
const Joi = require('joi');

const Prescription = mongoose.model('prescriptions', new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'patients'
    },
    medicines: {
        type: [
            new mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                timings: {
                    type: [
                        {
                            type: String,
                            required: true,
                            enum: ['morning', 'afternoon', 'night']
                        }
                    ],
                    required: true,
                    validate: {
                        validator: function (v) {
                            return v && v.length > 0;
                        },
                        message: 'Medicine should have atleast one timing'
                    }

                }
            })
        ]
    }
}));

// validating using joi
function validatePrescription(prescription) {
    const schema = {
        patient: Joi.objectId().required(),
        medicines: Joi.array().items({
            name: Joi.string().required(),
            timings: Joi.array().items(Joi.string().valid('morning', 'afternoon', 'night').required()).required()
        }).required()
    }

    return Joi.validate(prescription, schema);
}

module.exports.Prescription = Prescription;
module.exports.validate = validatePrescription;