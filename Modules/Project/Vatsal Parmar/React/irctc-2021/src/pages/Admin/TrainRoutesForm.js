import React, { useEffect, useState } from "react";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import { removeUserSession } from "../../Utils/Common";

const TrainRoutesForm = (props) => {
  const id = props.match.params.id;
  const [trainRoute, setTrainRoute] = useState({
    train: "",
    station: "",
    stop_no: "",
    arr_time: "",
    depart_time: "",
  });
  const [trains, setTrains] = useState([]);
  const [stations, setStations] = useState([]);
  const [errors, setErrors] = useState({
    stop_no: "",
    arr_time: "",
    depart_time: "",
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);

  //functionality

  useEffect(() => {
    if (id !== "_add") {
      setSecondLoading(true);
      TrainServices.getTrains()
        .then((res) => {
          setTrains(res.data);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
      TrainServices.getStations()
        .then((res) => {
          setStations(res.data);
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
      TrainServices.getTrainRouteById(id)
        .then((res) => {
          setTrainRoute({
            station: res.data.station._id,
            train: res.data.train._id,
            stop_no: res.data.stop_no,
            arr_time: res.data.arr_time,
            depart_time: res.data.depart_time,
          });
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    } else {
      setSecondLoading(true);
      TrainServices.getTrains()
        .then((res) => {
          setTrains(res.data);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
      TrainServices.getStations()
        .then((res) => {
          setStations(res.data);
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    }
  }, []);
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let error = errors;
    if (name === "arr_time" || name === "depart_time") {
      if (/([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(value)) {
        error[name] = "";
      } else {
        error[name] = "Enter Valid Time(24hrs formet)";
      }
    } else if (name === "stop_no") {
      if (value > 0 && value < 21) {
        error[name] = "";
      } else {
        error[name] = "Should be between 0 and 20";
      }
    }
    setErrors({ ...errors, error });
    if (name === "stop_no") {
      let no = parseInt(value);
      setTrainRoute({ ...trainRoute, [name]: no });
    }
    setTrainRoute({ ...trainRoute, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);
      if (id === "_add") {
        TrainServices.addTrainRoute(trainRoute)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/train-routes");
            }
          })
          .catch((error) => {
            //setLoading(false);
            if (error.response.status === 401) {
              removeUserSession();
              window.location.href = "/login";
            }
            if (error.response.status === 400) {
              console.log(error.response.data);
            }
          });
      } else {
        TrainServices.editTrainRoute(id, trainRoute)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/train-routes");
            }
          })
          .catch((error) => {
            //setLoading(false);
            if (error.response.status === 401) {
              removeUserSession();
              window.location.href = "/login";
            }
            if (error.response.status === 400) {
              console.log(error.response.data);
            }
          });
      }
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };

  return (
    <div className="container">
      <div className="my-5 col-md-8 mx-auto">
        <h2 className="text-center p-3 heading-primary text-white rounded-top mb-0">
          Train Route
        </h2>
        {secondLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <img src={loadingImg} width="70%" alt="loading..." />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-4 px-5 border border-secondary rounded-bottom"
          >
            <div className="form-group">
              <label htmlFor="train">Train :</label>
              <select
                name="train"
                className="form-control"
                id="train"
                onChange={handleChange}
                value={trainRoute.train}
                required
              >
                <option value="">Select Train</option>
                {trains.map((train) => (
                  <option value={train._id} key={train._id}>
                    {train.train_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="station">Station :</label>
              <select
                name="station"
                className="form-control"
                id="station"
                onChange={handleChange}
                value={trainRoute.station}
                required
              >
                <option value="">Select Station</option>
                {stations.map((station) => (
                  <option value={station._id} key={station._id}>
                    {station.station_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="arr_time">Arrival Time :</label>
              <input
                type="text"
                id="arr_time"
                name="arr_time"
                className="form-control"
                placeholder="hh:mm"
                onChange={handleChange}
                value={trainRoute.arr_time}
                required
              />
              {errors.arr_time.length > 0 && (
                <small className="text-danger">{errors.arr_time}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="depart_time">Departure Time :</label>
              <input
                type="text"
                id="depart_time"
                name="depart_time"
                className="form-control"
                placeholder="hh:mm"
                onChange={handleChange}
                value={trainRoute.depart_time}
                required
              />
              {errors.depart_time.length > 0 && (
                <small className="text-danger">{errors.depart_time}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="stop_no">Stop No :</label>
              <input
                type="number"
                id="stop_no"
                name="stop_no"
                className="form-control"
                placeholder="stop no"
                onChange={handleChange}
                value={trainRoute.stop_no}
                required
              />
              {errors.stop_no.length > 0 && (
                <small className="text-danger">{errors.stop_no}</small>
              )}
            </div>
            <button
              className={
                id === "_add" ? "btn btn-success px-4" : "btn btn-info px-4"
              }
            >
              {id === "_add" ? "Add" : "Update"}
            </button>
            {loading && <img src={loadingImg} alt="loading..." width="200px" />}
            {formError.length > 0 && (
              <p className="text-danger mt-2">{formError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default TrainRoutesForm;
