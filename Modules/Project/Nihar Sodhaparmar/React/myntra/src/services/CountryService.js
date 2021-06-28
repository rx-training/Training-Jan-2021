import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/countries`;

class CountryService {
  getAllCountries() {
    return axios.get(MYNTRA_API_BASE_URL);
  }
}

export default new CountryService();
