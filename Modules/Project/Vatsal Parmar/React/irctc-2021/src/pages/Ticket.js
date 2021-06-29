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
                <p>
                  Journey Duration : {diff(ticket.fromTime, ticket.toTime)} hrs
                </p>
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
