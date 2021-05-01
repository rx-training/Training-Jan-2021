const ProductModel = require("../models/product");
const UserModel = require("../models/userData");

class ProductData {
    async getProduct(req, res) {
        let productname = req.query.productname;

        if (productname) {
            try {
                const result = await ProductModel.find({
                    ProductName: productname,
                })
                    .populate("ProductCategory", "CategoryName -_id")
                    .select("ProductName  ProductType ProductPrice -_id");
                if (result.length < 1) {
                    return res.send("Not Found ");
                } else {
                    return res.send(result);
                }
            } catch (ex) {
                return res.send("Not Found ");
            }
        } else {
            try {
                const result = await ProductModel.find()
                    .populate("ProductCategory", "CategoryName -_id")
                    .select("ProductName  ProductType ProductPrice -_id");
                if (result.length < 1) {
                    return res.status(404).send("No Products Available !!");
                } else {
                    res.send(result);
                }
            } catch (ex) {
                res.send(ex.message);
            }
        }
    }

    async getProductDetailsFromId(req, res) {
        try {
            const result = await ProductModel.findById(req.params.id)
                .populate("ProductCategory", "CategoryName -_id")
                .select("ProductName  ProductType ProductPrice -_id");
            res.send(result);
        } catch (ex) {
            res.send("Product Not Available !!");
        }
    }

    async addProduct(req, res) {
        const data = req.body;
        const productObject = new ProductModel(data);
        const { error, value } = productObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await productObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
    async deleteProduct(req, res) {
        try {
            const result = await ProductModel.findByIdAndDelete(req.params.id);
            res.send(`Product Id:${req.params.id}  Deleted Successfully `);
        } catch {
            return res.send("Not Found Id");
        }
    }
    async updateProductDetails(req, res) {
        const data = req.body;
        const productObject = new ProductModel(data);
        const { error, value } = productObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await ProductModel.findByIdAndUpdate(
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

    async bookOrder(req, res) {
        const userId = req.body.userId;
        const ProductName = req.body.ProductName;
        const Quantity = req.body.Quantity;
        const ShippingAddress = req.body.ShippingAddress;

        try {
            const result = await ProductModel.find({
                ProductName: ProductName,
            });

            if (result.length < 1) {
                return res.status(404).send("Product Not Found");
            } else {
                try {
                    const userData = await UserModel.findById(userId);
                    if (!userData) {
                        return res.send("Invalid User Id For Booking");
                    } else {
                        let total = result[0].ProductPrice * Quantity;
                        const orderData = {
                            Product: result[0]._id,
                            Quantity: Quantity,
                            totalAmount: total,
                            Shipping_Address: ShippingAddress,
                        };
                        //Push Data Into user Orders
                        userData.orders.push(orderData);
                        userData.save();
                        res.send("Order Booked Successfully");
                    }
                } catch (ex) {
                    res.send(ex.message);
                }
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }
}

module.exports = ProductData;
