var express = require("express");
const PassengerDomain = require("../../domains/passengers.domain");
var router = express.Router();

class PassengerController {
  //To get all passengers
  static async get(req, res) {
    const passengerDomain = new PassengerDomain();
    passengerDomain.getAllPassengers(req, res);
  }
  //to get passenger
  static async getPassenger(req, res) {
    const passengerDomain = new PassengerDomain();
    passengerDomain.getPassenger(req, res);
  }
  //To insert passenger
  static async insertPassenger(req, res) {
    const passengerDomain = new PassengerDomain();
    passengerDomain.insertPassenger(req, res);
  }
  //To update passenger
  static async updatePassenger(req, res) {
    const passengerDomain = new PassengerDomain();
    passengerDomain.updatePassenger(req, res);
  }
  //To delete passenger
  static async deletePassenger(req, res) {
    const passengerDomain = new PassengerDomain();
    passengerDomain.deletePassenger(req, res);
  }
}

//To insert passenger
router.post("/", PassengerController.insertPassenger);
//To get all passengers
router.get("/", PassengerController.get);
//To get an single passenger by id
router.get("/:passengerId", PassengerController.getPassenger);
//To update passenger
router.put("/:passengerId", PassengerController.updatePassenger);
//To delete a passenger
router.delete("/:passengerId", PassengerController.deletePassenger);

module.exports = router;
