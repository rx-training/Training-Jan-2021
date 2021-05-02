var express = require("express");
const PnrDomain = require("../../domains/pnrs.domain");
var router = express.Router();
const verifyAdminToken = require("../../authentication/verifyAdminToken");
const verifytoken = require("../../authentication/verifytoken");

class PnrController {
  //To get all pnrs
  static async get(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.getAllPnrs(req, res);
  }
  //to get pnr
  static async getPnr(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.getPnr(req, res);
  }
  //To insert pnr
  static async insertPnr(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.insertPnr(req, res);
  }
  //To update pnr
  static async updatePnr(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.updatePnr(req, res);
  }
  //To delete pnr
  static async deletePnr(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.deletePnr(req, res);
  }
  //To delete passenger
  static async deletePassenger(req, res) {
    const pnrDomain = new PnrDomain();
    pnrDomain.deletePassenger(req, res);
  }
}

//To insert passenger
router.post("/", verifytoken, PnrController.insertPnr);
//To get all passengers
router.get("/", verifyAdminToken, PnrController.get);
//To get an single passenger by id
router.get("/:pnrId", verifytoken, PnrController.getPnr);
//To update passenger
router.put("/:pnrId", verifytoken, PnrController.updatePnr);
//To delete a pnr
router.delete("/:pnrId", verifytoken, PnrController.deletePnr);
//To delete a passenger
router.delete(
  "/:pnrId/passenger/:passengerId",
  verifytoken,
  PnrController.deletePassenger
);

module.exports = router;
