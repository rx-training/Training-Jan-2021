import axios from 'axios'

const BASE_URL = 'http://localhost:80/api/admin/'

class AdminServices {
   adminLogin(data){
      return axios.post(BASE_URL+'login',data)
   }

   adminGetAllUser(header){
      return axios.get(BASE_URL+'user/all',header)
   }

   adminGetOperators(header){
      return axios.get(BASE_URL+'operator/all',header)
   }

   adminGetBuses(header){
      return axios.get(BASE_URL+'bus/all',header)
   }

   adminGetAllTrip(header){
      return axios.get(BASE_URL+'trip/all',header)
   }

   adminGetTripById(id,header){
      return axios.get(BASE_URL+'trip/'+id,header)
   }

   adminYearlyIncome(year,header){
      return axios.get(BASE_URL+'income/'+year,header)
   }

   adminMontholyIncome(year,month,header){
      if(!year){
         year = '0000'
      }
      if(!month){
         month = '01'
      }
      return axios.get(BASE_URL+'income/'+year+'/'+month,header)
   }

   adminGetUserById(id,header){
      return axios.get(BASE_URL+'user/'+id,header)
   }


}

export default new AdminServices()