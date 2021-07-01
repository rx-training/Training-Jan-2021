import React, { useState } from "react";

const TrainContext = React.createContext();

const TrainProvider = (props) => {
  let trains = [];
  let search = {
    from: "",
    to: "",
    date: "",
    travelClass: "",
    travelType: "",
  };
  let booking = {};
  if (sessionStorage.getItem("avail-trains")) {
    trains = JSON.parse(sessionStorage.getItem("avail-trains"));
  }
  if (sessionStorage.getItem("search-query")) {
    search = JSON.parse(sessionStorage.getItem("search-query"));
  }
  if (sessionStorage.getItem("booking-details")) {
    booking = JSON.parse(sessionStorage.getItem("booking-details"));
  }
  const [availTrains, setAvailTrains] = useState(trains);
  const [searchQuery, setSearchQuery] = useState(search);
  const [bookingDetails, setBookingDetails] = useState(booking);

  const syncStorage = () => {
    sessionStorage.setItem("avail-trains", JSON.stringify(availTrains));
    sessionStorage.setItem("search-query", JSON.stringify(searchQuery));
    sessionStorage.setItem("booking-details", JSON.stringify(bookingDetails));
  };
  return (
    <TrainContext.Provider
      value={{
        availTrains,
        searchQuery,
        bookingDetails,
        setAvailTrains,
        setSearchQuery,
        setBookingDetails,
        syncStorage,
      }}
    >
      {props.children}
    </TrainContext.Provider>
  );
};

export { TrainProvider, TrainContext };
