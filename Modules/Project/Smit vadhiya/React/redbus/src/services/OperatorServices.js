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

   getBusesById(id,token){
      return axios.get(BASE_URL+id+'/mybus',token)
   }

   addNewBus(id,body,token){
      return axios.post(BASE_URL+id+'/mybus/add',body,token)
   }

   updateBus(id,busId,body,token){
      return axios.put(BASE_URL+id+'/mybus/'+busId+'/update',body,token)
   }
}

export default new Operators()