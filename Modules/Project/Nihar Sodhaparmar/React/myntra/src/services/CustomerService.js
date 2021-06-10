import axios from "axios";
// import { getToken } from "../Utils/Storage";

const MYNTRA_API_BASE_URL = "http://localhost:3000/customers";
// const token = getToken();

class CustomerService {
  getCustomerById(id, token) {
    // console.log(token);
    return axios.get(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addCustomer(data) {
    return axios.post(MYNTRA_API_BASE_URL, data);
  }

  getCustomerByEmail(email) {
    return axios.get(MYNTRA_API_BASE_URL + "/email/" + email);
  }
}

export default new CustomerService();
