import axios from 'axios'

//const BASE_URL = 'http://20.198.103.48:98/api/operator/'
const BASE_URL = 'http://localhost:80/api/operator/'

class Operators {

   operatorLogin(data){
      return axios.post(BASE_URL+'login',data)
   }

   getById(id,token){
      return axios.get(BASE_URL+id,token)
   }

   getRouteById(id,token){
      return axios.get(BASE_URL+id+'/myroute',token)
   }
}

export default new Operators()