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
  const [classDetails, setClassDetails] = useState({ seats: [] });
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
          booked_seat: res.data.booked_seat,
          seats: res.data.seats.filter((item) => item.is_booked === false),
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

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPassenger({ ...passenger, [name]: value });
  };

  //functionality
  const addPassenger = (event) => {
    event.preventDefault();
    const {
      id,
      first_name,
      last_name,
      age,
      gender,
      reservation_status,
      seat_id,
    } = passenger;
    let seat = classDetails.seats.find((seat) => seat._id === seat_id);
    setPassengers([
      ...passengers,
      {
        id,
        first_name,
        last_name,
        age,
        gender,
        reservation_status,
        seat_id,
        seat_no: seat.seat_no,
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
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="80%" alt="Loading..." />
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-md-4">
              <h4>Train Name : {train_name}</h4>
              <h4>Travell Class : {classType}</h4>
            </div>
            <div className="col-md-4">
              <h4>Start : {from}</h4>
              <h4>Time : {from_time}</h4>
            </div>
            <div className="col-md-4">
              <h4>Destination : {to}</h4>
              <h4>Time : {to_time}</h4>
            </div>
          </div>
          <h1 className="text-center text-primary">Book Tickets</h1>
          {/* passenger form */}
          <div className="container border border-dark rounded alert alert-secondary">
            <h4>Passenger Details :</h4>
            <form className="row" onSubmit={addPassenger}>
              <div className="col-md-2 my-2">
                <input
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required
                  value={passenger.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2 my-2">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  name="last_name"
                  value={passenger.last_name}
                  onChange={handleChange}
                  required
                />
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
              <div className="col-md-2 my-2">
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
              </div>
              <div className="col-md-2">
                <button className="btn btn-success my-2">
                  <FaPlus size="20px" />{" "}
                  {passengers.length > 0 ? "add more" : "add"}
                </button>
              </div>
            </form>
          </div>
          {/* end of passenger form */}
          {/* show passenger */}
          <div className="container my-2">
            <div className="row">
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
            </div>
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
