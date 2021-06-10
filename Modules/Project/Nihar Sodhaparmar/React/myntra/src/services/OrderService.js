import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/orders";

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
}

export default new OrderService();
