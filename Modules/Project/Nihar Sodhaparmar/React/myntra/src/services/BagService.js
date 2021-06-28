import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/bag`;

class BagService {
  getBagItemsByCustomerId(id, token) {
    return axios.get(MYNTRA_API_BASE_URL + "/customer/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addBagItem(data, token) {
    return axios.post(MYNTRA_API_BASE_URL, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  deleteBagItem(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addWishlistToBag(id, data, token) {
    return axios.post(MYNTRA_API_BASE_URL + "/addwishlisttobag/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateBagItem(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new BagService();
