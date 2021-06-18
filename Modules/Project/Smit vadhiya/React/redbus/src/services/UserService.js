import axios from 'axios'

const BASE_URL = 'http://localhost:80/api/user/'

class UserServices {

   userSignup(data){
      return axios.post(BASE_URL+'signup',data)
   }

   userLogin(data){
      return axios.post(BASE_URL+'login',data)
   }

   userHeaderCheck(id,header){
      return axios.get(BASE_URL+id,header)
   }

   userOtpVerification(otp){
      return axios.post(BASE_URL+'signup/verify/'+otp)
   }
   
   userAddNewTrip(body,id,header){
      return axios.post(BASE_URL+id+"/search/newtrip",body,header)
   }

   userGetById(id,header){
      return axios.get(BASE_URL+id,header)
   }

   userUpdateById(id,body,header){
      return axios.put(BASE_URL+id+"/update",body,header)
   }

   userGetMyTrip(id,header){
      return axios.get(BASE_URL+id+'/mytrip',header)
   }

   userCancelTrip(userId,tripId,header){
      return axios.get(BASE_URL+userId+'/myTrip/'+tripId,header)
   }

   userGetAllMail(){
      return axios.get(BASE_URL+'getAllMail')
   }

}

export default new UserServices()