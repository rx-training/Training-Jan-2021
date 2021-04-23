const express = require("express");
const router = express.Router();
const UserData = require("../domain/userlogic");
const transaction = require('./transaction/transaction');

class UserController {
    static async getAllUserData(req, res) {
        const userData = new UserData();
        userData.getAllUserData(req, res);
    }
    static async getUserDetailsFromId(req, res) {
        const userData = new UserData();
        userData.getUserDetailsFromId(req, res);
    }
    static async addUser(req, res) {
        const userData = new UserData();
        userData.addUser(req, res);
    }
    static async deleteUser(req, res) {
        const userData = new UserData();
        userData.deleteUser(req, res);
    }
    static async updateUser(req, res) {
        const userData = new UserData();
        userData.updateUser(req, res);
    }
}

router.use('/transaction',transaction);

//Get Methods
router.get("/", UserController.getAllUserData);
router.get("/:id", UserController.getUserDetailsFromId);

//Post Methods
router.post("/", UserController.addUser);

//Put Methods
router.put("/:id", UserController.updateUser);

//Delete Methods
router.delete("/:id", UserController.deleteUser);

module.exports = router;
