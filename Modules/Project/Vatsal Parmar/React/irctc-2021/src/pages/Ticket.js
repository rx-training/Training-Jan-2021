import React, { useEffect, useState } from "react";
import TrainServices from "../Services/TrainServices";
import Passengers from "../components/Ticket/Passengers";
import loadingImg from "../images/loading.gif";
import { FaRupeeSign } from "react-icons/fa";

const Ticket = (props) => {
  const id = props.match.params.id;
  const [ticket, setTicket] = useState({});
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    TrainServices.getTicket(id).then((res) => {
      setTicket(res.data);
      setPassengers(res.data.passengers);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="70%" alt="loading.." />
        </div>
      ) : (
        <div className="container alert alert-secondary">
          <div>
            <h4 className="text-center">Journey Details</h4>
            <div className="row text-capitalize">
              <div className="col-4">
                <p>train name : {ticket.train.train_name}</p>
                <p>from station : {ticket.from.station_name}</p>
                <p>time : {ticket.fromTime}</p>
              </div>
              <div className="col-4">
                <p>Journey date : {ticket.journey_date}</p>
                <p>to station : {ticket.to.station_name}</p>
                <p>time : {ticket.toTime}</p>
              </div>
              <div className="col-4">
                <img
                  src="../img/secondary-logo.png"
                  width="40px"
                  className="ml-5"
                  alt="irctc"
                />
                <p>class type : {ticket.travel_class.class_type}</p>
                <p>
                  ticket price : <FaRupeeSign />
                  {ticket.ticket_price}
                </p>
              </div>
            </div>
            <h4 className="text-center p-2">Passenger Details</h4>
          </div>
          <Passengers passengers={passengers} />
        </div>
      )}
      <div className="text-center mb-3">
        <button
          className="btn btn-secondary"
          onClick={() => {
            window.print();
          }}
        >
          Click To Download Ticket
        </button>
      </div>
    </>
  );
};

export default Ticket;
