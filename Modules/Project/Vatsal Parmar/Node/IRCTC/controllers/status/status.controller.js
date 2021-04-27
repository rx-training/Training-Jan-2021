var express = require("express");
const StatusDomain = require("../../domains/status.domain");
var router = express.Router();
const verifyAdminToken = require("../../authentication/verifyAdminToken");
const verifytoken = require("../../authentication/verifytoken");

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
router.post("/", verifyAdminToken, StatusController.insertStatus);
//To get all statuss
router.get("/", verifyAdminToken, StatusController.get);
//To get an single status by id
router.get("/:statusId", verifyAdminToken, StatusController.getStatus);
//To update status
router.put("/:statusId", verifyAdminToken, StatusController.updateStatus);
//To delete a status
router.delete("/:statusId", verifyAdminToken, StatusController.deleteStatus);

module.exports = router;
