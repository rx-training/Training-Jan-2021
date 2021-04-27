var express = require("express");
const PassengerDomain = require("../../domains/passengers.domain");
var router = express.Router();
const verifyAdminToken = require("../../authentication/verifyAdminToken");
const verifytoken = require("../../authentication/verifytoken");

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
router.post("/", verifytoken, PassengerController.insertPassenger);
//To get all passengers
router.get("/", verifyAdminToken, PassengerController.get);
//To get an single passenger by id
router.get("/:passengerId", verifytoken, PassengerController.getPassenger);
//To update passenger
router.put("/:passengerId", verifytoken, PassengerController.updatePassenger);
//To delete a passenger
router.delete(
  "/:passengerId",
  verifytoken,
  PassengerController.deletePassenger
);

module.exports = router;
