var express = require("express");
const TrainDomain = require("../../domains/trains.domain");
const search = require("./childRoutes/search.controller");
var router = express.Router();
const verifyAdminToken = require("../../authentication/verifyAdminToken");
const verifytoken = require("../../authentication/verifytoken");

class TrainController {
  //To get all trains
  static async get(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.getAllTrains(req, res);
  }
  //to get train
  static async getTrain(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.getTrain(req, res);
  }
  //To insert train
  static async insertTrain(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.insertTrain(req, res);
  }
  //To update train
  static async updateTrain(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.updateTrain(req, res);
  }
  //To delete train
  static async deleteTrain(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.deleteTrain(req, res);
  }
  //To get passengers
  static async getPnrs(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.getPnrs(req, res);
  }
}

//To insert train
router.post("/", verifyAdminToken, TrainController.insertTrain);
//To get all trains
router.get("/", verifyAdminToken, TrainController.get);
//To get an single train by id
router.get("/train/:trainId", verifytoken, TrainController.getTrain);
//To update train
router.put("/train/:trainId", verifyAdminToken, TrainController.updateTrain);
//To delete a train
router.delete("/train/:trainId", verifyAdminToken, TrainController.deleteTrain);
//To search train
router.use("/search", search);
//To get all pnrs in train
router.get("/pnrs/:trainId", verifyAdminToken, TrainController.getPnrs);

module.exports = router;
