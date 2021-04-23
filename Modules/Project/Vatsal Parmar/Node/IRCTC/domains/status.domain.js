const StatusModel = require("../models/status.model");

class StatusDomain {
  //To get all status
  async getAllStatus(req, res) {
    const status = await StatusModel.find();
    res.send(status);
  }
  //To get status
  async getStatus(req, res) {
    let id = req.params.statusId;
    const status = await StatusModel.findById(id);
    if (status) {
      res.send(status);
    } else {
      res.status(404).send("Status Not Found");
    }
  }
  //To insert status
  async insertStatus(req, res) {
    //getting user input
    let data = req.body;

    const status = new StatusModel(data);
    const { error, value } = status.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await status.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a status
  async deleteStatus(req, res) {
    let id = req.params.statusId;
    const status = await StatusModel.findByIdAndDelete(id);
    if (status) {
      res.send("status Record Deleted Successfully");
    } else {
      res.status(404).send("Status Not Found");
    }
  }
  //To update a status
  async updateStatus(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.userId;

    const status = new StatusModel(data);
    const { error, value } = status.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await StatusModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send(result);
        } else {
          res.status(404).send("Status Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = StatusDomain;
