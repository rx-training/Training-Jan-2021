import React, { useContext, useEffect, useState } from "react";
import { TrainContext } from "../../context/context";
import TrainServices from "../../Services/TrainServices";

const SearchBar = ({ setLoading }) => {
  const value = useContext(TrainContext);
  const { setSearchQuery, searchQuery, setAvailTrains, syncStorage } = value;
  const { date, from, to, travelClass, travelType } = searchQuery;
  const [stations, setStations] = useState([]);
  const [toStations, setToStations] = useState([]);
  //console.log(date);
  //functionality
  useEffect(() => {
    TrainServices.getStations().then((res) => {
      let stationsData = res.data;
      setStations(stationsData);
      let toData = stationsData.filter((item) => item.station_name !== from);
      setToStations(toData);
    });
  }, []);

  const searchTrain = (e) => {
    e.preventDefault();
    setLoading(true);
    TrainServices.searchTrain(searchQuery.from, searchQuery.to).then((res) => {
      setAvailTrains(res.data);
      syncStorage();
      setLoading(false);
    });
  };
  return (
    <form className="p-3 search-bar" onSubmit={searchTrain}>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="form-group col-md-2">
          <select
            className="form-control"
            value={from}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                from: e.target.value,
              });
              let to = stations.filter(
                (item) => item.station_name !== e.target.value
              );
              setToStations(to);
            }}
            required
          >
            <option value="">-- From --</option>
            {stations.map((station) => (
              <option value={station.station_name} key={station._id}>
                {station.station_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-2">
          <select
            className="form-control"
            value={to}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                to: e.target.value,
              });
            }}
            required
          >
            <option value="">-- To --</option>
            {toStations.map((station) => (
              <option value={station.station_name} key={station._id}>
                {station.station_name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="form-group col-md-2">
          <select
            className="form-control"
            id="ticketType"
            value={travelType}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                travelType: e.target.value,
              });
            }}
          >
            <option value="GENERAL">GENERAL</option>
            <option value="LADIES">LADIES</option>
            <option value="SR.CITIZEN">SR.CITIZEN</option>
            <option value="DIVYAANG">DIVYAANG</option>
            <option value="TATKAL">TATKAL</option>
          </select>
        </div> */}

        <div className="form-group col-md-2">
          <input
            type="date"
            className="form-control"
            min={new Date().toISOString().split("T")[0]}
            required
            value={date}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                date: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group col-md-2">
          <select
            className="form-control"
            id="seatType"
            value={travelClass}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                travelClass: e.target.value,
              });
            }}
          >
            <option value="">All Class</option>
            <option value="AC TIER 1">AC TIER 1</option>
            <option value="AC TIER 2">AC TIER 2</option>
            <option value="AC TIER 3">AC TIER 3</option>
            <option value="SLEEPER 1">SLEEPER 1</option>
            <option value="SLEEPER 2">SLEEPER 2</option>
            <option value="REGULAR">REGULAR</option>
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-warning">
            Modify Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
