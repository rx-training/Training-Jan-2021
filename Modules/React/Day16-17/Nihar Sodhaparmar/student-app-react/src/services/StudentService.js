import axios from "axios";

const STUDENT_API_BASE_URL = " http://localhost:3000/students";

class StudentService {
  addStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, { ...student });
  }

  getAllStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  getStudentById(studentId) {
    return axios.get(STUDENT_API_BASE_URL + "/" + studentId);
  }

  updateStudent(studentId, student) {
    return axios.put(STUDENT_API_BASE_URL + "/" + studentId, { ...student });
  }

  deleteStudent(studentId) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + studentId);
  }
}

export default new StudentService();
