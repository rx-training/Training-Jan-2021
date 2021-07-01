const express = require('express')
const router = express.Router({ mergeParams:true})

const { getResults, getResult, createResult, updateResult, deleteResult } = require('../controllers/result.controller')

router.get('/', getResults)
router.get('/:rid', getResult)			
router.post('/', createResult)
router.put('/:rid', updateResult)
router.delete('/:rid', deleteResult)



module.exports = router