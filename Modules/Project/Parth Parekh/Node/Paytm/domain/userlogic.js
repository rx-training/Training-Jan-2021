const UserModel = require("../models/userData");

class UserData {
    async getAllUserData (req,res){
        try {
            const result = await UserModel.find();
            if (!result) {
                return res.status(404).send("Users Not Available !!");
            } else {
                res.send(result);
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }
    async getUserDetailsFromId (req,res){
        try {
            const result = await UserModel.findById(req.params.id);
            if (!result) {
                return res.status(404).send(`User Not Available For User ID : ${req.params.id} !!`);
            } else {
                res.send(result);
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async addUser(req,res){
        const data = req.body;
        const userObject = new UserModel(data);
        const { error, value } = userObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await userObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }

    }

    async updateUser(req,res){
        const data = req.body;
        const userObject = new UserModel(data);
        const { error, value } = userObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await UserModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: data,
                },
                { new: true }
            );
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
    async deleteUser(req,res){
        const result = await UserModel.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send("Product Not Found");
        } else {
            res.send(`User Id:${req.params.id}  Deleted Successfully `);
        }
    }
}
module.exports = UserData;
