const UserModel = require("../models/userData");
const ProductModel = require("../models/product");
const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const USER = process.env.USER;
const PASS = process.env.PASS;

class UserData {
    async getAllUserData(req, res) {
        try {
            const result = await UserModel.find();
            res.send(result);
        } catch {
            return res.status(404).send("Users Not Available !!");
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
        try {
            const checkemail = await UserModel.find({ email: data.email });
            if (checkemail.length < 1) {
                bcrypt.hash(data.password, 10, async function (err, hash) {
                    if (err) {
                        return res.json({
                            message: "error Something Wrong",
                            error: err,
                        });
                    } else {
                        const userObject = new UserModel({
                            name: data.name,
                            email: data.email,
                            password: hash,
                            mobileno: data.mobileno,
                        });
                        const { error, value } = userObject.joivalidate(data);
                        if (error) {
                            return res
                                .status(400)
                                .send(error.details[0].message);
                        }
                        try {
                            const result = await userObject.save();
                            res.send(`Register Successfully Done`);
                        } catch (ex) {
                            res.send(ex.message);
                        }
                    }
                });
            } else {
                return res.status(406).send("Email id already exists");
            }
        } catch (ex) {
            return res.send("error");
        }
    }

    async loginUser(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        const result = await UserModel.find({ email: email });
        // console.log(result);

        if (result.length < 1) {
            return res.status(404).send("User Not Register ,Register First !!");
        } else {
            bcrypt.compare(
                password,
                result[0].password,
                async function (err, result1) {
                    if (err) {
                        res.status(401).json({
                            message: "user not Registered",
                        });
                    }
                    if (result1) {
                        let userData = {
                            email: email,
                            password: password,
                        };
                        let token = jwt.sign(userData, "private", {
                            expiresIn: "1h",
                        });

                        res.status(200).json({
                            userId: result[0]._id,
                            message: "Login Successfull",
                            jwttoken: token,
                        });
                    } else {
                        res.status(401).send("email and password not match");
                    }
                }
            );
        }
    }

    async updateUser(req, res) {
        const data = req.body;
        const id2 = req.params.id2;
        if (id2 == 1) {
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
                return res.status(200).send(result);
            } catch (ex) {
                return res.status(400).send(ex.message);
            }
        } else if (id2 == 2) {
            bcrypt.hash(data.password, 10, async function (err, hash) {
                if (err) {
                    return res.status(400).send("Password error");
                } else {
                    const updateData = {
                        name: data.name,
                        email: data.email,
                        password: hash,
                        mobileno: data.mobileno,
                    };
                    try {
                        const result = await UserModel.findByIdAndUpdate(
                            req.params.id,
                            {
                                $set: updateData,
                            },
                            { new: true }
                        );
                        return res.status(200).send(result);
                    } catch (ex) {
                        return res.status(400).send(ex.message);
                    }
                }
            });
        } else {
            return res.status(400).send("Error");
        }
    }
    async deleteUser(req, res) {
        try {
            const result = await UserModel.findByIdAndDelete(req.params.id);
            res.send(`User Id:${req.params.id}  Deleted Successfully `);
        } catch {
            return res.send("Not Found Id");
        }
    }

    async getTransactionDetailsOFUser(req, res) {
        const userId = req.params.id;
        try {
            const result = await UserModel.findById(userId);
            //console.log(result);
            res.send(result);
        } catch (ex) {
            return res.status(404).send("User Not Found");
        }
    }

    async getOrderDetailsOfUser(req, res) {
        const userId = req.params.id;
        try {
            const result = await UserModel.findById(userId)
                .populate({ path: "orders", populate: { path: "Product" } })
                .select("-_id");
            res.send(result.orders);
        } catch (ex) {
            return res.status(404).send("User Not Found");
        }
    }
    async orderPayment(req, res) {
        const userId = req.body.userId;
        const ProductId = req.body.Product;
        const ProductName = req.body.ProductName;
        const Shipping_Address = req.body.Shipping_Address;
        const amount = req.body.amount;
        const size = req.body.size;

        try {
            const userData = await UserModel.findById(userId);

            if (userData.balance >= amount) {
                userData.balance = userData.balance - amount;

                const orderData = {
                    Product: ProductId,
                    ProductName: ProductName,
                    size: size,
                    amount: amount,
                    Shipping_Address: Shipping_Address,
                    DeliveredOn: "4-5 Working Days",
                };

                userData.orders.push(orderData);
                userData.save();

                const productData = await ProductModel.findById(ProductId);

                //console.log(productData);
                if (productData.Qty <= 0) {
                    productData.Qty = 0;
                } else {
                    productData.Qty = productData.Qty - 1;
                    productData.save();

                    res.status(200).send("Payment SuccessFully Done");
                    //Sending Payment SuccessFull Mail
                    let email = userData.email;
                    //console.log(email);

                    let transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: USER,
                            pass: PASS,
                        },
                    });
                    try {
                        let info = await transporter.sendMail({
                            from: USER,
                            to: email,
                            subject: "Payment Successfull",
                            html: `<h3 style ='color:green'>Product : ${ProductName}</h3>
                                    
                                    <h3 style ='color : green'>Amount : ${amount}</h3>
                                    
                                    <h3>Shipping Address : ${Shipping_Address}</h3>
                                    <h3> Delivery In : 4-5 Working Days </h3>`,
                        });
                    } catch (ex) {
                        console.log("mail not send");
                        res.send("Error Occurs");
                    }
                }
            } else {
                return res.status(403).send(`Insufficient Balance !!`);
            }
        } catch (ex) {
            return res.status(404).send("User Not Found");
        }
    }

    async paymentLogic(req, res) {
        const mobileno = req.body.mobileno;
        const amount = req.body.amount;
        const senderId = req.body.senderId;

        try {
            const receiverData = await UserModel.find({ mobileno: mobileno });
            console.log(receiverData);
            if (receiverData.length < 1) {
                return res.status(404).send("ReceiverId Not Found");
            }

            const senderData = await UserModel.findById(senderId);
            if (!senderData) {
                return res.status(404).send("SenderId Not Found");
            }
            console.log(senderData);
            if (senderData.balance >= amount) {
                //Deduct Balance from Sender
                senderData.balance = senderData.balance - amount;

                //Add Balance in  Receiver
                receiverData[0].balance = receiverData[0].balance + amount;

                const transactionSenderData = {
                    amount: amount,
                    YourId: senderId,
                    receiverName: receiverData[0].name,
                    receiverMobileNo: receiverData[0].mobileno,
                    receiverId: receiverData[0]._id,
                    paymentType: "Send",
                };
                senderData.transactions.push(transactionSenderData);
                senderData.save();

                const transactionReceiverData = {
                    amount: amount,
                    senderId: senderId,
                    senderName: senderData.name,
                    senderMobileNo: senderData.mobileno,
                    YourId: receiverData[0]._id,
                    paymentType: "Received",
                };
                receiverData[0].transactions.push(transactionReceiverData);
                receiverData[0].save();

                res.status(200).send("Transaction Successfully Done");
            } else {
                return res.status(402).send("Insufficient Balance");
            }
        } catch (error) {
            return res.status(404).send("Something went wrong");
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
                    return res
                        .status(404)
                        .send("Enter Amount Should Be Atleast 1 or More");
                } else {
                    userData.balance = userData.balance + MoneyToBeAdded;
                    const transactionUserData = {
                        amount: MoneyToBeAdded,
                        YourId: userId,
                        paymentType: "Money Added",
                    };

                    userData.transactions.push(transactionUserData);
                    userData.save();
                    res.send("Money Added Successfully");
                }
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }
}
module.exports = UserData;
