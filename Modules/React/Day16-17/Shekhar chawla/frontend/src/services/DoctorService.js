import axios from 'axios'

const DOCTOR_BASE_URL = 'http://localhost:3001/doctors'

class DoctorService {

  getDoctors(){
    return axios.get( DOCTOR_BASE_URL )
  }

  getDoctor( id ){
    return axios.get( DOCTOR_BASE_URL+'/'+id )
  }

  createDoctor( doctor ){
    return axios.post( DOCTOR_BASE_URL, doctor )
  }

  updateDoctor( id, doctor ){
    return axios.put( DOCTOR_BASE_URL+'/'+id, doctor )
  }

  deleteDoctor( id ){
    return axios.delete( DOCTOR_BASE_URL+'/'+id )
  }
}

export default new DoctorService()