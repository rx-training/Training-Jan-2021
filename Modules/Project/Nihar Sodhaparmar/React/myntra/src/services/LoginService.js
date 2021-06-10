import axios from "axios";
import { getToken } from "../Utils/Storage";

const MYNTRA_API_BASE_URL = "http://localhost:3000";

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
