import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:9000/student";

class StudentService {
    getStudentData() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    insertStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentDataFromId(id) {
        return axios.get(STUDENT_API_BASE_URL + "/" + id);
    }

    updateStudent(student, id) {
        return axios.put(STUDENT_API_BASE_URL + "/" + id, student);
    }

    deleteStudent(id) {
        return axios.delete(STUDENT_API_BASE_URL + "/" + id);
    }
}

export default new StudentService();
