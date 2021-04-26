const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  station_name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
});

stationSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    station_name: Joi.string().required(),
  });
  return schema.validate(data);
};

const StationModel = mongoose.model("station", stationSchema);

module.exports = StationModel;
