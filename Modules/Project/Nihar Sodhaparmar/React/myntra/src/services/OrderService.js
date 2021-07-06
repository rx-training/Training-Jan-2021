import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/orders`;

class OrderService {
  addOrder(data, token) {
    return axios.post(MYNTRA_API_BASE_URL, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  getOrdersByCustomerId(id, token) {
    return axios.get(MYNTRA_API_BASE_URL + "/customer/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  getAllOrders(token) {
    return axios.get(MYNTRA_API_BASE_URL, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new OrderService();
