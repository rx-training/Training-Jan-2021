const mongoose = require('mongoose')
const fs = require('fs')

const Patient = require('../../models/patient')
const Assistant = require('../../models/assistant')
const Doctor = require('../../models/doctor')
const Medicine = require('../../models/medicine')
const Department = require('../../models/department')
const Student = require('../../models/College/Student')

function getModel(apiName) {
  switch (apiName) {
    case 'patients':
      return Patient
      break
    case 'doctors':
      return Doctor
      break
    case 'assistants':
      return Assistant
      break
    case 'medicines':
      return Medicine
      break
    case 'departments':
      return Department
      break
    case 'students':
      return Student
      break
    default:
      return null
  }
}



getAll = async (req, res) => {

  var Model = getModel(req.params.apiName)
  if (!Model) {
    return res.status(404).send('Invalid api')
  }

  await Model.find({}, (err, data) => {
    if (!data) {
      return res.status(500).send('data not found')
    }
    res.status(200).json(data)
  })
}

getOne = async (req, res) => {

  var Model = getModel(req.params.apiName)
  if (!Model) {
    return res.status(404).send('Invalid api')
  }

  await Model.findOne({ id: req.params.id }, (err, data) => {
    if (!data) {
      return res.status(500).send('data not found')
    }

    res.status(200).json(data)
  })
}

createOne = async (req, res) => {

  var Model = getModel(req.params.apiName)
  if (!Model) {
    return res.status(404).send('Invalid api')
  }
  var newData = new Model(req.body)
  if (req.file) {
    newData.photo = {
        data : fs.readFileSync(req.file.path),
        contentType : req.file.mimetype
      }
  }

  await Model.create(newData, (err, data) => {
  if (err) {
    console.log(err)
    return res.status(500).json({ msg: "Something went wrong", error: err })
  }
  res.status(200).json({ msg: "data created", Data: data })
  })
}

updateOne = async (req, res) => {

  var Model = getModel(req.params.apiName)
  if (!Model) {
    return res.status(404).send('Invalid api')
  }
  var newData = req.body

  if (req.file) {
    newData.photo = {
        data : fs.readFileSync(req.file.path),
        contentType : req.file.mimetype
      }
  } 
  console.log(newData)
  await Model.findOneAndUpdate({ id: req.params.id }, newData, { new: true }, (err, data) => {
    if (err) return res.status(500).send('Error updating data' + err)
    if (!data) {
      return res.status(500).send('data not found')
    }
    res.status(200).json({ msg: "data updated", updatedData: data })
  })
}

deleteOne = async (req, res) => {

  var Model = getModel(req.params.apiName)
  if (!Model) {
    return res.status(404).send('Invalid api')
  }

  await Model.findOneAndDelete({ id: req.params.id }, (err, data) => {
    if (!data) {
      return res.status(500).send('data not found')
    }
    res.status(200).json({ msg: "data deleted", deletedData: data })
  })
}



module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}




const car = {
  images: ["60ae5efbc504834ee052c845"],
  videos: ["60ae616268c7924860d41a67"],
  brand: "60ae5f6c0f3c3c3c082389fd",
  name: 'Vector',
  version: 'v1',
  fuel: 'petrol',
  transmission: 'auto',
  mileage: 17,
  city: 'Mumbai',
  price: 12121212,
  reviews: ["60ae6009a77fbf01b416deee"],
  rating: ["60ae5fc3c2d95a30989da10a"],
}






/*
const m1 = new Image({
  id: new mongoose.Types.ObjectId,            // 60ae5efbc504834ee052c845
  type: 'exterior',
  name: 'right view',
  clickedBy: 'mohan',
  path: ''
})
const b1 = new Brand({                        // 60ae5f6c0f3c3c3c082389fd
  _id: new mongoose.Types.ObjectId,
  name: 'Hyundai',
  cars: ["60ae5e69449a2003700a9337"],
  contactNumber: 123456789
})
const r1 = new Rating({                        // 60ae5fc3c2d95a30989da10a
  category: 'comfort',
  name: 'mohan ka dost',
  star: 5
})
const rr1 = new Review({                        // 60ae6009a77fbf01b416deee
  title: 'Reviewing all sides of car ',
  person: 'Mohan ka manager'
})
const v1 = new Video({                          // 60ae616268c7924860d41a67
  name: 'Hyundai video',
  clickedBy: 'Mohan ka camera man',
  path: ''
})
const c1 = new Car({
  _id: new mongoose.Types.ObjectId,                   // 60ae5e69449a2003700a9337
  images : ["60ae5efbc504834ee052c845"],
  videos : ["60ae616268c7924860d41a67"],
  brand : "60ae5f6c0f3c3c3c082389fd",
  name: 'Vector',
  version: 'v1',
  fuel: 'petrol',
  transmission: 'auto',
  mileage: 17,
  city: 'Mumbai',
  price: 12121212,
  reviews : ["60ae6009a77fbf01b416deee"],
  rating : ["60ae5fc3c2d95a30989da10a"],
})
*/
// c1.save( (err, c) => {
//   console.log(c)
// })