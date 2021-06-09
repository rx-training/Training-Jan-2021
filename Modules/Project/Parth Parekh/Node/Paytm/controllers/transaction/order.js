const express = require("express");
const router = express.Router({ mergeParams: true });
const UserData = require("../../domain/userlogic");
//const adminverifytoken = require("../../middleware/adminverifytoken");
const verifytoken = require("../../middleware/verifytoken");

class TransactionController {
    static async getOrderDetailsOfUser(req, res) {
        const userData = new UserData();
        userData.getOrderDetailsOfUser(req, res);
    }
    static async orderPayment(req, res) {
        const userData = new UserData();
        userData.orderPayment(req, res);
    }
}

//Get Methods
router.get("/", [verifytoken], TransactionController.getOrderDetailsOfUser);

router.post("/payment", [verifytoken], TransactionController.orderPayment);

module.exports = router;
