const mongoose = require('mongoose')
const fs = require('fs')
const Make = require('../../models/v2/Make')


listMakes = async (req, res) => {

  await Make.find({}, (err, data) => {
    if (!data) {
      return res.status(500).send('data not found')
    }
    res.status(200).json(data)
  })
}


getMake = async (req, res) => {

  await Make.findOne({ makeMaskingName: req.params.makename }, (err, data) => {
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }

    res.status(200).json(data)
  })
}

createMake = async (req, res) => {
  const makeImage = req.files.find(i => i.fieldname === 'makeImage')

  var make = new Make(req.body)
  
  if (req.files.length > 0) {
    make.makeImage = fs.readFileSync(makeImage.path)
    make.makeImageContentType= makeImage.mimetype
  }
  await Make.create(make, (err, data) => {
  if (err) {
    console.log(err)
    return res.status(500).json({ msg: "Something went wrong", error: err })
  }
  res.status(200).json({ msg: "data created", data : data })
  })

}

updateMake = async (req, res) => {
  const makeImage = req.files.find( i => i.fieldname === 'makeImage')

  var newMake = req.body

  if (req.files.length > 0) {
    newMake.makeImage = fs.readFileSync(makeImage.path)
    newMake.makeImageContentType = makeImage.mimetype
  }
  console.log(newMake)
  
  await Make.findOneAndUpdate({ makeMaskingName: req.params.makename }, newMake, { new: true }, (err, data) => {
    if (err) return res.status(500).send('Error updating data' + err)
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json({ msg: "data updated", updatedData: newMake })
  })
}


deleteMake = async (req, res) => {


  await Make.findOneAndDelete({ makeMaskingName: req.params.makeName }, (err, data) => {
    if (!data) {
      return res.status(500).json({ msg: "Something went wrong", error: err })
    }
    res.status(200).json({ msg: "data deleted", deletedData: data })
  })
}




module.exports = {
  listMakes,
  getMake,
  createMake,
  updateMake,
  deleteMake
}





