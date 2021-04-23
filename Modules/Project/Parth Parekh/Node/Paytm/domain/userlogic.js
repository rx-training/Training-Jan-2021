const UserModel = require("../models/userData");
const mongoose = require("mongoose");

class UserData {
    async getAllUserData(req, res) {
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
    async getUserDetailsFromId(req, res) {
        try {
            const result = await UserModel.findById(req.params.id);
            if (!result) {
                return res
                    .status(404)
                    .send(
                        `User Not Available For User ID : ${req.params.id} !!`
                    );
            } else {
                res.send(result);
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async addUser(req, res) {
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

    async updateUser(req, res) {
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
    async deleteUser(req, res) {
        const result = await UserModel.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send("Product Not Found");
        } else {
            res.send(`User Id:${req.params.id}  Deleted Successfully `);
        }
    }

    async getTransactionDetailsOFUser(req, res) {
        const userId = req.body.userId;

        try {
            const result = await UserModel.findById(userId);
            if (!result) {
                return res.status(404).send(`User  Not Found`);
            }
            //console.log(result);
            res.send(
                `Balance : ${result.balance} \n Transaction Details :\n  ${result.transactions}`
            );
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async paymentLogic(req, res) {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const amount = req.body.amount;

        if (isNaN(amount)) {
            return res.send("Amount Should be in Number");
        } else {
            //Check Amount is Greaterthen 10
            if (amount < 10) {
                return res.send("Amount Atleast 10 or Greater than 10");
            } else {
                const senderData = await UserModel.findById(senderId);
                if (!senderData) {
                    return res.status(404).send("SenderId Not Found");
                }

                const receiverData = await UserModel.findById(receiverId);
                if (!receiverData) {
                    return res.status(404).send("ReceiverId Not Found");
                }

                //Check For Sufficient Balance
                if (senderData.balance >= amount) {
                    //Deduct Balance from Sender
                    senderData.balance = senderData.balance - amount;

                    //Add Balance in  Receiver
                    receiverData.balance = receiverData.balance + amount;

                    const transactionSenderData = {
                        amount: amount,
                        YourId: senderId,
                        receiverName: receiverData.name,
                        receiverMobileNo: receiverData.mobileno,
                        receiverId: receiverId,
                        paymentType: "Send",
                    };
                    senderData.transactions.push(transactionSenderData);
                    senderData.save();

                    const transactionReceiverData = {
                        amount: amount,
                        senderId: senderId,
                        senderName: senderData.name,
                        senderMobileNo: senderData.mobileno,
                        YourId: receiverId,
                        paymentType: "Received",
                    };
                    receiverData.transactions.push(transactionReceiverData);
                    receiverData.save();

                    res.status(200).send("Transaction Successfully Done");
                } else {
                    return res.send("Insufficient Balance");
                }
            }
        }
    }

    async addMoney(req, res) {
        const userId = req.body.userId;
        const MoneyToBeAdded = req.body.amount;
        try {
            const userData = await UserModel.findById(userId);
            if (!userData) {
                return res.status(404).send(`User Not Found of Id ${userId}`);
            }
            //console.log(result);
            if (isNaN(MoneyToBeAdded)) {
                return res.send("Enter Valid Amount");
            } else {
                if (MoneyToBeAdded <= 0) {
                    return res.send("Enter Amount Should Be Atleast 1 or More");
                } else {
                    userData.balance = userData.balance + MoneyToBeAdded;
                    const transactionUserData = {
                        amount: MoneyToBeAdded,
                        YourId: userId,
                        paymentType: "Money Added",
                    };
                    
                    userData.transactions.push(transactionUserData);
                    userData.save();
                    res.send('Money Added Successfully');
                    
                }
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }
}
module.exports = UserData;
