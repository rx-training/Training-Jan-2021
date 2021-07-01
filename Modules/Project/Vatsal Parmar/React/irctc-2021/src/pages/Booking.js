import React, { useState, useEffect, useContext } from "react";
import TrainServices from "../Services/TrainServices";
import { TrainContext } from "../context/context";
import { FaRupeeSign, FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { removeUserSession } from "../Utils/Common";
import loadingImg from "../images/loading.gif";

const Booking = (props) => {
  const [loading, setLoading] = useState(false);
  const { bookingDetails, setBookingDetails } = useContext(TrainContext);
  // console.log(bookingDetails);
  const id = props.match.params.id;
  const [classDetails, setClassDetails] = useState({});
  const [passengers, setPassengers] = useState([]);
  const [passenger, setPassenger] = useState({
    id: uuidv4(),
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    reservation_status: "BOOKED",
    seat_no: "",
    seat_id: "",
  });
  const [err, setErr] = useState({ first_name: "", last_name: "", age: "" });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setLoading(true);
    TrainServices.getTravellClass(id)
      .then((res) => {
        const details = {
          ...bookingDetails,
          classId: res.data._id,
          classType: res.data.class_type,
        };
        setClassDetails({
          classId: res.data._id,
          classType: res.data.class_type,
          unit_price: res.data.price,
          avail_seat: res.data.avail_seat,
          // booked_seat: res.data.booked_seat,
          // seats: res.data.seats.filter((item) => item.is_booked === false),
        });
        setBookingDetails(details);
        setLoading(false);
      })
      .catch((error) => {
        //setLoading(false);
        if (error.response.status === 401) {
          removeUserSession();
          window.location.href = "/login";
        }
      });
  }, []);
  const { from, from_time, to, to_time, classType, train_name } =
    bookingDetails;
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let error = err;
    if (name === "first_name" || name === "last_name") {
      if (value.trim().length < 3) {
        error[name] = "must be at least 3 characters long!";
      } else {
        error[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid characters";
      }
    } else if (name === "age") {
      if (value <= 0) {
        error[name] = "Enter Valid Age";
      } else {
        error[name] = "";
      }
    }

    setErr({ ...err, error });
    setPassenger({ ...passenger, [name]: value });
  };

  //functionality
  const addPassenger = (event) => {
    event.preventDefault();
    if (validateForm(err)) {
      setFormError("");
      const {
        id,
        first_name,
        last_name,
        age,
        gender,
        reservation_status,
        // seat_id,
      } = passenger;
      // let seat = classDetails.seats.find((seat) => seat._id === seat_id);
      setPassengers([
        ...passengers,
        {
          id,
          first_name,
          last_name,
          age,
          gender,
          reservation_status,
          // seat_id,
          // seat_no: seat.seat_no,
        },
      ]);
      setPassenger({
        id: uuidv4(),
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        reservation_status: "BOOKED",
        seat_no: "",
        seat_id: "",
      });
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };
  const removePassenger = (id) => {
    let tempPassengers = passengers.filter((item) => item.id !== id);
    setPassengers(tempPassengers);
  };
  const book = () => {
    let totalPrice =
      classDetails.unit_price * bookingDetails.distance * passengers.length;
    const details = {
      ...bookingDetails,
      totalPrice: totalPrice,
      passengers: passengers,
      unit_price: classDetails.unit_price,
    };
    setBookingDetails(details);
    props.history.push("/payment");
  };

  //to get journey duration
  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    if (hours < 0) hours = hours + 24;

    return (
      (hours <= 9 ? "0" : "") +
      hours +
      ":" +
      (minutes <= 9 ? "0" : "") +
      minutes
    );
  }

  return (
    <>
      {loading ? (
        <div
          style={{ minHeight: "75vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={loadingImg} width="80%" alt="Loading..." />
        </div>
      ) : (
        <div style={{ minHeight: "75vh" }}>
          <div className="row my-2 pl-3">
            <div className="col-md-4">
              <h4>Train Name : {train_name}</h4>
              <h4>Travell Class : {classType}</h4>
              <h4>Journey Duration : {diff(from_time, to_time)} hrs</h4>
            </div>
            <div className="col-md-4">
              <h4>Start : {from}</h4>
              <h4>Time : {from_time}</h4>
              <h4>
                Price : <FaRupeeSign />{" "}
                {classDetails.unit_price * bookingDetails.distance} /per person
              </h4>
            </div>
            <div className="col-md-4">
              <h4>Destination : {to}</h4>
              <h4>Time : {to_time}</h4>
            </div>
          </div>
          <h1 className="text-center text-primary">Book Tickets</h1>
          {/* passenger form */}
          <div className="container border border-dark rounded alert alert-secondary my-3">
            <h4>Passenger Details :</h4>
            <form className="row" onSubmit={addPassenger}>
              <div className="col-md-3 my-2">
                <input
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required
                  value={passenger.first_name}
                  onChange={handleChange}
                />
                {err.first_name.length > 0 && (
                  <small className="text-danger">{err.first_name}</small>
                )}
              </div>
              <div className="col-md-3 my-2">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  name="last_name"
                  value={passenger.last_name}
                  onChange={handleChange}
                  required
                />
                {err.last_name.length > 0 && (
                  <small className="text-danger">{err.last_name}</small>
                )}
              </div>
              <div className="col-md-2 my-2">
                <input
                  className="form-control"
                  placeholder="age"
                  type="number"
                  required
                  name="age"
                  value={passenger.age}
                  onChange={handleChange}
                />
                {err.age.length > 0 && (
                  <small className="text-danger">{err.age}</small>
                )}
              </div>
              <div className="col-md-2 my-2">
                <select
                  className="form-control"
                  name="gender"
                  value={passenger.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* <div className="col-md-2 my-2">
                <select
                  className="form-control"
                  name="seat_id"
                  value={passenger.seat_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Seat</option>
                  {classDetails.seats.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.seat_no}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="col-md-2">
                <button className="btn btn-success my-2">
                  <FaPlus size="20px" />{" "}
                  {passengers.length > 0 ? "add more" : "add"}
                </button>
              </div>
              {formError.length > 0 && (
                <div className="mx-auto">
                  <p className="text-danger my-0">{formError}</p>
                </div>
              )}
            </form>
          </div>
          {/* end of passenger form */}
          {/* show passenger */}
          <div className="container my-2">
            {/* <div className="row">
              {passengers.map((item) => {
                return (
                  <div className="col-md-3 text-uppercase p-3" key={item.id}>
                    <div className="border border-primary alert alert-primary p-3">
                      <h6>
                        Name : {item.first_name} {item.last_name}
                      </h6>
                      <h6>Age : {item.age}</h6>
                      <h6>Gender : {item.gender}</h6>
                      <h6>Seat No : {item.seat_no}</h6>
                      <h6>
                        Price : <FaRupeeSign />{" "}
                        {classDetails.unit_price * bookingDetails.distance}
                      </h6>
                      <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        onClick={() => {
                          removePassenger(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div> */}
            {passengers.length != 0 && (
              <table className="table table-hover table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    {/* <th scope="col">Seat No</th> */}
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-capitalize">
                  {passengers.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        {/* <td>{item.seat_no}</td> */}
                        <td>
                          <FaRupeeSign />{" "}
                          {classDetails.unit_price * bookingDetails.distance}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            type="button"
                            onClick={() => {
                              removePassenger(item.id);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          {/* end of show passenger */}
          <div className="container mb-3">
            <h4 className="d-inline">
              Total Price: <FaRupeeSign />{" "}
              {classDetails.unit_price *
                bookingDetails.distance *
                passengers.length}
            </h4>

            <button
              className="ml-3 btn btn-lg btn-warning"
              disabled={passengers.length > 0 ? false : true}
              type="button"
              onClick={book}
            >
              Book
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
