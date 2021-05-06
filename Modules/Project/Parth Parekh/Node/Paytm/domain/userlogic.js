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
            const result = await UserModel.find().select(
                "name email mobileno balance orders transactions -_id"
            );
            res.send(result);
        } catch {
            return res.status(404).send("Users Not Available !!");
        }
    }
    async getUserDetailsFromId(req, res) {
        try {
            const result = await UserModel.findById(req.params.id).select(
                "name email mobileno balance orders transactions -_id"
            );
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
                    return res.status(400).send(error.details[0].message);
                }
                try {
                    const result = await userObject.save();
                    res.send(`Register Successfully Done`);
                } catch (ex) {
                    res.send(ex.message);
                }
            }
        });
    }

    async loginUser(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        const result = await UserModel.find({ email: email });
        //console.log(result);

        if (result.length < 1) {
            return res.send("User Not Register ,Register First !!");
        } else {
            bcrypt.compare(
                password,
                result[0].password,
                async function (err, result) {
                    if (err) {
                        res.status(404).json({
                            message: "user not Registered",
                        });
                    }
                    if (result) {
                        let userData = {
                            email: email,
                            password: password,
                        };
                        let token = jwt.sign(userData, "private", {
                            expiresIn: "1h",
                        });
                        res.status(200).json({
                            message: "Login Successfull",
                            jwttoken: token,
                        });
                    } else {
                        res.send("email and password not match");
                    }
                }
            );
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
            res.send(
                `Balance : ${result.balance} \n Transaction Details :\n  ${result.transactions}`
            );
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
        const orderId = req.body.orderId;
        const amount = req.body.amount;

        try {
            const userData = await UserModel.findById(userId);
            const orderData = userData.orders.id(orderId);
            if (!orderData) {
                return res.send(`Order Is Not Available For Id ${orderId}`);
            } else {
                if (orderData.PaymentStatus == "Done") {
                    return res.send("Payment Failed");
                } else {
                    if (orderData.totalAmount === amount) {
                        if (userData.balance >= amount) {
                            userData.balance = userData.balance - amount;

                            const product = await ProductModel.findById(
                                orderData.Product
                            ).select("ProductName -_id");
                            //console.log(product);

                            const duplicateData = {
                                _id: orderData._id,
                                Quantity: orderData.Quantity,
                                PaymentStatus: "Done",
                                Product: orderData.Product,
                                ProductName: product.ProductName,
                                totalAmount: orderData.totalAmount,
                                Shipping_Address: orderData.Shipping_Address,
                                DeliveredOn: "4-5 Working Days",
                                OrderDate: orderData.OrderDate,
                            };
                            orderData.remove();
                            userData.orders.push(duplicateData);
                            userData.save();

                            const productData = await ProductModel.findById(
                                duplicateData.Product
                            );
                            //console.log(productData);
                            productData.Qty = productData.Qty - 1;
                            productData.save();

                            res.send("Payment SuccessFully Done");
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
                                    html: `<h3>Product : ${duplicateData.ProductName}</h3>
                                    <h3>PaymentStatus : ${duplicateData.PaymentStatus}</h3>
                                    <h3>Amount : ${duplicateData.totalAmount}</h3>
                                    <h3>Quantity : ${duplicateData.Quantity}</h3>
                                    <h3>Shipping Address : ${duplicateData.Shipping_Address}</h3>
                                    <h3> Delivery on : ${duplicateData.DeliveredOn}</h3>`,
                                });
                            } catch (ex) {
                                res.send("Error Occurs");
                            }
                        } else {
                            return res.send(`Insufficient Balance !!`);
                        }
                    } else {
                        return res.send(
                            `Enter Amount : ${orderData.totalAmount} For Payment`
                        );
                    }
                }
            }
        } catch (ex) {
            return res.status(404).send("User Not Found");
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
                    res.send("Money Added Successfully");
                }
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }
}
module.exports = UserData;
