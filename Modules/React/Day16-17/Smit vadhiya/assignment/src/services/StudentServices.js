import axios from 'axios'

const STUDENT_API_BASE_URL = 'http://localhost:3000/student'

class StudentServices{

   getStudents(){
      return axios.get(STUDENT_API_BASE_URL)
   }

   getStudentById(id){
      return axios.get(STUDENT_API_BASE_URL+'/'+id)
   }

   addStudent(data){
      return axios.post(STUDENT_API_BASE_URL,data)
   }

   updateStudent(id,data){
      return axios.put(STUDENT_API_BASE_URL+'/'+id,data)
   }

   deleteStudent(id){
      return axios.delete(STUDENT_API_BASE_URL+'/'+id)
   }
}

export default new StudentServices()