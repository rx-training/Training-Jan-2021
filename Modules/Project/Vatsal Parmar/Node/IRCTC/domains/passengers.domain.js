const PassengerModel = require("../models/passengers.model");
const UserModel = require("../models/users.model");
const TrainModel = require("../models/trains.model");
const StationModel = require("../models/stations.model");
const RouteModel = require("../models/routes.model");

const nodemailer = require("nodemailer");

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
    let uId = data.user_id;

    const user = await UserModel.findById(uId);
    const train = await TrainModel.findById(data.train).select("train_name");
    const from = await StationModel.findById(data.from).select("station_name");
    const to = await StationModel.findById(data.to).select("station_name");
    const fromTime = await RouteModel.find().and([
      { train: data.train },
      { station: data.from },
    ]);
    const toTime = await RouteModel.find().and([
      { train: data.train },
      { station: data.to },
    ]);
    //console.log(toTime);
    const passenger = new PassengerModel(data);
    const { error, value } = passenger.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        passenger.seat_no = Math.floor(100 + Math.random() * 900);
        const result = await passenger.save();

        let email = user.email;
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "irctcdemo1@gmail.com",
            pass: "irctc@123",
          },
        });
        let info = await transporter.sendMail({
          from: "irctcdemo1@gmail.com", // sender address
          to: email, // list of receivers
          subject: "Ticket", // Subject line
          //text: "Here is your otp", // plain text body
          html: `<b style="color:orange;">Name: ${result.first_name} ${result.last_name}</b>
                <p style="color:blue;">Train : ${train.train_name}</p>
                <p style="color:blue;">From : ${from.station_name} &nbsp;&nbsp; Time : ${fromTime[0].arr_time}</p>
                <p style="color:blue;">To : ${to.station_name} &nbsp;&nbsp; Time : ${toTime[0].arr_time}</p>
                <p style="color:blue;">Date : ${data.booking_date}</p>
                <p style="color:blue;">Price : ${data.ticket_price}</p>
                <p style="color:blue;">Seat No : ${result.seat_no}</p>`, // html body
        });

        res.send(`Ticket sent: ${info.messageId}`);

        // res.send(result);
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
