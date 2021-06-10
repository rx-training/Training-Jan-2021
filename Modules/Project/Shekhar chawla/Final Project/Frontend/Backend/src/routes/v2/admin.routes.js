const router = require('express').Router({ mergeParams: true })
const multer = require('multer')

const { listCars, createCar, getCar, updateCar, deleteCar } = require('../../controllers/v2/car.controller')
const { createMake, listMakes, getMake, updateMake, deleteMake } = require('../../controllers/v2/make.controller')

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname === 'makeImage') {
      callback(null, `./uploads/brands`)
    } else {
      callback(null, `./uploads/cars`)
    }
  },
  filename: function (req, file, callback) {
    if (file.fieldname === 'makeImage') {
      callback(null, req.body.makeName + '-' + Date.now() + '-' + file.originalname)
    } else {
      callback(null, req.body.makeName + '-' + req.body.modelName + '-' + Date.now() + '-' + file.originalname)
    }
  }
})

var upload = multer({ storage: storage })





router.get('/cars', listCars)
router.get('/cars/:carname', getCar)
router.post('/cars/create', upload.any(), createCar)
router.put('/cars/update/:carname', updateCar)
router.delete('/cars/delete/:carname', deleteCar)


router.get('/make', listMakes)
router.get('/make/:makename', getMake)
router.post('/make/create', upload.any(), createMake)
router.put('/make/update/:makename', upload.any(), updateMake)
router.delete('/make/delete/:makename', deleteMake)

module.exports = router