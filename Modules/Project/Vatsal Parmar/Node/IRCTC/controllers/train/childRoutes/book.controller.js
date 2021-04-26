var express = require("express");
const TrainDomain = require("../../../domains/trains.domain");
var router = express.Router();

class BookController {
  //To book train
  static async bookTrain(req, res) {
    const trainDomain = new TrainDomain();
    trainDomain.bookTrain(req, res);
  }
}

//To book train
router.put("/:classId", BookController.bookTrain);

module.exports = router;
