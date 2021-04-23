var express = require("express");
const TrainDomain = require("../../../domains/trains.domain");
var router = express.Router();

class SearchController {
  //To search trains
  static async get(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.searchTrains(req, res);
  }
}

//To search trains
router.get("/", SearchController.get);

module.exports = router;
