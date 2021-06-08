import React, { useContext } from "react";
import { TrainContext } from "../../context/context";
import TrainServices from "../../Services/TrainServices";

const SearchBar = ({ setLoading }) => {
  const value = useContext(TrainContext);
  const { setSearchQuery, searchQuery, setAvailTrains, syncStorage } = value;
  const { date, from, to, travelClass, travelType } = searchQuery;
  //console.log(date);
  //functionality
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
          <input
            className="form-control text-primary"
            required
            placeholder="From"
            value={from}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                from: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group col-md-2">
          <input
            className="form-control text-primary"
            required
            placeholder="To"
            value={to}
            onChange={(e) => {
              setSearchQuery({
                ...searchQuery,
                to: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group col-md-2">
          <select
            className="form-control text-primary"
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
        </div>

        <div className="form-group col-md-2">
          <input
            type="date"
            className="form-control text-primary"
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
            className="form-control text-primary"
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
      </div>
      <div className="row text-center">
        {/* <div className="col-md-1"></div> */}
        {/* <div className="form-check col-md-2">
          <label className="form-check-label text-white">
            <input
              type="checkbox"
              className="form-check-input"
              value="option1"
              id="op1"
            />
            Divyaang Concession
          </label>
        </div>
        <div className="form-check col-md-2">
          <label className="form-check-label text-white">
            <input
              type="checkbox"
              className="form-check-input"
              value="option1"
              defaultChecked
              id="op2"
            />
            Flexible With Date
          </label>
        </div>
        <div className="form-check col-md-2">
          <label className="form-check-label text-white">
            <input
              type="checkbox"
              className="form-check-input"
              value="option1"
              id="op3"
            />
            Train With Available Berth
          </label>
        </div> */}
        <button
          type="submit"
          className="btn btn-warning col-md-2 col-10 mx-auto"
        >
          Modify Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
