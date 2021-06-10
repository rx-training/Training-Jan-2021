const router = require('express').Router( {mergeParams: true})

const { getPopularCars } = require('../../controllers/v2/other.controller')

router.get('/get-popular-cars', getPopularCars)



module.exports = router