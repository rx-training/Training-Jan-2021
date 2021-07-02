import React, { useEffect, useState } from "react";
import TrainServices from "../../Services/TrainServices";
import Passengers from "../../components/Ticket/Passengers";
import loadingImg from "../../images/loading.gif";
import { FaRupeeSign } from "react-icons/fa";
import { removeUserSession } from "../../Utils/Common";

const PnrDetails = (props) => {
  const id = props.match.params.id;
  const [pnr, setPnr] = useState({});
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    TrainServices.getTicket(id).then((res) => {
      setPnr(res.data);
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
  const deletePnr = () => {
    if (window.confirm("Are you sure you want delete this record ?")) {
      TrainServices.cancelTicket(id)
        .then((res) => {
          if (res.data === "Ticket Cancled") {
            props.history.push("/dashboard/pnrs");
          }
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    }
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="70%" alt="loading.." />
        </div>
      ) : (
        <div className="container alert alert-secondary mt-4">
          <div>
            <h4 className="text-center">Journey Details</h4>
            <div className="row text-capitalize">
              <div className="col-4">
                <p>train name : {pnr.train.train_name}</p>
                <p>from station : {pnr.from.station_name}</p>
                <p>time : {pnr.fromTime}</p>
              </div>
              <div className="col-4">
                <p>Journey date : {pnr.journey_date}</p>
                <p>to station : {pnr.to.station_name}</p>
                <p>time : {pnr.toTime}</p>
                <p>Journey Duration : {diff(pnr.fromTime, pnr.toTime)} hrs</p>
              </div>
              <div className="col-4">
                <p>
                  Booked By :{" "}
                  {pnr.user_id.first_name + " " + pnr.user_id.last_name}
                </p>
                <p>class type : {pnr.travel_class.class_type}</p>
                <p>
                  pnr price : <FaRupeeSign />
                  {pnr.ticket_price}
                </p>
              </div>
            </div>
            <h4 className="text-center p-2">Passenger Details</h4>
          </div>
          <Passengers passengers={passengers} />
        </div>
      )}
      <div className="text-center mb-3">
        <button className="btn btn-danger" onClick={deletePnr}>
          Delete PNR
        </button>
      </div>
    </>
  );
};

export default PnrDetails;
