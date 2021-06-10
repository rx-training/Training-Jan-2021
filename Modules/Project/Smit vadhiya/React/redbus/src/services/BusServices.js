import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/user/'

class MyBuses {

   searchBuses(id,data,header){
      return axios.put(BASE_URL+id+'/search',data,header)
   }

}

export default new MyBuses()