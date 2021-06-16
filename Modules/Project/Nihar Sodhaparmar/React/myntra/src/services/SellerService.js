import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/sellers";

class SellerService {
  addSeller(data) {
    return axios.post(MYNTRA_API_BASE_URL, data);
  }

  getSellerByEmail(email) {
    return axios.get(MYNTRA_API_BASE_URL + "/email/" + email);
  }
}

export default new SellerService();
