const { State, validateState } = require("../models/state.model");
const Joi = require('joi');

class StateDomain {

    // add state
    async addState(req, res) {

        const { error } = validateState(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        try {
            const state = new State({
                stateName: req.body.stateName,
                country: req.body.country
            });

            await state.save();

            res.send(state);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all states
    async getAllStates(req, res){
        const states = await State.find().populate('country', 'countryName').select('stateName');
        res.send(states);
    }

    // get state by id
    async getStateById(req, res) {

        const stateId = req.params.stateId;

        var { error } = Joi.validate(stateId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const state = await State.findById(stateId).populate('country', 'countryName').select('stateName');

        if (!state) {
            return res.status(404).send('State not found');
        }

        res.send(state);
    }

    // update state
    async updateState(req, res) {

        const stateId = req.params.stateId;

        var { error } = Joi.validate(stateId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        var { error } = validateState(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const state = await State.findById(stateId);

        if (!state) {
            return res.status(404).send('State not found');
        }

        try {
            state.set({
                stateName: req.body.stateName,
                country: req.body.country
            });

            await state.save();

            res.send(state);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // delete state
    async deleteState(req, res){

        const stateId = req.params.stateId;

        var { error } = Joi.validate(stateId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const result = await State.deleteOne({ _id: stateId });

        if(result.deletedCount == 0){
            return res.status(404).send('State not found');
        }
        else{
            return res.send('State deleted successfully');
        }
    }

}

module.exports = StateDomain;