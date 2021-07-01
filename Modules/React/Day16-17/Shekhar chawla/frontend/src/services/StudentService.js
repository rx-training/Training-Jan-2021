import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

class MyService {

  getAll( apiName ){
    return axios.get( API_BASE_URL+'/'+apiName )            
  }
  
  getOne( apiName, id ){
    return axios.get( API_BASE_URL+'/'+apiName+'/'+id )      // like: http://localhost:3001/students/0
  }

  createOne( apiName, data ){
    return axios.post( API_BASE_URL+'/'+apiName, data )            
  }

  updateOne( apiName, id, data ){
    return axios.put( API_BASE_URL+'/'+apiName+'/'+id, data )            
  }

  deleteOne( apiName, id ){
    return axios.delete( API_BASE_URL+'/'+apiName+'/'+id )     
  }
}

export default new MyService()
