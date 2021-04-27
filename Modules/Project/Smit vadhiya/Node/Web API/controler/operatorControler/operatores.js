const express = require('express')
const router = express.Router({mergeParams: true})
const OperatoreDomain = require('../../domain/operatorDomain')
const busChild = require('./buses/muBus')
const mainrouteChild = require('./mainRoute/mainRoute')

class Operators{
    static async getById(req,res){
        OperatoreDomain.getOperatorById(req,res)
    }

    static async putBuId(req,res){
        OperatoreDomain.putOperatorById(req,res)
    }
}

router.get('/',Operators.getById)

router.put('/',Operators.putBuId)//UPDATE OPERARTOR BY ID

router.use('/mybuses',busChild)//OPERATIONS ON BUS OF OPERATOR
router.use('/myroute',mainrouteChild)

module.exports = router
