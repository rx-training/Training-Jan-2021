const ProductModel = require("../models/product");
const UserModel = require("../models/userData");

class ProductData {
    async getProduct(req, res) {
        let productname = req.query.productname;

        if (productname) {
            try {
                const result = await ProductModel.find({
                    ProductName: productname,
                }).populate("ProductCategory");

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
                const result = await ProductModel.find().populate(
                    "ProductCategory"
                );
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
            const result = await ProductModel.findById(req.params.id).populate(
                "ProductCategory"
            );
            res.send(result);
        } catch (ex) {
            res.status(404).send("Product Not Available !!");
        }
    }

    async addProduct(req, res) {
        const data = req.body;
        // console.log(req.files);
        let dd = [];

        for (let i of req.files.moreInfo) {
            dd.push(`${i.path}`);
        }
        const pdata = {
            ProductName: data.ProductName,
            ProductCategory: data.ProductCategory,
            Rating: parseFloat(data.Rating),
            ProductType: data.ProductType,
            image: `${req.files.image[0].path}`,
            featured: data.featured,
            moreInfo: dd,
            Spec: data.Spec,
            ProductPrice: parseInt(data.ProductPrice),
            Qty: parseInt(data.Qty),
        };
        // console.log(pdata);
        const productObject = new ProductModel(pdata);

        // const { error, value } = productObject.joivalidate(pdata);
        // if (error) {
        //     console.log("validate error");
        //     return res.status(400).send(error.details[0].message);
        // }

        try {
            const result = await productObject.save();
            console.log(result);
            return res.status(200).send(result);
        } catch (ex) {
            console.log(ex.message);
            res.status(400).send(ex.message);
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
        console.log(data);
        var pdata;
        let dd = [];
        console.log(req.files);

        if (req.files.moreInfo == undefined && req.files.image == undefined) {
            pdata = {
                ProductName: data.ProductName,
                ProductCategory: data.ProductCategory,
                Rating: parseFloat(data.Rating),
                ProductType: data.ProductType,

                featured: data.featured,

                Spec: data.Spec,
                ProductPrice: parseInt(data.ProductPrice),
                Qty: parseInt(data.Qty),
            };
        } else if (
            req.files.moreInfo != undefined &&
            req.files.image == undefined
        ) {
            for (let i of req.files.moreInfo) {
                dd.push(`${i.path}`);
            }
            pdata = {
                ProductName: data.ProductName,
                ProductCategory: data.ProductCategory,
                Rating: parseFloat(data.Rating),
                ProductType: data.ProductType,

                featured: data.featured,
                moreInfo: dd,
                Spec: data.Spec,
                ProductPrice: parseInt(data.ProductPrice),
                Qty: parseInt(data.Qty),
            };
        } else if (
            req.files.moreInfo == undefined &&
            req.files.image != undefined
        ) {
            pdata = {
                ProductName: data.ProductName,
                ProductCategory: data.ProductCategory,
                Rating: parseFloat(data.Rating),
                ProductType: data.ProductType,

                featured: data.featured,
                image: `${req.files.image[0].path}`,
                Spec: data.Spec,
                ProductPrice: parseInt(data.ProductPrice),
                Qty: parseInt(data.Qty),
            };
        } else if (
            req.files.moreInfo != undefined &&
            req.files.image != undefined
        ) {
            for (let i of req.files.moreInfo) {
                dd.push(`${i.path}`);
            }
            pdata = {
                ProductName: data.ProductName,
                ProductCategory: data.ProductCategory,
                Rating: parseFloat(data.Rating),
                ProductType: data.ProductType,
                image: `${req.files.image[0].path}`,
                featured: data.featured,
                moreInfo: dd,
                Spec: data.Spec,
                ProductPrice: parseInt(data.ProductPrice),
                Qty: parseInt(data.Qty),
            };
        }

        const productObject = new ProductModel(pdata);
        const { error, value } = productObject.joivalidate(pdata);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await ProductModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: pdata,
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
