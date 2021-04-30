const { City, validateCity } = require('../models/city.model');
const Joi = require('joi');

class CityDomain {

    // add city
    async addCity(req, res) {

        const { error } = validateCity(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        try {
            const city = new City({
                cityName: req.body.cityName,
                state: req.body.state
            });

            await city.save();

            res.send(city);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all cities
    async getAllCities(req, res) {
        const cities = await City.find().populate({
            path: 'state',
            model: 'states',
            select: 'stateName',
            populate: {
                path: 'country',
                model: 'countries',
                select: 'countryName'
            }
        }).select('cityName');
        res.send(cities);
    }

    // get city by id
    async getCityById(req, res) {

        const cityId = req.params.cityId;

        var { error } = Joi.validate(cityId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const city = await City.findById(cityId).populate({
            path: 'state',
            model: 'states',
            select: 'stateName',
            populate: {
                path: 'country',
                model: 'countries',
                select: 'countryName'
            }
        }).select('cityName');

        if (!city) {
            return res.status(404).send('City not found');
        }

        res.send(city);
    }

    // update city
    async updateCity(req, res) {

        const cityId = req.params.cityId;

        var { error } = Joi.validate(cityId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        var { error } = validateCity(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const city = await City.findById(cityId);

        if (!city) {
            return res.status(404).send('City not found');
        }

        try {
            city.set({
                cityName: req.body.cityName,
                state: req.body.state
            });

            await city.save();

            res.send(city);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // delete city
    async deleteCity(req, res){

        const cityId = req.params.cityId;

        var { error } = Joi.validate(cityId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const result = await City.deleteOne({ _id: cityId });

        if(result.deletedCount == 0){
            return res.status(404).send('City not found');
        }
        else{
            return res.send('City deleted successfully');
        }
    }

}

module.exports = CityDomain;