const express = require('express')
const router = express.Router({ mergeParams: true})
const multer = require('multer')


const { getAll, getOne, createOne, updateOne, deleteOne} = require('../../controllers/mycontrollers/mycontroller')

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads/student_photos')
  },
  filename: function(req, file, callback) {
    callback(null, req.body.firstName+'-'+Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage : storage })

router.get('/', getAll)					
router.get('/:id', getOne)					
router.post('/', upload.single('photo1'), createOne)
router.put('/:id',upload.single('photo1'), updateOne)
router.delete('/:id', deleteOne)



module.exports = router