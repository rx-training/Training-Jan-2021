import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/states";

class StateService {
  getAllStates() {
    return axios.get(MYNTRA_API_BASE_URL);
  }
}

export default new StateService();
