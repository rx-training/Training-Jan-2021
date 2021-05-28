import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:3001/" ;

class StudentService {
    
    getStudent(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL , student);
    } 

    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + 'show-details/' + studentId);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + 'delete-student/' + studentId )
    }

    editStudent(studentId , student){
        return axios.put(STUDENT_API_BASE_URL + 'edit-student/'+ studentId , student)
    }
}


export default new StudentService()