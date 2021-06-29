import React, { useState, useEffect } from "react";
import TrainServices from "../Services/TrainServices";
import loadingImg from "../images/loading.gif";
import BookingCard from "../components/MyBookings/BookingCard";
import { removeUserSession } from "../Utils/Common";

const MyBookings = (props) => {
  const id = props.match.params.id;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TrainServices.getAllTickets(id)
      .then((res) => {
        setBookings(res.data);
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
  const viewTicket = (pnr) => {
    props.history.push(`/ticket/${pnr}`);
  };
  const cancelBooking = (id) => {
    if (window.confirm("Are you sure you want cancle ticket ?")) {
      TrainServices.cancelTicket(id)
        .then((res) => {
          if (res.data === "Ticket Cancled") {
            props.history.push("/user");
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
    <div style={{ minHeight: "75vh" }}>
      <h3 className="text-center bg-primary p-2">My Bookings</h3>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="50%" alt="loading..." />
        </div>
      ) : (
        <div className="container">
          {bookings.length > 0 ? (
            <div>
              {bookings.map((item) => (
                <BookingCard
                  key={item._id}
                  pnr={item}
                  viewTicket={viewTicket}
                  cancelBooking={cancelBooking}
                />
              ))}
            </div>
          ) : (
            <div className="mt-3 col-md-6 mx-auto alert alert-danger">
              <h4 className="text-center">Sorry No Bookings, To Show</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
