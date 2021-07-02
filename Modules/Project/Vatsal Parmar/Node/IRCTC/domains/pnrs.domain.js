const PnrModel = require("../models/pnrs.model");
const UserModel = require("../models/users.model");
const TrainModel = require("../models/trains.model");
const StationModel = require("../models/stations.model");
const RouteModel = require("../models/routes.model");
const StatusModel = require("../models/status.model");

require("dotenv").config();

const EMAIL = process.env.IRCTC_EMAIL;
const PASSWORD = process.env.IRCTC_PASSWORD;

const nodemailer = require("nodemailer");

class PnrDomain {
  //To get all pnrs
  async getAllPnrs(req, res) {
    const pnrs = await PnrModel.find()
      .populate("train", "train_name")
      .populate("from", "station_name")
      .populate("to", "station_name")
      .populate("travel_class", "class_type")
      .populate("user_id", "first_name last_name");
    res.send(pnrs);
  }
  //To get pnr
  async getPnr(req, res) {
    let id = req.params.pnrId;
    const pnr = await PnrModel.findById(id)
      .populate("train", "train_name")
      .populate("from", "station_name")
      .populate("to", "station_name")
      .populate("travel_class", "class_type")
      .populate("user_id", "first_name last_name");
    if (pnr) {
      res.send(pnr);
    } else {
      res.status(404).send("Passenger Not Found");
    }
  }
  // To insert pnr
  // async insertPnr(req, res) {
  //   //getting user input
  //   let data = req.body;
  //   //console.log(data);
  //   let uId = data.user_id;
  //   let avail = true;

  //   const user = await UserModel.findById(uId);
  //   const train = await TrainModel.findById(data.train).select("train_name");
  //   const from = await StationModel.findById(data.from).select("station_name");
  //   const to = await StationModel.findById(data.to).select("station_name");
  //   const travel_class = await StatusModel.findById(data.travel_class);

  //   const fromTime = await RouteModel.find().and([
  //     { train: data.train },
  //     { station: data.from },
  //   ]);
  //   const toTime = await RouteModel.find().and([
  //     { train: data.train },
  //     { station: data.to },
  //   ]);
  //   //console.log(toTime);
  //   const pnr = new PnrModel(data);
  //   //console.log(pnr);
  //   const { error, value } = pnr.joiValidate(data);
  //   if (error) {
  //     res.status(400).send(error.details[0].message);
  //   } else {
  //     try {
  //       let seat = travel_class.avail_seat;
  //       let booked = travel_class.booked_seat;
  //       if (seat > data.passengers.length) {
  //         seat = seat - data.passengers.length;
  //         booked = booked + data.passengers.length;
  //         const result = await StatusModel.findByIdAndUpdate(
  //           data.travel_class,
  //           { $set: { avail_seat: seat, booked_seat: booked } },
  //           { new: true }
  //         );
  //         for (let i = 0; i < pnr.passengers.length; i++) {
  //           const seat = travel_class.seats.id(pnr.passengers[i].seat_id);
  //           seat.is_booked = true;
  //         }
  //         travel_class.save();
  //       } else {
  //         avail = false;
  //       }

  //       if (avail) {
  //         const result = await pnr.save();

  //         let email = user.email;
  //         // console.log(email);
  //         let transporter = nodemailer.createTransport({
  //           service: "gmail",
  //           auth: {
  //             user: EMAIL,
  //             pass: PASSWORD,
  //           },
  //         });
  //         let info = await transporter.sendMail({
  //           from: EMAIL, // sender address
  //           to: email, // list of receivers
  //           subject: "Booking Confirm", // Subject line
  //           html: `<b style="color:orange;">Number of passengers: ${result.passengers.length}</b>
  //               <p style="color:blue;">PNR : ${result._id}</p>
  //               <p style="color:blue;">Train : ${train.train_name}</p>
  //               <p style="color:blue;">From : ${from.station_name} &nbsp;&nbsp; Time : ${fromTime[0].arr_time}</p>
  //               <p style="color:blue;">To : ${to.station_name} &nbsp;&nbsp; Time : ${toTime[0].arr_time}</p>
  //               <p style="color:blue;">Date : ${data.journey_date}</p>
  //               <p style="color:blue;">Price : ${data.ticket_price}</p>`, // html body
  //         });
  //         if (info) {
  //           res.send(result._id);
  //         }
  //       } else {
  //         res.send("Train Full");
  //       }
  //       // res.send(result);
  //     } catch (e) {
  //       res.send(e.message);
  //     }
  //   }
  // }
  // **************
  async insertPnr(req, res) {
    //getting user input
    let data = req.body;
    //console.log(data);
    let uId = data.user_id;
    // let avail = true;

    const user = await UserModel.findById(uId);
    const train = await TrainModel.findById(data.train).select("train_name");
    const from = await StationModel.findById(data.from).select("station_name");
    const to = await StationModel.findById(data.to).select("station_name");
    const travel_class = await StatusModel.findById(data.travel_class);
    const seatsInClass = travel_class.seats.map((item) => item._id);
    const bookedPnrWithSameClassAndDate = await PnrModel.find({
      journey_date: data.journey_date,
      travel_class: data.travel_class,
    });

    const noOfPassengers = data.passengers.length;
    const seatsToBook = [];
    if (bookedPnrWithSameClassAndDate.length > 0) {
      const bookedSeats = [];
      for (let i = 0; i < bookedPnrWithSameClassAndDate.length; i++) {
        const a = bookedPnrWithSameClassAndDate[i].passengers.map(
          (pas) => pas.seat_id
        );
        // console.log(a.length);
        for (let j = 0; j < a.length; j++) {
          bookedSeats.push(a[j]);
        }
      }
      const difference = seatsInClass.filter(
        (x) => bookedSeats.indexOf(x) === -1
      );
      if (difference.length > noOfPassengers) {
        for (let i = 0; i < noOfPassengers; i++) {
          let a = travel_class.seats.find((item) => item._id === difference[i]);
          seatsToBook.push(a);
        }
      }
    } else {
      for (let i = 0; i < noOfPassengers; i++) {
        seatsToBook.push(travel_class.seats[i]);
      }
    }

    if (seatsToBook.length > 0) {
      for (let i = 0; i < noOfPassengers; i++) {
        data.passengers[i].seat_no = seatsToBook[i].seat_no;
        data.passengers[i].seat_id = seatsToBook[i]._id;
      }

      const fromTime = await RouteModel.find().and([
        { train: data.train },
        { station: data.from },
      ]);
      const toTime = await RouteModel.find().and([
        { train: data.train },
        { station: data.to },
      ]);
      //console.log(toTime);
      const pnr = new PnrModel(data);
      //console.log(pnr);
      const { error, value } = pnr.joiValidate(data);
      if (error) {
        res.status(400).send(error.details[0].message);
      } else {
        const result = await pnr.save();
        try {
          let email = user.email;
          // console.log(email);
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: EMAIL,
              pass: PASSWORD,
            },
          });
          let info = await transporter.sendMail({
            from: EMAIL, // sender address
            to: email, // list of receivers
            subject: "Booking Confirm", // Subject line
            html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: rgb(1, 1, 139);text-decoration:none;font-weight:600">IRCTC</a>
              </div>
              <p style="font-size:1.1em">Hi,</p>
              <p>Thank you for choosing IRCTC. Your booking is confirmed.</p>
              <p style="color:blue;">Train : ${train.train_name}</p>
              <p style="color:blue;">From : ${from.station_name} &nbsp;&nbsp; Time : ${fromTime[0].arr_time}</p>
              <p style="color:blue;">To : ${to.station_name} &nbsp;&nbsp; Time : ${toTime[0].arr_time}</p>
              <p style="color:blue;">Date : ${data.journey_date}</p>
              <p style="color:blue;">PNR No. : ${result._id}</p>
              <p style="color:blue;">Price : ${data.ticket_price}</p>
              <a href="http://20.198.103.48:91/ticket/${result._id}">Click here to view ticket</a>
              <p style="font-size:0.9em;">Regards,<br />IRCTC</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>IRCTC Inc</p>
                <p>India</p>
              </div>
            </div>
          </div>`, // html body
          });
          if (info) {
            res.send(result._id);
          }
        } catch (e) {
          res.send(e.message);
        }
      }
    } else {
      res.send("train is full");
    }
  }
  // **************

  // // To delete a pnr
  async deletePnr(req, res) {
    let id = req.params.pnrId;
    const passenger = await PnrModel.findByIdAndDelete(id);
    if (passenger) {
      res.send("Ticket Cancled");
    } else {
      res.status(404).send("Pnr Not Found");
    }
  }
  // async deletePnr(req, res) {
  //   let id = req.params.pnrId;

  //   const pnr = await PnrModel.findById(id);
  //   const travel_class = await StatusModel.findById(pnr.travel_class);
  //   const passengers = pnr.passengers;

  //   if (passengers) {
  //     for (let i = 0; i < passengers.length; i++) {
  //       let seatId = passengers[i].seat_id;
  //       //passenger.remove();
  //       let av_seat = travel_class.avail_seat;
  //       let booked = travel_class.booked_seat;
  //       av_seat = av_seat + 1;
  //       booked = booked - 1;
  //       const result = await StatusModel.findByIdAndUpdate(
  //         pnr.travel_class,
  //         { $set: { avail_seat: av_seat, booked_seat: booked } },
  //         { new: true }
  //       );
  //       //console.log(travel_class);
  //       const seat = travel_class.seats.id(seatId);
  //       seat.is_booked = false;
  //       travel_class.save();
  //     }
  //     const result = await PnrModel.findByIdAndDelete(id);
  //     //console.log(result);
  //     res.send("Ticket Cancled");
  //   } else {
  //     res.status(404).send("Pnr not found");
  //   }
  // }
  //To update a pnr
  async updatePnr(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.pnrId;

    const pnr = new PnrModel(data);
    const { error, value } = pnr.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await PnrModel.findByIdAndUpdate(
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
  //To delete a passenger
  // async deletePassenger(req, res) {
  //   let id = req.params.pnrId;
  //   let pId = req.params.passengerId;
  //   const pnr = await PnrModel.findById(id);
  //   const travel_class = await StatusModel.findById(pnr.travel_class);
  //   const passenger = pnr.passengers.id(pId);

  //   if (passenger) {
  //     let seatId = passenger.seat_no;
  //     passenger.remove();
  //     let av_seat = travel_class.avail_seat;
  //     let booked = travel_class.booked_seat;
  //     av_seat = av_seat + 1;
  //     booked = booked - 1;
  //     const result = await StatusModel.findByIdAndUpdate(
  //       pnr.travel_class,
  //       { $set: { avail_seat: av_seat, booked_seat: booked } },
  //       { new: true }
  //     );
  //     const seat = travel_class.seats.id(seatId);
  //     seat.is_booked = false;
  //     travel_class.save();

  //     pnr.save();
  //     res.send("Passenger Removed Successfully");
  //   } else {
  //     res.status(404).send("Passenger Not Found");
  //   }
  // }
  async deletePassenger(req, res) {
    let id = req.params.pnrId;
    let pId = req.params.passengerId;
    const pnr = await PnrModel.findById(id);

    const passenger = pnr.passengers.id(pId);

    if (passenger) {
      passenger.remove();

      pnr.save();
      res.send("Passenger Removed Successfully");
    } else {
      res.status(404).send("Passenger Not Found");
    }
  }
}

module.exports = PnrDomain;
