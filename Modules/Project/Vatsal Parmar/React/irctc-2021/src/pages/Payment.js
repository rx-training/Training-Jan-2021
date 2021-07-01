import React, { useContext, useEffect, useState } from "react";
import { TrainContext } from "../context/context";
import Passengers from "../components/Payment/Passengers";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getUser } from "../Utils/Common";
import TrainServices from "../Services/TrainServices";
import { removeUserSession } from "../Utils/Common";
import loadingImg from "../images/loading.gif";

const Payment = () => {
  const [paymentDone, setPaymentDone] = useState(false);
  const [trainFull, setTrainFull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pnrId, setPnrId] = useState("");
  const { bookingDetails, syncStorage } = useContext(TrainContext);
  useEffect(() => {
    syncStorage();
  }, []);
  const {
    train_name,
    trainId,
    from,
    from_id,
    from_time,
    to,
    to_id,
    to_time,
    totalPrice,
    classType,
    classId,
    passengers,
    booking_date,
    distance,
    unit_price,
  } = bookingDetails;

  //funcationality
  const payment = () => {
    setLoading(true);
    let user = getUser();
    let passengerData = passengers.map((item) => {
      let data = {
        first_name: item.first_name,
        last_name: item.last_name,
        age: item.age,
        gender: item.gender,
        reservation_status: item.reservation_status,
        seat_no: item.seat_no,
        seat_id: item.seat_id,
      };
      return data;
    });
    const pnr = {
      user_id: user.id,
      train: trainId,
      passengers: passengerData,
      from: from_id,
      to: to_id,
      fromTime: from_time,
      toTime: to_time,
      journey_date: booking_date,
      travel_class: classId,
      ticket_price: totalPrice,
    };
    TrainServices.bookTicket(pnr)
      .then((res) => {
        if (res.data !== "train is full") {
          setPnrId(res.data);
          setLoading(false);
          setPaymentDone(true);
        } else {
          setTrainFull(true);
          setLoading(false);
        }
      })
      .catch((error) => {
        //setLoading(false);
        if (error.response.status === 401) {
          removeUserSession();
          window.location.href = "/login";
        }
      });
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
  // console.log(bookingDetails);
  return (
    <>
      <div>
        <h4 className="text-center p-2 bg-primary">Journey Details</h4>
        <div className="row text-capitalize">
          <div className="col-md-4">
            <p>train name : {train_name}</p>
            <p>from station : {from}</p>
            <p>time : {from_time}</p>
          </div>
          <div className="col-md-4">
            <p>Journey date : {booking_date}</p>
            <p>to station : {to}</p>
            <p>time : {to_time}</p>
          </div>
          <div className="col-md-4">
            <p>class type : {classType}</p>
            <p>
              Price : <FaRupeeSign />{" "}
              {bookingDetails.unit_price * bookingDetails.distance} /per person
            </p>
            <p>Journey Duration : {diff(from_time, to_time)} hrs</p>
          </div>
        </div>
        <h4 className="text-center p-2 bg-primary">Passenger Details</h4>
      </div>
      <div className="container mt-3">
        <Passengers
          passengers={passengers}
          distance={distance}
          unit_price={unit_price}
        />
        {paymentDone ? (
          <div className="mx-auto text-center col-md-6 alert alert-success">
            <b>Payment Successfull</b>
            <Link to={`/ticket/${pnrId}`} className="d-block text-success">
              Click here to view ticket
            </Link>
          </div>
        ) : (
          <div className="text-right">
            <h4 className="d-inline">
              Total Price : <FaRupeeSign /> {totalPrice}
            </h4>
            {loading ? (
              <img src={loadingImg} width="150px" alt="loading..." />
            ) : (
              <button
                className="btn btn-success mb-3 ml-5 mr-2"
                type="button"
                onClick={payment}
              >
                Pay
              </button>
            )}
          </div>
        )}
        {trainFull && (
          <div className="mx-auto text-center col-md-6 alert alert-danger">
            <b>Selected travell class is full</b>
            <Link to="/" className="d-block text-danger">
              Back to home
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
