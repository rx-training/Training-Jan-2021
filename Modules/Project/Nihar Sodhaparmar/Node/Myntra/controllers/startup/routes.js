const brandRouter = require("../brands/brands");
const categoryRouter = require("../categories/categories");
const productRouter = require("../products/products");
const countryRouter = require("../countries/countries");
const stateRouter = require("../states/states");
const cityRouter = require("../cities/cities");
const sellerRouter = require("../sellers/sellers");
const customerRouter = require("../customers/customers");
const orderRouter = require("../orders/orders");
const loginRouter = require("../core/authentication");
const wishlistRouter = require("../wishlist/wishlist");
const bagRouter = require("../bag/bag");
const otpRouter = require("../otp/otp");
const verifyRouter = require("../core/verify");
const mainCategoryRouter = require("../main-categories/main-categories");
const categoriesToBagRouter = require("../categories-to-bag/categories-to-bag");

const error = require("../../middleware/error");

module.exports = function (router) {
  router.use("/brands", brandRouter);
  router.use("/categories", categoryRouter);
  router.use("/products", productRouter);
  router.use("/countries", countryRouter);
  router.use("/states", stateRouter);
  router.use("/cities", cityRouter);
  router.use("/sellers", sellerRouter);
  router.use("/customers", customerRouter);
  router.use("/orders", orderRouter);
  router.use("/login", loginRouter);
  router.use("/otp", otpRouter);
  router.use("/verify", verifyRouter);
  router.use("/wishlist", wishlistRouter);
  router.use("/bag", bagRouter);
  router.use("/main-categories", mainCategoryRouter);
  router.use("/categories-to-bag", categoriesToBagRouter);

  router.use(error);
};
