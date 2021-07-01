const mongoose = require('mongoose')
const fs = require('fs')
const Car = require('../../models/v2/Car')


listCars = async (req, res) => {

  await Car.find({}, (err, data) => {
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json(data)
  })
}


getCar = async (req, res) => {

  await Car.findOne({ modelMaskingName: req.params.carname }, (err, data) => {
    if (!data) {
      return res.status(500).send('data not found')
    }
    res.status(200).json(data)
  })
}


createCar = async (req, res) => {
  const carImage = req.files.find(i => i.fieldname === 'carImage')

  var car = new Car(req.body)
  if (req.files.length > 0) {
    car.carImage = fs.readFileSync(carImage.path),
      car.carImageContentType = carImage.mimetype

  }

  await Car.create(car, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json({ msg: "data created", data: data })
  })

}

updateCar = async (req, res) => {
  var newCar = req.body

  if (req.files.length > 0) {
    newCar.carImage = fs.readFileSync(carImage.path),
    newCar.carImageContentType = carImage.mimetype
  }

  await Car.findOneAndUpdate({ modelMaskingName: req.params.carname }, newCar, { new: true }, (err, data) => {
    if (err) return res.status(500).send('Error updating data' + err)
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json({ msg: "data updated", updatedData: data })
  })
}


deleteCar = async (req, res) => {

  await Car.findOneAndDelete({ modelMaskingName: req.params.carname }, (err, data) => {
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json({ msg: "data deleted", deletedData: data })
  })
}




module.exports = {
  listCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
}





