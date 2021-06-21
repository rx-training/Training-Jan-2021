import React, { useEffect, useState } from "react";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import { removeUserSession } from "../../Utils/Common";

const StationForm = (props) => {
  const id = props.match.params.id;
  const [station, setStation] = useState({
    station_name: "",
  });
  const [errors, setErrors] = useState({ station_name: "" });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);

  useEffect(() => {
    if (id !== "_add") {
      setSecondLoading(true);
      TrainServices.getStationById(id)
        .then((res) => {
          setStation({
            station_name: res.data.station_name,
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
    if (name === "station_name") {
      if (value.trim().length < 3) {
        error[name] = "must be at least 3 characters long!";
      } else {
        error[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid characters";
      }
    }
    setErrors({ ...errors, error });
    setStation({ ...station, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      setLoading(true);
      if (id === "_add") {
        TrainServices.addStation(station)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/stations");
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
        TrainServices.editStation(id, station)
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard/stations");
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
          Station
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
              <label htmlFor="station_name">Station Name :</label>
              <input
                type="text"
                id="station_name"
                name="station_name"
                className="form-control"
                placeholder="station name"
                onChange={handleChange}
                value={station.station_name}
                required
              />
              {errors.station_name.length > 0 && (
                <small className="text-danger">{errors.station_name}</small>
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

export default StationForm;
