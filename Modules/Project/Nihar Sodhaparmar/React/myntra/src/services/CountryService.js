import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/countries";

class CountryService {
  getAllCountries() {
    return axios.get(MYNTRA_API_BASE_URL);
  }
}

export default new CountryService();
