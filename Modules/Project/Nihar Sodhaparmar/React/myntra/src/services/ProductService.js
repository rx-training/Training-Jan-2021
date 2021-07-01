import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/products`;

class ProductService {
  getAllProducts() {
    return axios.get(MYNTRA_API_BASE_URL);
  }

  getProductById(id) {
    return axios.get(MYNTRA_API_BASE_URL + "/" + id);
  }

  addProduct(data, token) {
    return axios.post(MYNTRA_API_BASE_URL, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  deleteProduct(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateProduct(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateImages(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/images/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addImages(id, data, token) {
    return axios.post(MYNTRA_API_BASE_URL + "/images/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new ProductService();
