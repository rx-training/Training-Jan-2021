const StationModel = require("../models/stations.model");

class StationDomain {
  //To get all stations
  async getAllStations(req, res) {
    const stations = await StationModel.find();
    res.send(stations);
  }
  //To get station
  async getStation(req, res) {
    let id = req.params.stationId;
    const station = await StationModel.findById(id);
    if (station) {
      res.send(station);
    } else {
      res.status(404).send("Station Not Found");
    }
  }
  //To insert station
  async insertStation(req, res) {
    //getting user input
    let data = req.body;

    const station = new StationModel(data);
    const { error, value } = station.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await station.save();
        if (result) {
          res.send("success");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a station
  async deleteStation(req, res) {
    let id = req.params.stationId;
    const station = await StationModel.findByIdAndDelete(id);
    if (station) {
      res.send("success");
    } else {
      res.status(404).send("Station Not Found");
    }
  }
  //To update a station
  async updateStation(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.stationId;

    const station = new StationModel(data);
    const { error, value } = station.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await StationModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send("success");
        } else {
          res.status(404).send("Station Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = StationDomain;
