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
        if (res.data !== "Train Full") {
          setPnrId(res.data);
          setLoading(false);
          setPaymentDone(true);
        } else {
          console.log("not done");
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
  //   console.log(pnrId);
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
          </div>
        </div>
        <h4 className="text-center p-2 bg-primary">Passenger Details</h4>
      </div>
      <div className="container mt-3">
        <Passengers passengers={passengers} />
        {paymentDone ? (
          <div className="mx-auto text-center col-md-6 alert alert-success">
            <b>Payment Successfull</b>
            <Link to={`/ticket/${pnrId}`} className="d-block text-success">
              Click here to view ticket
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <h4>
              Total Price : <FaRupeeSign /> {totalPrice}
            </h4>
            {loading ? (
              <img src={loadingImg} width="150px" alt="loading..." />
            ) : (
              <button
                className="btn btn-success mb-3"
                type="button"
                onClick={payment}
              >
                Pay
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
