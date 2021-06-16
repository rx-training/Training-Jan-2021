const express = require("express");
const router = express.Router();
const UserData = require("../domain/userlogic");
const transaction = require("./transaction/transaction");
const order = require("./transaction/order");
const category = require("../controllers/category");

const adminverifytoken = require("../middleware/adminverifytoken");
const verifytoken = require("../middleware/verifytoken");

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
    static async getOrderDetailsOfUser(req, res) {
        const userData = new UserData();
        userData.getOrderDetailsOfUser(req, res);
    }
    static async loginUser(req, res) {
        const userData = new UserData();
        userData.loginUser(req, res);
    }
}

router.use("/:id/transaction", transaction);
router.use("/:id/orders", order);
router.use("/:id/category", category);

//Get Methods
router.get("/", [adminverifytoken], UserController.getAllUserData);
router.get("/:id", [verifytoken], UserController.getUserDetailsFromId);

//Post Methods
//Register New User
router.post("/register", UserController.addUser);

//Login User pass email and password
router.post("/login", UserController.loginUser);

//Put Methods
router.put("/:id/:id2", [verifytoken], UserController.updateUser);

//Delete Methods
router.delete("/:id", [adminverifytoken], UserController.deleteUser);

module.exports = router;
