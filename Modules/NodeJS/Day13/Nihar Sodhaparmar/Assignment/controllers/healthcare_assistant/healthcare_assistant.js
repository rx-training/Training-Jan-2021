const express = require('express');
const router = express();
const HealthcareAssistantDomain = require('../../domain/healthcare_assistant.domain');

class HealthcareAssistantsController{

    // add healthcare assistant
    static async addHealthcareAssistant(req, res){
        const healthcareAssistantDomain = new HealthcareAssistantDomain();
        healthcareAssistantDomain.addHealthcareAssistant(req, res);
    }

    // get all healthcare assistants
    static async getAllHealthcareAssistants(req, res){
        const healthcareAssistantDomain = new HealthcareAssistantDomain();
        healthcareAssistantDomain.getAllHealthcareAssistants(req, res);
    }
}

// add healthcare assistant
router.post('/', HealthcareAssistantsController.addHealthcareAssistant);

// get all healthcare assistants
router.get('/', HealthcareAssistantsController.getAllHealthcareAssistants);

module.exports = router;