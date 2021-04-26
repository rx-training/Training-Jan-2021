const { HealthcareAssistant, validate } = require('../models/healthcare_assistant.model');

class HealthcareAssistantDomain {

    // add healthcare assistant
    async addHealthcareAssistant(req, res) {

        const { error } = validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {
            const healthcareAssistant = new HealthcareAssistant({
                name: req.body.name,
                phone: req.body.phone,
                department: req.body.department
            });

            await healthcareAssistant.save();

            res.send(healthcareAssistant);
        }
        catch (e) {
            res.status(500).send(e);
        }

    }

    // get all healthcare assistants
    async getAllHealthcareAssistants(req, res){
        const healthcareAssistants = await HealthcareAssistant.find().populate('department', 'name -_id').select('name phone');
        res.send(healthcareAssistants);
    }
}

module.exports = HealthcareAssistantDomain;