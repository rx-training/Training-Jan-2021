const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        address: {
            type: String,
            enum: {
                values: ['Ahmedabad', 'Surat'],
                message: 'Address must be in range {VALUE}'
            }
        },
        age: {
            type: Number,
            min: [20, 'Age must be greater than 20 not {VALUE}'],
            required: function () {
                return this.age > 20
            }
        },
        phone: {
            type: String,
            validate: {
                validator: function (v) {
                    return /\d{3}-\d{3}-\d{4}/.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
            },
            required: [true, 'User phone number required']
        },
        skills: [String],
        email: {
            type: String,
            validate: {
              validator: () => Promise.resolve(false),
              message: 'Email validation failed'
            }
          }
    },
    {
        timestamps: true,
        created: Date,
        collection: 'empcollection'
    }
)


const model = mongoose.model('Employees', EmpSchema)

module.exports = model