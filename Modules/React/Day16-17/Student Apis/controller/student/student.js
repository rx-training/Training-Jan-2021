const express = require('express')
const StudentModel = require('../../model/StudentModel')
const Counter = require('../../model/counter')
const router = express.Router()

async function incId(collection){
      var data = await Counter.findOneAndUpdate(
         {_id : collection},
         {$inc : {count:1}},
         {useFindAndModify : false}
      )

      if(!data){
         const newData = new Counter({
               _id : collection,
               count : 2
         })
         data = await newData.save()
         return 1;
      }
      return await data.count
   }


class Students{
   static async getAllStudents(req,res){
      const myData = await StudentModel.find().select("-__v ")
      res.send(myData)
   }
   static async getStudentById(req,res){
      const id = parseInt(req.params.id)
      const myData = await StudentModel.findById(id).select("-__v")
      res.send(myData)
   }
   static async postStudent(req,res){
      var myData =  req.body
      myData._id = await incId('students')
      const addData = new StudentModel(myData)
      const result = await addData.save()
      res.send(result)
   }
   static async putStudent(req,res){
      const id = parseInt(req.params.id)
      const updatedData = req.body
      const myData = await StudentModel.findById(id)
      for(var i in updatedData){
         myData[i] = updatedData[i]
      }
      const result = await myData.save()
      res.send(result)
   }
   static async deleteStudents(req,res){
      const id = parseInt(req.params.id)
      const myData = await StudentModel.findOneAndDelete({_id : id})
      res.send(myData)
   }

   
}






router.get('/', Students.getAllStudents)

router.get('/:id', Students.getStudentById)

router.post('/',Students.postStudent )

router.delete('/:id', Students.deleteStudents);

router.put('/:id', Students.putStudent)



module.exports = router