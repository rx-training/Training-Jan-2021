const express = require("express");
const router = express.Router();
const CountryDomain = require("../../domain/country.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class CountriesController {
  // add country
  static async addCountry(req, res) {
    const countryDomain = new CountryDomain();
    countryDomain.addCountry(req, res);
  }

  // get all countries
  static async getAllCountries(req, res) {
    const countryDomain = new CountryDomain();
    countryDomain.getAllCountries(req, res);
  }

  // get country by id
  static async getCountryById(req, res) {
    const countryDomain = new CountryDomain();
    countryDomain.getCountryById(req, res);
  }

  // update country
  static async updateCountry(req, res) {
    const countryDomain = new CountryDomain();
    countryDomain.updateCountry(req, res);
  }

  // delete country
  static async deleteCountry(req, res) {
    const countryDomain = new CountryDomain();
    countryDomain.deleteCountry(req, res);
  }
}

// add country
router.post("/", [auth, sellerAuth], CountriesController.addCountry);
// get all countries
router.get("/", CountriesController.getAllCountries);
// get country by id
router.get("/:countryId", CountriesController.getCountryById);
// update country
router.put(
  "/:countryId",
  [auth, sellerAuth],
  CountriesController.updateCountry
);
// delete country
router.delete(
  "/:countryId",
  [auth, sellerAuth],
  CountriesController.deleteCountry
);

module.exports = router;
