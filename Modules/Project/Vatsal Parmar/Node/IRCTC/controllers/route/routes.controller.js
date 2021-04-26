var express = require("express");
const RouteDomain = require("../../domains/routes.domain");
var router = express.Router();

class RouteController {
  //To get all routes
  static async get(req, res) {
    const routeDomain = new RouteDomain();
    routeDomain.getAllRoutes(req, res);
  }
  //to get route
  static async getRoute(req, res) {
    const routeDomain = new RouteDomain();
    routeDomain.getRoute(req, res);
  }
  //To insert route
  static async insertRoute(req, res) {
    const routeDomain = new RouteDomain();
    routeDomain.insertRoute(req, res);
  }
  //To update route
  static async updateRoute(req, res) {
    const routeDomain = new RouteDomain();
    routeDomain.updateRoute(req, res);
  }
  //To delete route
  static async deleteRoute(req, res) {
    const routeDomain = new RouteDomain();
    routeDomain.deleteRoute(req, res);
  }
}

//To insert route
router.post("/", RouteController.insertRoute);
//To get all routes
router.get("/", RouteController.get);
//To get an single route by id
router.get("/:routeId", RouteController.getRoute);
//To update route
router.put("/:routeId", RouteController.updateRoute);
//To delete a route
router.delete("/:routeId", RouteController.deleteRoute);

module.exports = router;
