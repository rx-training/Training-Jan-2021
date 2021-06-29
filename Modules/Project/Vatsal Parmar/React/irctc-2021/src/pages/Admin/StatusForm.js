import React, { useEffect, useState } from "react";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import { removeUserSession } from "../../Utils/Common";
import { v4 as uuidv4 } from "uuid";
import { FaPlus, FaTrash, FaPen } from "react-icons/fa";

const StatusForm = (props) => {
  const id = props.match.params.id;
  const [trainStatus, setTrainStatus] = useState({
    train: "",
    class_type: "",
    price: "",
    avail_seat: 0,
    // booked_seat: 0,
    // wait_seat: 0,
  });
  const [trains, setTrains] = useState([]);
  const [seats, setSeats] = useState([]);
  const [singleSeat, setSingleSeat] = useState({
    seat_no: "",
    _id: uuidv4(),
  });
  const [errors, setErrors] = useState({
    class_type: "",
    price: "",
    avail_seat: "",
    // booked_seat: "",
    // wait_seat: "",
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  //functionality

  useEffect(() => {
    if (id !== "_add") {
      setSecondLoading(true);
      TrainServices.getTrains()
        .then((res) => {
          setTrains(res.data);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
      TrainServices.getTrainStatusById(id)
        .then((res) => {
          setTrainStatus({
            train: res.data.train._id,
            class_type: res.data.class_type,
            price: res.data.price,
            avail_seat: res.data.avail_seat,
            // booked_seat: res.data.booked_seat,
            // wait_seat: res.data.wait_seat,
          });
          setSeats(res.data.seats);
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    } else {
      setSecondLoading(true);
      TrainServices.getTrains()
        .then((res) => {
          setTrains(res.data);
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    }
  }, []);
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let error = errors;
    if (name === "class_type") {
      if (value.trim().length < 3) {
        error[name] = "must be at least 3 characters long!";
      } else {
        error[name] = "";
      }
    } else if (name === "avail_seat") {
      if (value >= 0) {
        error[name] = "";
      } else {
        error[name] = "Can not be negative value";
      }
    } else if (name === "price") {
      if (value >= 0) {
        error[name] = "";
      } else {
        error[name] = "Can not be negative value";
      }
    }
    setErrors({ ...errors, error });
    setTrainStatus({ ...trainStatus, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);

      if (id === "_add") {
        let data = { ...trainStatus, seats: seats };
        TrainServices.addTrainStatus(data)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/status");
            }
          })
          .catch((error) => {
            //setLoading(false);
            if (error.response.status === 401) {
              removeUserSession();
              window.location.href = "/login";
            }
            if (error.response.status === 400) {
              console.log(error.response.data);
            }
          });
      } else {
        let data = { ...trainStatus, seats: seats };
        TrainServices.editTrainStatus(id, data)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/status");
            }
          })
          .catch((error) => {
            //setLoading(false);
            if (error.response.status === 401) {
              removeUserSession();
              window.location.href = "/login";
            }
            if (error.response.status === 400) {
              console.log(error.response.data);
            }
          });
      }
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };

  const addSeat = () => {
    if (editMode) {
      setEditMode(false);
    }
    let seat = singleSeat;
    setSeats([...seats, seat]);
    setSingleSeat({ seat_no: "", _id: uuidv4() });
  };
  const editSeat = (id) => {
    setEditMode(true);
    let seat = seats.find((item) => item._id === id);
    let newSeats = seats.filter((item) => item._id !== id);
    setSingleSeat(seat);
    setSeats(newSeats);
  };
  const removeSeat = (id) => {
    let newSeats = seats.filter((seat) => seat._id !== id);
    setSeats(newSeats);
  };
  // const resetSeats = () => {
  //   const newSeats = seats.map((item) => {
  //     item.is_booked = false;
  //     return item;
  //   });
  //   setSeats(newSeats);
  // };
  return (
    <div className="container">
      <div className="my-5 col-md-10 mx-auto">
        <h2 className="text-center p-3 heading-primary text-white rounded-top mb-0">
          Class Status
        </h2>
        {secondLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <img src={loadingImg} width="70%" alt="loading..." />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-4 px-5 border border-secondary rounded-bottom"
          >
            <div className="form-group">
              <label htmlFor="train">Train :</label>
              <select
                name="train"
                className="form-control"
                id="train"
                onChange={handleChange}
                value={trainStatus.train}
                required
              >
                <option value="">Select Train</option>
                {trains.map((train) => (
                  <option value={train._id} key={train._id}>
                    {train.train_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="class_type">Class Type :</label>
              <select
                name="class_type"
                className="form-control"
                id="class_type"
                onChange={handleChange}
                value={trainStatus.class_type}
                required
              >
                <option value="">Select Class Type</option>
                <option value="AC TIER 1">AC TIER 1</option>
                <option value="AC TIER 2">AC TIER 2</option>
                <option value="AC TIER 3">AC TIER 3</option>
                <option value="SLEEPER 1">SLEEPER 1</option>
                <option value="SLEEPER 2">SLEEPER 2</option>
                <option value="REGULAR">REGULAR</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price :</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                placeholder="price"
                onChange={handleChange}
                value={trainStatus.price}
                required
              />
              {errors.price.length > 0 && (
                <small className="text-danger">{errors.price}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="avail_seat">Available Seat :</label>
              <input
                type="number"
                id="avail_seat"
                name="avail_seat"
                className="form-control"
                placeholder="number of seats"
                onChange={handleChange}
                value={trainStatus.avail_seat}
                required
              />
              {errors.avail_seat.length > 0 && (
                <small className="text-danger">{errors.avail_seat}</small>
              )}
            </div>
            {/* {id !== "_add" && (
              <div className="form-group">
                <label htmlFor="booked_seat">Booked Seat :</label>
                <input
                  type="number"
                  id="booked_seat"
                  name="booked_seat"
                  className="form-control"
                  placeholder="number of seats"
                  onChange={handleChange}
                  value={trainStatus.booked_seat}
                  required
                />
                {errors.booked_seat.length > 0 && (
                  <small className="text-danger">{errors.booked_seat}</small>
                )}
              </div>
            )}
            {id !== "_add" && (
              <div className="form-group">
                <label htmlFor="wait_seat">Wait Seat :</label>
                <input
                  type="number"
                  id="wait_seat"
                  name="wait_seat"
                  className="form-control"
                  placeholder="number of seats"
                  onChange={handleChange}
                  value={trainStatus.wait_seat}
                  required
                />
                {errors.wait_seat.length > 0 && (
                  <small className="text-danger">{errors.wait_seat}</small>
                )}
              </div>
            )} */}
            {/* to add seats */}
            <div className="form-group">
              <label htmlFor="seat_no">Add Seats :</label>
              <input
                type="text"
                id="seat_no"
                name="seat_no"
                className="form-control w-50 ml-2 d-inline"
                placeholder="seat no ex. AC 1"
                onChange={(e) =>
                  setSingleSeat({ ...singleSeat, seat_no: e.target.value })
                }
                value={singleSeat.seat_no}
              />
              {/* <select
                className="form-control w-25 ml-2 d-inline"
                name="is_booked"
                value={singleSeat.is_booked}
                onChange={(e) =>
                  setSingleSeat({ ...singleSeat, is_booked: e.target.value })
                }
              >
                <option value={false}>Not Booked</option>
                <option value={true}>Booked</option>
              </select> */}

              <button
                className={
                  editMode ? "btn btn-primary ml-3" : "btn btn-success ml-3"
                }
                onClick={addSeat}
                type="button"
                disabled={singleSeat.seat_no.length === 0}
              >
                {editMode ? <FaPen /> : <FaPlus />}
              </button>
            </div>
            <div className="row">
              {seats.map((seat) => (
                <div key={seat._id} className="col-6 col-md-4 p-1">
                  <div className="alert alert-success d-flex justify-content-between align-items-center">
                    <span>
                      <p className="m-0">Seat No : {seat.seat_no}</p>
                      {/* <p className="m-0">
                        Status :{" "}
                        {seat.is_booked === true || seat.is_booked === "true"
                          ? "Booked"
                          : "Not Booked"}
                      </p> */}
                    </span>
                    <span>
                      <FaPen
                        color="blue"
                        onClick={() => editSeat(seat._id)}
                        style={{ cursor: "pointer" }}
                      />{" "}
                      <FaTrash
                        color="red"
                        onClick={() => removeSeat(seat._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {seats.length > trainStatus.avail_seat && (
              <p className="text-danger">
                Seats can not be more then Available seats
              </p>
            )}
            <button
              disabled={seats.length > trainStatus.avail_seat}
              className={
                id === "_add" ? "btn btn-success px-4" : "btn btn-info px-4"
              }
            >
              {id === "_add" ? "Add" : "Update"}
            </button>
            {/* {id !== "_add" && (
              <button
                className="btn btn-warning ml-2"
                onClick={resetSeats}
                type="button"
              >
                UnBook All Seats
              </button>
            )} */}
            {loading && <img src={loadingImg} alt="loading..." width="200px" />}
            {formError.length > 0 && (
              <p className="text-danger mt-2">{formError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default StatusForm;
