const RouteModel = require("../models/routes.model");

class RouteDomain {
  //To get all routes
  async getAllRoutes(req, res) {
    const routes = await RouteModel.find()
      .populate("train", "train_name")
      .populate("station", "station_name")
      .sort({ train: 1 });
    res.send(routes);
  }
  //To get route
  async getRoute(req, res) {
    let id = req.params.routeId;
    const route = await RouteModel.findById(id)
      .populate("train", "train_name")
      .populate("station", "station_name");
    if (route) {
      res.send(route);
    } else {
      res.status(404).send("Route Not Found");
    }
  }
  //To insert route
  async insertRoute(req, res) {
    //getting user input
    let data = req.body;

    const route = new RouteModel(data);
    const { error, value } = route.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await route.save();
        if (result) {
          res.send("success");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a route
  async deleteRoute(req, res) {
    let id = req.params.routeId;
    const route = await RouteModel.findByIdAndDelete(id);
    if (route) {
      res.send("success");
    } else {
      res.status(404).send("Route Not Found");
    }
  }
  //To update a route
  async updateRoute(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.routeId;

    const route = new RouteModel(data);
    const { error, value } = route.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await RouteModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send("success");
        } else {
          res.status(404).send("Route Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = RouteDomain;
