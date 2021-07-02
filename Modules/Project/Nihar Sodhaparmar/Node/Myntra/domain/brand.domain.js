const { Brand, validateBrand } = require("../models/brand.model");
const Joi = require("joi");
const { Product } = require("../models/product.model");

class BrandDomain {
  // add brand
  async addBrand(req, res) {
    const { error } = validateBrand(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    try {
      const brand = new Brand({
        mainCategory: req.body.mainCategory,
        category: req.body.category,
        brandName: req.body.brandName,
      });

      await brand.save();

      res.send(brand);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all brands
  async getAllBrands(req, res) {
    const brands = await Brand.find()
      .populate("mainCategory")
      .populate("category");
    res.send(brands);
  }

  // get brand by id
  async getBrandById(req, res) {
    const brandId = req.params.brandId;

    var { error } = Joi.validate(brandId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const brand = await Brand.findById(brandId)
      .populate("mainCategory")
      .populate("category");

    if (!brand) {
      return res.status(404).send("Brand not found");
    }

    res.send(brand);
  }

  // update brand
  async updateBrand(req, res) {
    const brandId = req.params.brandId;

    var { error } = Joi.validate(brandId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateBrand(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const brand = await Brand.findById(brandId);

    if (!brand) {
      return res.status(404).send("Brand not found");
    }

    try {
      brand.set({
        mainCategory: req.body.mainCategory,
        category: req.body.category,
        brandName: req.body.brandName,
      });

      await brand.save();

      res.send(brand);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete brand
  async deleteBrand(req, res) {
    const brandId = req.params.brandId;

    var { error } = Joi.validate(brandId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const isUsed = await Product.findOne({ brand: brandId });

    if (isUsed) {
      return res.status(409).send("Brand is not allowed to delete");
    }

    const result = await Brand.deleteOne({ _id: brandId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Brand not found");
    } else {
      return res.send("Brand deleted successfully");
    }
  }
}

module.exports = BrandDomain;
