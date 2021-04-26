var express = require("express");
const StationDomain = require("../../domains/stations.domain");
var router = express.Router();

class StationController {
  //To get all stations
  static async get(req, res) {
    const stationDomain = new StationDomain();
    stationDomain.getAllStations(req, res);
  }
  //to get station
  static async getStation(req, res) {
    const stationDomain = new StationDomain();
    stationDomain.getStation(req, res);
  }
  //To insert station
  static async insertStation(req, res) {
    const stationDomain = new StationDomain();
    stationDomain.insertStation(req, res);
  }
  //To update station
  static async updateStation(req, res) {
    const stationDomain = new StationDomain();
    stationDomain.updateStation(req, res);
  }
  //To delete station
  static async deleteStation(req, res) {
    const stationDomain = new StationDomain();
    stationDomain.deleteStation(req, res);
  }
}

//To insert station
router.post("/", StationController.insertStation);
//To get all stations
router.get("/", StationController.get);
//To get an single station by id
router.get("/:stationId", StationController.getStation);
//To update station
router.put("/:stationId", StationController.updateStation);
//To delete an station
router.delete("/:stationId", StationController.deleteStation);

module.exports = router;
