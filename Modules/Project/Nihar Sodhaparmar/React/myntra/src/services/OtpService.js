import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/otp`;

class OtpService {
  sendOtp(email) {
    return axios.post(MYNTRA_API_BASE_URL + "/send/" + email);
  }
}

export default new OtpService();
