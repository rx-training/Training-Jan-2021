const express = require("express");
const router = express.Router();
const StateDomain = require("../../domain/state.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class StatesController {
  // add state
  static async addState(req, res) {
    const stateDomain = new StateDomain();
    stateDomain.addState(req, res);
  }

  // get all states
  static async getAllStates(req, res) {
    const stateDomain = new StateDomain();
    stateDomain.getAllStates(req, res);
  }

  // get state by id
  static async getStateById(req, res) {
    const stateDomain = new StateDomain();
    stateDomain.getStateById(req, res);
  }

  // update state
  static async updateState(req, res) {
    const stateDomain = new StateDomain();
    stateDomain.updateState(req, res);
  }

  // delete state
  static async deleteState(req, res) {
    const stateDomain = new StateDomain();
    stateDomain.deleteState(req, res);
  }
}

// add state
router.post("/", [auth, sellerAuth], StatesController.addState);
// get all states
router.get("/", StatesController.getAllStates);
// get state by id
router.get("/:stateId", StatesController.getStateById);
// update state
router.put("/:stateId", [auth, sellerAuth], StatesController.updateState);
// delete state
router.delete("/:stateId", [auth, sellerAuth], StatesController.deleteState);

module.exports = router;
