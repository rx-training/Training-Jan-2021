var express = require("express");
const StatusDomain = require("../../domains/status.domain");
var router = express.Router();

class StatusController {
  //To get all statuss
  static async get(req, res) {
    const statusDomain = new StatusDomain();
    statusDomain.getAllStatus(req, res);
  }
  //to get status
  static async getStatus(req, res) {
    const statusDomain = new StatusDomain();
    statusDomain.getStatus(req, res);
  }
  //To insert status
  static async insertStatus(req, res) {
    const statusDomain = new StatusDomain();
    statusDomain.insertStatus(req, res);
  }
  //To update status
  static async updateStatus(req, res) {
    const statusDomain = new StatusDomain();
    statusDomain.updateStatus(req, res);
  }
  //To delete status
  static async deleteStatus(req, res) {
    const statusDomain = new StatusDomain();
    statusDomain.deleteStatus(req, res);
  }
}

//To insert status
router.post("/", StatusController.insertStatus);
//To get all statuss
router.get("/", StatusController.get);
//To get an single status by id
router.get("/:statusId", StatusController.getStatus);
//To update status
router.put("/:statusId", StatusController.updateStatus);
//To delete a status
router.delete("/:statusId", StatusController.deleteStatus);

module.exports = router;
