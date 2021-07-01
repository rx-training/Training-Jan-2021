import axios from "axios";
import { hostName } from "../utils/Global";
import { getToken } from "../utils/Storage";

const MYNTRA_API_BASE_URL = `${hostName}`;

const token = getToken();

class LoginService {
  login(user) {
    return axios.post(MYNTRA_API_BASE_URL + "/login", { ...user });
  }

  verify() {
    return axios.get(MYNTRA_API_BASE_URL + "/verify", {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new LoginService();
