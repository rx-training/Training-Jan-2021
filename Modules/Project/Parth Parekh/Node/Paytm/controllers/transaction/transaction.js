const express = require("express");
const router = express.Router();
const UserData = require("../../domain/userlogic");

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
router.get('/',TransactionController.getTransactionDetailsOFUser);

router.post('/addMoney',TransactionController.addMoney);

//Put Methods
router.put('/',TransactionController.paymentLogic);

module.exports = router;
