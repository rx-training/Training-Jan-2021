import axios from "axios";

const MYNTRA_API_BASE_URL = "http://localhost:3000/categories";

class CategoryService {
  getAllCategories() {
    return axios.get(MYNTRA_API_BASE_URL);
  }

  deleteCategory(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateCategory(id, data, token) {
    return axios.put(MYNTRA_API_BASE_URL + "/" + id, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addCategory(data, token) {
    return axios.post(MYNTRA_API_BASE_URL, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new CategoryService();
