var express = require("express");
const UserDomain = require("../../domains/users.domain");
var router = express.Router();

class UserController {
  //To get all users
  static async get(req, res) {
    const userDomain = new UserDomain();
    userDomain.getAllUsers(req, res);
  }
  //to get user
  static async getUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.getUser(req, res);
  }
  //To insert user
  static async insertUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.insertUser(req, res);
  }
  //To update user
  static async updateUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.updateUser(req, res);
  }
  //To delete user
  static async deleteUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.deleteUser(req, res);
  }
}

//To insert user
router.post("/", UserController.insertUser);
//To get all users
router.get("/", UserController.get);
//To get an single user by id
router.get("/:userId", UserController.getUser);
//To update user
router.put("/:userId", UserController.updateUser);
//To delete a user
router.delete("/:userId", UserController.deleteUser);

module.exports = router;
