const express = require('express')
const router = express.Router({ mergeParams: true})

const { getAll, getOne, createOne, updateOne, deleteOne} = require('../../controllers/mycontrollers/mycontroller')

router.get('/', getAll)					
router.get('/:id', getOne)					
router.post('/', createOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)



module.exports = router