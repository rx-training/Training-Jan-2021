const { Product, validateProduct } = require("../models/product.model");
const Joi = require("joi");
const { Order } = require("../models/order.model");

class ProductDomain {
  // add product
  async addProduct(req, res) {
    let imgurls = [];

    for (let i of req.files) {
      imgurls.push(`${i.path}`);
    }

    const { error } = validateProduct(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    try {
      const product = new Product({
        productName: req.body.productName,
        brand: req.body.brand,
        category: req.body.category,
        mainCategory: req.body.mainCategory,
        details: req.body.details,
        price: req.body.price,
        returnable: req.body.returnable,
        pincodes: req.body.pincodes,
        sizes: req.body.sizes,
        imgurls: imgurls,
        offer: req.body.offer,
      });

      await product.save();

      res.send(product);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all products
  async getAllProducts(req, res) {
    const products = await Product.find()
      .populate("brand", "brandName")
      .populate("category", "categoryName")
      .populate("mainCategory", "mainCategoryName");
    res.send(products);
  }

  // get product by id
  async getProductById(req, res) {
    const productId = req.params.productId;

    const { error } = Joi.validate(productId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const product = await Product.findById(productId)
      .populate("brand", "brandName")
      .populate("category", "categoryName")
      .populate("mainCategory", "mainCategoryName");

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send(product);
  }

  // update product
  async updateProduct(req, res) {
    const productId = req.params.productId;

    var { error } = Joi.validate(productId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // var { error } = validateProduct(req.body);

    // if (error) {
    //   return res.status(400).send(error.details[0].message);
    // }

    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).send("Product not found");
    }

    try {
      product.set({
        productName: req.body.productName,
        brand: req.body.brand,
        category: req.body.category,
        mainCategory: req.body.mainCategory,
        details: req.body.details,
        price: req.body.price,
        returnable: req.body.returnable,
        pincodes: req.body.pincodes,
        sizes: req.body.sizes,
        imgurls: req.body.imgurls,
        offer: req.body.offer,
      });

      await product.save();

      res.send(product);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete product
  async deleteProduct(req, res) {
    const productId = req.params.productId;

    var { error } = Joi.validate(productId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const isUsed = await Order.findOne({ "products.product": productId });

    if (isUsed) {
      return res.status(409).send("Product is not allowed to delete");
    }

    const result = await Product.deleteOne({ _id: productId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Product not found");
    } else {
      return res.send("Product deleted successfully");
    }
  }

  // update images
  async updateImages(req, res) {
    const imgurls = req.body.imgurls;

    const productId = req.params.productId;

    var { error } = Joi.validate(productId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    var { error } = Joi.validate(imgurls, Joi.array().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let result = await Product.updateOne(
      { _id: productId },
      { $set: { imgurls: imgurls } }
    );

    res.send(result);
  }

  // add images
  async addImages(req, res) {
    const productId = req.params.productId;

    var { error } = Joi.validate(productId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let newImgurls = [];

    for (let i of req.files) {
      newImgurls.push(`${i.path}`);
    }

    res.send(newImgurls);
  }
}

module.exports = ProductDomain;
