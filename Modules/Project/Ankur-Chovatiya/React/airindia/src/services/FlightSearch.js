import axios from 'axios'


const BASE_URL = "http://localhost:5000"

class FlightSearchService {

    getFlight(searchObj){
        return axios.post(BASE_URL+"/AirIndia/B2C/Booking/search" , searchObj)
    }

    setPassengerDetails(passengerDetails){
        return axios.post(BASE_URL+"/AirIndia/B2C/Booking/details" , passengerDetails)
    }

    updateSeat(seats , AircraftId) {
        return axios.post(BASE_URL + "/AirIndia/B2C/Booking/seatMap" , {seats , AircraftId })
    }

    addSeatToPassenger(seats ){
        return axios.post(BASE_URL+"/AirIndia/B2C/Booking/details/add-seat" , seats )
    }

    addUser(userDetails){
        return axios.post(BASE_URL + "/AirIndia/B2C/user/registration/add" , userDetails)
    }

    addCommanUser(loginDetails){
        return axios.post(BASE_URL + "/admin/user/addUser" , loginDetails)
    }

    getCommanUser(loginDetails){
        return axios.post(BASE_URL + "/admin/user/user" , loginDetails)
    }

    login(userdata) {
        return axios.post(BASE_URL + "/AirIndia/B2C/user/login" , userdata)
    }

    verifyToken(token, userData){
        return axios.post(BASE_URL + "/AirIndia/B2C/user/login/verifyToken" , userData , {
            headers : {
                'token' : token 
                // 'isAdmin' : 
            }
        })
    }
}

export default new FlightSearchService()