import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/categories-to-bag`;

class CategoriesToBagService {
  // add category to bag
  addCategoryToBag(data, token) {
    return axios.post(MYNTRA_API_BASE_URL, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  // get all categories to bag
  getAllCategoriesToBag() {
    return axios.get(MYNTRA_API_BASE_URL);
  }

  // delete category to bag
  deleteCategoryToBag(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new CategoriesToBagService();
