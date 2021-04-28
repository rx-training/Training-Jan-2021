const express = require('express')
const router = express.Router({mergeParams: true})
const OperatoreDomain = require('../../../domain/operatorDomain')

class mainRoute{
    static async getMyRoute(req,res){
        OperatoreDomain.findMyRoute(req,res)
    }

    static async postNewRoute(req,res){
        OperatoreDomain.postNewRoute(req,res)
    }
}

router.post('/',mainRoute.postNewRoute)

router.get('/',mainRoute.getMyRoute)


module.exports = router