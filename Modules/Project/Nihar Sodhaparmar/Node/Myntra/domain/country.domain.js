const { Country, validateCountry } = require("../models/country.model");
const Joi = require('joi');

class CountryDomain {

    // add country
    async addCountry(req, res) {

        const { error } = validateCountry(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        try {
            const country = new Country({
                countryName: req.body.countryName
            });

            await country.save();

            res.send(country);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all countries
    async getAllCountries(req, res){
        const countries = await Country.find().select('countryName');
        res.send(countries);
    }

    // get country by id
    async getCountryById(req, res) {

        const countryId = req.params.countryId;

        var { error } = Joi.validate(countryId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const country = await Country.findById(countryId).select('countryName');

        if (!country) {
            return res.status(404).send('Country not found');
        }

        res.send(country);
    }

    // update country
    async updateCountry(req, res) {

        const countryId = req.params.countryId;

        var { error } = Joi.validate(countryId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        var { error } = validateCountry(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const country = await Country.findById(countryId);

        if (!country) {
            return res.status(404).send('Country not found');
        }

        try {
            country.set({
                countryName: req.body.countryName
            });

            await country.save();

            res.send(country);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // delete country
    async deleteCountry(req, res){

        const countryId = req.params.countryId;

        var { error } = Joi.validate(countryId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const result = await Country.deleteOne({ _id: countryId });

        if(result.deletedCount == 0){
            return res.status(404).send('Country not found');
        }
        else{
            return res.send('Country deleted successfully');
        }
    }

}

module.exports = CountryDomain;