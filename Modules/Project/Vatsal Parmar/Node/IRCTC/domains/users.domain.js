const UserModel = require("../models/users.model");

class UserDomain {
  //To get all users
  async getAllUsers(req, res) {
    const users = await UserModel.find();
    res.send(users);
  }
  //To get user
  async getUser(req, res) {
    let id = req.params.userId;
    const user = await UserModel.findById(id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User Not Found");
    }
  }
  //To insert user
  async insertUser(req, res) {
    //getting user input
    let data = req.body;

    const user = new UserModel(data);
    const { error, value } = user.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await user.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a user
  async deleteUser(req, res) {
    let id = req.params.userId;
    const user = await UserModel.findByIdAndDelete(id);
    if (user) {
      res.send("User Record Deleted Successfully");
    } else {
      res.status(404).send("User Not Found");
    }
  }
  //To update a user
  async updateUser(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.userId;

    const user = new UserModel(data);
    const { error, value } = user.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await UserModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send(result);
        } else {
          res.status(404).send("User Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = UserDomain;
