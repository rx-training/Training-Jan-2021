const PassengerModel = require("../models/passengers.model");

class PassengerDomain {
  //To get all passengers
  async getAllPassengers(req, res) {
    const passengers = await PassengerModel.find()
      .populate("train", "train_name")
      .populate("from", "station_name")
      .populate("to", "station_name")
      .populate("travel_class", "class_type");
    res.send(passengers);
  }
  //To get passenger
  async getPassenger(req, res) {
    let id = req.params.passengerId;
    const passenger = await PassengerModel.findById(id)
      .populate("train", "train_name")
      .populate("from", "station_name")
      .populate("to", "station_name")
      .populate("travel_class", "class_type");
    if (passenger) {
      res.send(passenger);
    } else {
      res.status(404).send("Passenger Not Found");
    }
  }
  //To insert passenger
  async insertPassenger(req, res) {
    //getting user input
    let data = req.body;

    const passenger = new PassengerModel(data);
    const { error, value } = passenger.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await passenger.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a passenger
  async deletePassenger(req, res) {
    let id = req.params.passengerId;
    const passenger = await PassengerModel.findByIdAndDelete(id);
    if (passenger) {
      res.send("Passenger Record Deleted Successfully");
    } else {
      res.status(404).send("Passenger Not Found");
    }
  }
  //To update a passenger
  async updatePassenger(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.passengerId;

    const passenger = new PassengerModel(data);
    const { error, value } = passenger.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await PassengerModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send(result);
        } else {
          res.status(404).send("Passenger Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = PassengerDomain;
