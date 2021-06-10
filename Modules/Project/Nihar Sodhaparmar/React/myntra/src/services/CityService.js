import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/cities";

class CityService {
  getAllCities() {
    return axios.get(MYNTRA_API_BASE_URL);
  }
}

export default new CityService();
