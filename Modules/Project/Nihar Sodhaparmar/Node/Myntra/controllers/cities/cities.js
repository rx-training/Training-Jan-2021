const express = require("express");
const router = express.Router();
const CityDomain = require("../../domain/city.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class CitiesController {
  // add city
  static async addCity(req, res) {
    const cityDomain = new CityDomain();
    cityDomain.addCity(req, res);
  }

  // get all cities
  static async getAllCities(req, res) {
    const cityDomain = new CityDomain();
    cityDomain.getAllCities(req, res);
  }

  // get city by id
  static async getCityById(req, res) {
    const cityDomain = new CityDomain();
    cityDomain.getCityById(req, res);
  }

  // update city
  static async updateCity(req, res) {
    const cityDomain = new CityDomain();
    cityDomain.updateCity(req, res);
  }

  // delete city
  static async deleteCity(req, res) {
    const cityDomain = new CityDomain();
    cityDomain.deleteCity(req, res);
  }
}

// add city
router.post("/", [auth, sellerAuth], CitiesController.addCity);
// get all cities
router.get("/", CitiesController.getAllCities);
// get city by id
router.get("/:cityId", CitiesController.getCityById);
// update city
router.put("/:cityId", [auth, sellerAuth], CitiesController.updateCity);
// delete city
router.delete("/:cityId", [auth, sellerAuth], CitiesController.deleteCity);

module.exports = router;
