import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/states`;

class StateService {
  getAllStates() {
    return axios.get(MYNTRA_API_BASE_URL);
  }
}

export default new StateService();
