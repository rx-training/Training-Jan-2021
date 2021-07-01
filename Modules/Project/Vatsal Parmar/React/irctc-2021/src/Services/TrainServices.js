import axios from "axios";
import { getToken } from "../Utils/Common";

const TRAIN_API_BASE_URL = "http://localhost:3001/";
// const TRAIN_API_BASE_URL = "http://20.198.103.48:89/";

class TrainServices {
  searchTrain(from, to) {
    return axios.get(
      `${TRAIN_API_BASE_URL}trains/search?from=${from}&to=${to}`
    );
  }
  getTravellClass(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}status/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  bookTicket(data) {
    const token = getToken();
    return axios.post(`${TRAIN_API_BASE_URL}pnrs`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  getTicket(id) {
    return axios.get(`${TRAIN_API_BASE_URL}pnrs/${id}`);
  }
  getAllTickets(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}users/${id}/pnrs`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  cancelTicket(pnrId) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}pnrs/${pnrId}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  checkMail(email) {
    return axios.post(`${TRAIN_API_BASE_URL}otp/check-mail/${email}`);
  }
  sendOtp(email) {
    return axios.post(`${TRAIN_API_BASE_URL}otp/send/${email}`);
  }
  // verifyOtp(otp) {
  //   return axios.post(`${TRAIN_API_BASE_URL}otp/verify/${otp}`);
  // }
  createUser(user) {
    return axios.post(`${TRAIN_API_BASE_URL}users`, user);
  }
  login(user) {
    return axios.post(`${TRAIN_API_BASE_URL}login`, user);
  }
  getUserById(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}users/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  updateUser(id, data) {
    const token = getToken();
    return axios.put(`${TRAIN_API_BASE_URL}users/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  //*******admin side*******
  // for trains
  getTrains() {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}trains/`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  addTrain(data) {
    const token = getToken();
    return axios.post(`${TRAIN_API_BASE_URL}trains/`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  deleteTrain(id) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}trains/train/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  getTrainById(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}trains/train/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  editTrain(id, data) {
    const token = getToken();
    return axios.put(`${TRAIN_API_BASE_URL}trains/train/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  // for stations
  getStations() {
    return axios.get(`${TRAIN_API_BASE_URL}stations/`);
  }
  addStation(data) {
    const token = getToken();
    return axios.post(`${TRAIN_API_BASE_URL}stations/`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  getStationById(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}stations/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  editStation(id, data) {
    const token = getToken();
    return axios.put(`${TRAIN_API_BASE_URL}stations/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  deleteStation(id) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}stations/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  //for routes
  getRoutes() {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}routes/`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  addTrainRoute(data) {
    const token = getToken();
    return axios.post(`${TRAIN_API_BASE_URL}routes/`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  getTrainRouteById(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}routes/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  editTrainRoute(id, data) {
    const token = getToken();
    return axios.put(`${TRAIN_API_BASE_URL}routes/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  deleteTrainRoute(id) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}routes/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  // for travell class
  getTrainStatus() {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}status/`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  addTrainStatus(data) {
    const token = getToken();
    return axios.post(`${TRAIN_API_BASE_URL}status/`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  getTrainStatusById(id) {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}status/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  editTrainStatus(id, data) {
    const token = getToken();
    return axios.put(`${TRAIN_API_BASE_URL}status/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  deleteTrainStatus(id) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}status/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  // for users
  getUsers() {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}users/`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  deleteUser(id) {
    const token = getToken();
    return axios.delete(`${TRAIN_API_BASE_URL}users/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
  // for pnrs
  getAllPnrs() {
    const token = getToken();
    return axios.get(`${TRAIN_API_BASE_URL}pnrs/`, {
      headers: {
        "x-access-token": token,
      },
    });
  }
}

export default new TrainServices();
