import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/sellers`;

class SellerService {
  addSeller(data) {
    return axios.post(MYNTRA_API_BASE_URL, data);
  }

  getSellerByEmail(email) {
    return axios.get(MYNTRA_API_BASE_URL + "/email/" + email);
  }
}

export default new SellerService();
