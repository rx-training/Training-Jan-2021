import axios from "axios";
import { hostName } from "../utils/Global";
// import { getToken } from "../Utils/Storage";

const MYNTRA_API_BASE_URL = `${hostName}/customers`;
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

  getAllCustomers(token) {
    return axios.get(MYNTRA_API_BASE_URL, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  deleteCustomer(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateCustomer(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updatePassword(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/change-password/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  forgetPassword(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/forget-password/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new CustomerService();
