const express = require("express");
const router = express.Router({mergeParams : true});
const UserData = require("../../domain/userlogic");
const adminverifytoken = require("../../middleware/adminverifytoken");
const verifytoken = require("../../middleware/verifytoken");

class TransactionController {
    static async paymentLogic(req, res) {
        const userData = new UserData();
        userData.paymentLogic(req, res);
    }
    static async getTransactionDetailsOFUser(req,res){
        const userData = new UserData();
        userData.getTransactionDetailsOFUser(req, res);
    }
    static async addMoney(req,res){
        const userData = new UserData();
        userData.addMoney(req, res);
    }
}

//Get Methods
router.get('/', [verifytoken] ,TransactionController.getTransactionDetailsOFUser);

router.post("/addMoney", [verifytoken], TransactionController.addMoney);

//Put Methods
router.put("/", [verifytoken], TransactionController.paymentLogic);

module.exports = router;
