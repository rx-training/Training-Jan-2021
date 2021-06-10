import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/otp";

class OtpService {
  sendOtp(email) {
    return axios.post(MYNTRA_API_BASE_URL + "/send/" + email);
  }
}

export default new OtpService();
