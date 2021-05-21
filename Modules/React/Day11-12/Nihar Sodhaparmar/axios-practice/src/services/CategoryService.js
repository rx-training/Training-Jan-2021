import axios from "axios";

const CATEGORY_API_BASE_URL = " http://localhost:3000/categories";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg3OTU5YjBlZWUzNzM2N2MzYjBjYjQiLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNjIxNDkyMDA1LCJleHAiOjE2MjE0OTU2MDV9.kg8X8-WCutHYQ2B7Lwo9dbZ0XHQseOIqOSMBJHOVi14";

class CategoryService {
  getCategories() {
    return axios.get(CATEGORY_API_BASE_URL, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  createCategory(categoryName) {
    return axios.post(
      CATEGORY_API_BASE_URL,
      { categoryName },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  }

  getCategoryById(catgoryId) {
    return axios.get(CATEGORY_API_BASE_URL + "/" + catgoryId, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  updateCategory(categoryName, catgoryId) {
    return axios.put(
      CATEGORY_API_BASE_URL + "/" + catgoryId,
      { categoryName },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  }

  deleteCategory(catgoryId) {
    return axios.delete(CATEGORY_API_BASE_URL + "/" + catgoryId, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new CategoryService();
