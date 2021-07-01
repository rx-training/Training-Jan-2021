import axios from "axios";
import { hostName } from "../utils/Global";

const MYNTRA_API_BASE_URL = `${hostName}/wishlist`;

class WishlistService {
  getWishlistItemsByCustomerId(id, token) {
    return axios.get(MYNTRA_API_BASE_URL + "/customer/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }

  addWishlistItem(customer, product, token) {
    return axios.post(
      MYNTRA_API_BASE_URL,
      { customer, product },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  }

  deleteWishlistItem(id, token) {
    return axios.delete(MYNTRA_API_BASE_URL + "/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new WishlistService();
