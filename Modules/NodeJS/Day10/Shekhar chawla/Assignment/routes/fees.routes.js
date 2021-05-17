const express = require('express')
const router = express.Router({ mergeParams:true})

const { getFees, getFee, createFee, updateFee, deleteFee } = require('../controllers/fees.controller')

router.get('/', getFees)
router.get('/:fid', getFee)			
router.post('/', createFee)
router.put('/:fid', updateFee)
router.delete('/:fid', deleteFee)



module.exports = router