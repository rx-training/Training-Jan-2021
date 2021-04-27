const express = require('express')
const router = express.Router({mergeParams: true})
const OperatorDomain = require('../../../domain/operatorDomain')

class Buses {
    static async getMyBus(req,res){
        OperatorDomain.getBusOfOperatores(req,res)
    }
    static async postNewBus(req,res){
        OperatorDomain.postNewBus(req,res)
    }
    static async updateMuBus(req,res){
        OperatorDomain.putBusById(req,res)
        //console.log("hello");
    }
}

router.get('/',Buses.getMyBus)//GET OPERATOR'S ALL BUSES

router.post('/addbus',Buses.postNewBus)//GET OPERATOR'S ALL BUSES

router.put('/:busid/update',Buses.updateMuBus)//UPDATE BUS

module.exports = router