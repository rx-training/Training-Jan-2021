import axios from 'axios'

//const BASE_URL = 'http://20.198.103.48:98/api/user/'
const BASE_URL = 'http://localhost:80/api/user/'

class MyBuses {

   searchBuses(id,data,header){
      return axios.put(BASE_URL+id+'/search',data,header)
   }

}

export default new MyBuses()