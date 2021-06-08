import React, { useContext, useState } from "react";
import Services from "../components/TrainSearch/Services";
import Holidays from "../components/TrainSearch/Holidays";
import { TrainContext } from "../context/context";
import { Link } from "react-router-dom";
import TrainServices from "../Services/TrainServices";
import loadingImg from "../images/loading.gif";

const TrainSearch = (props) => {
  const [loading, setLoading] = useState(false);
  const value = useContext(TrainContext);
  const { setSearchQuery, searchQuery, setAvailTrains, syncStorage } = value;
  const { date, from, to, travelClass, travelType } = searchQuery;

  //functionality
  const searchTrain = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TrainServices.searchTrain(searchQuery.from, searchQuery.to).then((res) => {
    //   setAvailTrains(res.data);

    //   setLoading(false);
    // });
    let res = await TrainServices.searchTrain(searchQuery.from, searchQuery.to);
    setAvailTrains(res.data);
    syncStorage();
    setLoading(false);
    props.history.push("/trains");
  };

  return (
    <div>
      {/* banner */}
      <div className="banner">
        <div className="row p-5">
          <div className="col-md-6">
            <div className="row">
              <Link to="/pnr" className="text-center p-2 tab">
                <img
                  src="./img/pnr.png"
                  alt="pnr"
                  width="22px"
                  className="mr-2"
                />
                PNR STATUS
              </Link>
              <div className="text-center ml-auto p-2 tab">
                <img
                  src="./img/chart.png"
                  alt="pnr"
                  width="22px"
                  className="mr-2"
                />
                VACANCY
              </div>
              <div className="bg-white p-3 w-100">
                <h3 className="text-center heading">BOOK TICKET</h3>
                <form onSubmit={searchTrain}>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <label htmlFor="from"></label>
                        <input
                          className="form-control"
                          placeholder="From"
                          value={from}
                          onChange={(e) => {
                            setSearchQuery({
                              ...searchQuery,
                              from: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="form-group mt-n4">
                        <label htmlFor="to"></label>
                        <input
                          className="form-control"
                          placeholder="To"
                          value={to}
                          onChange={(e) => {
                            setSearchQuery({
                              ...searchQuery,
                              to: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
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
                      {/* <div className="form-check d-inline">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value="option1"
                            id="op1"
                          />
                          Divyaang Concession
                        </label>
                      </div>
                      <div className="form-check d-inline">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value="option1"
                            id="op2"
                            defaultChecked
                          />
                          Flexible With Date
                        </label>
                      </div>
                      <div className="form-check d-inline">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value="option1"
                            id="op3"
                          />
                          Train With Available Berth
                        </label>
                      </div> */}
                    </div>
                    <div className="col-md-5">
                      <div className="form-group mt-4">
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
                      <div className="form-group">
                        <select
                          className="form-control"
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
                  </div>
                  <button type="submit" className="btn btn-warning mt-2">
                    Search
                  </button>
                  {loading && (
                    <img src={loadingImg} width="150px" alt="Loading..." />
                  )}
                </form>
              </div>
              <div className="bg-white p-3 mt-2 notice">
                <p>
                  Automatic refund of full train fare in case of train
                  cancellation by railways. No need to cancel such tickets.
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6 text-center text-white">
            <h1 className="display-4 banner-heading">INDIAN RAILWAYS</h1>
            <h4>Seafty | Security | Punctuality</h4>
          </div>
        </div>
      </div>
      {/* end of banner */}
      {/* servecies */}
      <Services />
      {/* end of servecies */}
      {/* Holidays */}
      <Holidays />
      {/* end of holidays */}
      <div className="d-block"></div>
    </div>
  );
};

export default TrainSearch;
