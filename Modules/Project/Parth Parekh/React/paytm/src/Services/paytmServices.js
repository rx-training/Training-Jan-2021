import axios from "axios";
// export const hostServer = "http://20.198.103.48:92";
export const hostServer = "http://localhost:9000";
const PAYTM_API_PRODUCTS_URL = `${hostServer}/product`;

const PAYTM_API_USER = `${hostServer}/user`;
const PAYTM_API_OTP = `${hostServer}/otp`;

class PaytmService {
    //To get Product
    getProduct() {
        return axios.get(PAYTM_API_PRODUCTS_URL);
    }

    getProductDetailsFromId(id) {
        return axios.get(PAYTM_API_PRODUCTS_URL + "/" + id);
    }

    //For User
    signup(data) {
        return axios.post(PAYTM_API_USER + "/register", data);
    }

    login(data) {
        return axios.post(PAYTM_API_USER + "/login", data);
    }

    //Get User Details
    getUserDetailsFromId(id, token) {
        const tok = "Bearer " + token;
        // console.log(tok);
        return axios.get(PAYTM_API_USER + "/" + id, {
            headers: {
                authorization: tok,
            },
        });
    }
    //Update User Details
    updateUser(id, token, id2, data) {
        const tok = "Bearer " + token;
        // console.log(tok);
        return axios.put(PAYTM_API_USER + "/" + id + "/" + id2, data, {
            headers: {
                authorization: tok,
            },
        });
    }

    //Get Transaction Details of login user
    getTransactionDetailsOFUser(id, token) {
        const tok = "Bearer " + token;
        // console.log(tok);
        return axios.get(PAYTM_API_USER + "/" + id + "/transaction", {
            headers: {
                authorization: tok,
            },
        });
    }

    //Money Transfer
    moneyTransfer(id, token, data) {
        const tok = "Bearer " + token;
        // console.log(tok);
        return axios.put(PAYTM_API_USER + "/" + id + "/transaction", data, {
            headers: {
                authorization: tok,
            },
        });
    }

    //Add Money To Wallet
    addMoney(id, token, data) {
        const tok = "Bearer " + token;
        // console.log(tok);
        return axios.post(
            PAYTM_API_USER + "/" + id + "/transaction/addMoney",
            data,
            {
                headers: {
                    authorization: tok,
                },
            }
        );
    }

    //Order Payment
    orderPayment(id, token, data) {
        const tok = "Bearer " + token;
        return axios.post(PAYTM_API_USER + "/" + id + "/orders/payment", data, {
            headers: {
                authorization: tok,
            },
        });
    }

    //OTP Sending
    otp(data) {
        return axios.post(PAYTM_API_OTP, data);
    }

    /*****************     Admin     *****************/
    //get All User Data
    getAllUserData(id, token) {
        const tok = "Bearer " + token;
        return axios.get(PAYTM_API_USER, {
            headers: {
                authorization: tok,
            },
        });
    }

    //Delete user
    deleteUser(id, token) {
        const tok = "Bearer " + token;
        return axios.delete(PAYTM_API_USER + "/" + id, {
            headers: {
                authorization: tok,
            },
        });
    }

    // Category
    //get Category
    getCategory(id, token) {
        const tok = "Bearer " + token;
        return axios.get(PAYTM_API_USER + "/" + id + "/category", {
            headers: {
                authorization: tok,
            },
        });
    }
    //Get Category from id
    getCategoryById(id, token, uid) {
        const tok = "Bearer " + token;
        return axios.get(PAYTM_API_USER + "/" + id + "/category/" + uid, {
            headers: {
                authorization: tok,
            },
        });
    }

    //add Category
    addCategory(id, token, data) {
        const tok = "Bearer " + token;
        return axios.post(PAYTM_API_USER + "/" + id + "/category", data, {
            headers: {
                authorization: tok,
            },
        });
    }
    //Update Category
    updateCategory(id, token, uid, data) {
        const tok = "Bearer " + token;
        return axios.put(PAYTM_API_USER + "/" + id + "/category/" + uid, data, {
            headers: {
                authorization: tok,
            },
        });
    }

    //delete Category
    deleteCategory(id, token, did) {
        const tok = "Bearer " + token;
        return axios.delete(PAYTM_API_USER + "/" + id + "/category/" + did, {
            headers: {
                authorization: tok,
            },
        });
    }

    //Add Product Data
    addProduct(token, data) {
        const tok = "Bearer " + token;
        return axios.post(PAYTM_API_PRODUCTS_URL, data, {
            headers: {
                authorization: tok,
            },
        });
    }

    //Update Product Data
    updateProduct(id, token, data) {
        const tok = "Bearer " + token;
        return axios.put(PAYTM_API_PRODUCTS_URL + "/" + id, data, {
            headers: {
                authorization: tok,
            },
        });
    }
    deleteProduct(id, token) {
        const tok = "Bearer " + token;
        return axios.delete(PAYTM_API_PRODUCTS_URL + "/" + id, {
            headers: {
                authorization: tok,
            },
        });
    }
}
export default new PaytmService();
