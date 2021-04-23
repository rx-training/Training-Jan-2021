const express = require("express");
const router = express.Router();
const UserData = require("../../domain/userlogic");

class TransactionController {
    static async getOrderDetailsOfUser(req, res) {
        const userData = new UserData();
        userData.getOrderDetailsOfUser(req, res);
    }
    static async orderPayment(req,res){
        const userData = new UserData();
        userData.orderPayment(req, res); 
    }
}

//Get Methods
router.get("/", TransactionController.getOrderDetailsOfUser);

router.put("/payment", TransactionController.orderPayment);

module.exports = router;
